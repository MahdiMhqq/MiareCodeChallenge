import { renderHook } from "@testing-library/react";
import useReportQuery from "components/pages/Report/hooks/useReportQuery";
import { EDataFilters } from "types";
import TestDecorator from "./testDecorator";

test("useReportQuery test", async () => {
  const {
    current: {
      queryOutput: { isError, isLoading, data },
    },
  } = renderHook(
    () =>
      useReportQuery({
        filterIndex: EDataFilters.CONCURRENCY,
        offset: 0,
        order: 10,
        search: "",
      }),
    { wrapper: TestDecorator }
  ).result;

  expect(typeof isError).toEqual("boolean");
  expect(typeof isLoading).toEqual("boolean");
});
