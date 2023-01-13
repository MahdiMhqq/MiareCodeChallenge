import React from "react";

import Header from "./Components/Header";
import Scrollable from "./Components/Scrollable";

import useReportQuery from "./hooks/useReportQuery";

import { EDataFilters } from "types";

const initialQueryParams = {
  filterIndex: EDataFilters.ALL,
  offset: 0,
  order: 10,
  search: "",
};

const ReportPage: React.FunctionComponent = () => {
  // Query Param Custom Hook
  const { queryOutput, queryParams, setQueryParams } =
    useReportQuery(initialQueryParams);
  const { data, isLoading, isFetching, isSuccess, isError, error } =
    queryOutput;

  return (
    <div className="flex flex-col h-screen">
      <Header
        queryParams={queryParams}
        setQueryParams={setQueryParams}
        customClass={"sticky top-0 left-0 right-0 z-20"}
      />
      <Scrollable
        customClass="grow"
        data={data}
        error={error}
        isError={isError}
        isFetching={isFetching}
        isLoading={isLoading}
        isSuccess={isSuccess}
        setQueryParams={setQueryParams}
      />
    </div>
  );
};

export default ReportPage;
