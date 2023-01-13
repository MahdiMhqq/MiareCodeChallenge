import { useGetPaymentsQuery } from "api/payment";
import NoData from "components/UI/NoData";
import React, { useEffect, useState } from "react";

import { EDataFilters, IReportQueryParams } from "types";

import Header from "./Components/Header";
import Section from "./Components/Section";

const ReportPage: React.FunctionComponent = () => {
  const [queryParams, setQueryParams] = useState<IReportQueryParams>({
    filterIndex: EDataFilters.ALL,
    offset: 0,
    order: 10,
  });

  const { data: paymentData, isLoading } = useGetPaymentsQuery();
  console.log({ paymentData });

  return (
    <div>
      <Header queryParams={queryParams} setQueryParams={setQueryParams} />
      {paymentData && paymentData.length > 0 ? (
        paymentData.map((data) => (
          <Section key={data.date} date={data.date} expenses={data.expenses} />
        ))
      ) : (
        <NoData customClass="mx-auto w-max" />
      )}
    </div>
  );
};

export default ReportPage;
