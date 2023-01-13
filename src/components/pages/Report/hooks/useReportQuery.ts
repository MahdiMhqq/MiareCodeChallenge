import React, { useState } from "react";
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
  const concurrency = ApiHooks.useGetConcurrenciesQuery(undefined, {
    skip: queryParams.filterIndex !== EDataKinds.CONCURRENCY + 1,
  });
  const payment = ApiHooks.useGetPaymentsQuery(undefined, {
    skip: queryParams.filterIndex !== EDataKinds.PAYMENTS + 1,
  });
  const trip = ApiHooks.useGetTripsQuery(undefined, {
    skip: queryParams.filterIndex !== EDataKinds.TRIP + 1,
  });
  const misc = ApiHooks.useGetMiscsQuery(undefined, {
    skip: queryParams.filterIndex !== EDataKinds.MISC + 1,
  });

  const apiCalls = [payment, concurrency, payment, trip, misc];

  return {
    queryParams,
    setQueryParams,
    queryOutput: queryParams.filterIndex
      ? apiCalls[queryParams.filterIndex]
      : apiCalls[0],
  };
}

export default useReportQuery;
