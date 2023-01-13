import React from "react";

import Error from "components/UI/Error";
import Loading from "components/UI/Loading";
import NoData from "components/UI/NoData";
import Header from "./Components/Header";
import Section from "./Components/Section";

import useReportQuery from "./hooks/useReportQuery";

import { EDataFilters } from "types";

const initialQueryParams = {
  filterIndex: EDataFilters.ALL,
  offset: 0,
  order: 10,
};

const ReportPage: React.FunctionComponent = () => {
  // Query Param Custom Hook
  const { queryOutput, queryParams, setQueryParams } =
    useReportQuery(initialQueryParams);
  const { data, isLoading, isFetching, isSuccess, isError, error } =
    queryOutput;

  // Render Content
  const content =
    isLoading || isFetching ? (
      <Loading customClass="mx-auto w-max" />
    ) : isError ? (
      <Error error={error} customClass="mx-auto w-max" />
    ) : isSuccess && data && data.length > 0 ? (
      data.map((data) => (
        <Section key={data.date} date={data.date} expenses={data.expenses} />
      ))
    ) : (
      <NoData customClass="mx-auto w-max" />
    );

  return (
    <div>
      <Header queryParams={queryParams} setQueryParams={setQueryParams} />
      {content}
    </div>
  );
};

export default ReportPage;
