import { useEffect, useState } from "react";
import ApiHooks from "api/apiHooks";

import { EDataKinds, IReportQueryParams } from "types";

/*
export enum EDataKinds {
  CONCURRENCY,
  PAYMENTS,
  TRIP,
  MISC,
}
*/

function useReportQuery(initialState: IReportQueryParams) {
  // STATES
  const [queryParams, setQueryParams] = useState(initialState);

  // API CALL HOOKS
  const all = ApiHooks.useGetAllQuery(undefined, {
    skip: queryParams.filterIndex !== 0,
  });
  const concurrency = ApiHooks.useGetConcurrenciesQuery(undefined, {
    skip: queryParams.filterIndex !== EDataKinds.CONCURRENCY + 1,
  });
  const payment = ApiHooks.useGetPaymentsQuery(undefined, {
    skip: queryParams.filterIndex !== EDataKinds.PAYMENTS + 1,
  });
  const trip = ApiHooks.useGetTripsQuery(
    {
      offset: queryParams.offset,
      order: queryParams.order,
      search: queryParams.search,
    },
    {
      skip: queryParams.filterIndex !== EDataKinds.TRIP + 1,
    }
  );
  const misc = ApiHooks.useGetMiscsQuery(undefined, {
    skip: queryParams.filterIndex !== EDataKinds.MISC + 1,
  });

  const apiCalls = [all, concurrency, payment, trip, misc];

  // LIFE CYCLE METHODS
  useEffect(() => {
    setQueryParams((prev) => ({ ...prev, offset: 0, order: 10 }));
  }, [queryParams.search]);

  useEffect(() => {
    setQueryParams((prev) => ({ ...prev, offset: 0, order: 10, search: "" }));
  }, [queryParams.filterIndex]);

  return {
    queryParams,
    setQueryParams,
    queryOutput: queryParams.filterIndex
      ? apiCalls[queryParams.filterIndex]
      : apiCalls[0],
  };
}

export default useReportQuery;
