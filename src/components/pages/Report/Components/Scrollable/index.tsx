import React, { useRef } from "react";

import Loading from "components/UI/Loading";
import NoData from "components/UI/NoData";
import Section from "../Section";
import Error from "components/UI/Error";

import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import type { IDateCategorizedExpenses, IReportQueryParams } from "types";
import useLoadMore from "../../hooks/useLoadMore";

interface IScrollableProps {
  customClass?: string;
  data: IDateCategorizedExpenses[] | undefined;
  isLoading: boolean;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  //   queryParams: IReportQueryParams;
  setQueryParams: React.Dispatch<React.SetStateAction<IReportQueryParams>>;
}

const Scrollable: React.FunctionComponent<IScrollableProps> = ({
  data,
  isLoading,
  isFetching,
  isSuccess,
  isError,
  error,
  //   queryParams,
  setQueryParams,
  customClass = "",
}) => {
  // Refs
  const scrollableRef = useRef<HTMLDivElement>(null);

  // Load More Custom HOOK
  useLoadMore(isLoading || isFetching, scrollableRef, setQueryParams);

  // Render Content
  const content =
    (isLoading || isFetching) && !data ? (
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
    <div
      className={`overflow-y-scroll custom-scroll ${customClass}`}
      ref={scrollableRef}
    >
      {content}
    </div>
  );
};

export default Scrollable;
