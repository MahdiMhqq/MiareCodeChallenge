import NoData from "components/UI/NoData";
import React, { useEffect, useState } from "react";

import { EDataFilters } from "types";

import Header from "./Components/Header";
import Section from "./Components/Section";
import useReportQuery from "./hooks/useReportQuery";

const initialQueryParams = {
  filterIndex: EDataFilters.ALL,
  offset: 0,
  order: 10,
};

const ReportPage: React.FunctionComponent = () => {
  // Query Param Custom Hook
  const { queryOutput, queryParams, setQueryParams } =
    useReportQuery(initialQueryParams);
  const { data, isLoading, isFetching, isSuccess, error } = queryOutput;

  return (
    <div>
      <Header queryParams={queryParams} setQueryParams={setQueryParams} />
      {data && data.length > 0 ? (
        data.map((data) => (
          <Section key={data.date} date={data.date} expenses={data.expenses} />
        ))
      ) : (
        <NoData customClass="mx-auto w-max" />
      )}
    </div>
  );
};

export default ReportPage;
