import React, { useState } from "react";

import { EDataFilters, IReportQueryParams } from "types";
import { dataKinds } from "utils/appConfig";
import Header from "./Components/Header";
import Section, { ISectionProps } from "./Components/Section";

const fakeData: ISectionProps = {
  date: "شنبه 27 فروردین 1401",
  expenses: [
    {
      id: 1,
      exactDate: "1401/1/27, 18:24",
      kind: EDataFilters.TRIP,
      kindTitle: dataKinds[EDataFilters.TRIP - 1],
      price: -120000,
    },
    {
      id: 2,
      exactDate: "1401/1/27, 18:24",
      kind: EDataFilters.CONCURRENCY,
      kindTitle: dataKinds[EDataFilters.CONCURRENCY - 1],
      price: +120000,
    },
    {
      id: 3,
      exactDate: "1401/1/27, 18:24",
      kind: EDataFilters.TRIP,
      kindTitle: dataKinds[EDataFilters.TRIP - 1],
      price: +120000,
      desc: {
        info: ["کوریر: تست جدید", "شعبه: شیراز"],
      },
      searchable: ["تست جدید"],
    },
  ],
};

const ReportPage: React.FunctionComponent = () => {
  const [queryParams, setQueryParams] = useState<IReportQueryParams>({
    filterIndex: EDataFilters.ALL,
    offset: 0,
    order: 10,
  });

  return (
    <div>
      <Header queryParams={queryParams} setQueryParams={setQueryParams} />
      <Section date={fakeData.date} expenses={fakeData.expenses} />
    </div>
  );
};

export default ReportPage;
