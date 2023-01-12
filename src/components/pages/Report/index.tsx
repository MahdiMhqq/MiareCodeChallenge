import React, { useState } from "react";

import { EDataFilters, IReportQueryParams } from "types";
import Header from "./Components/Header";

const ReportPage: React.FunctionComponent = () => {
  const [queryParams, setQueryParams] = useState<IReportQueryParams>({
    filterIndex: EDataFilters.ALL,
    offset: 0,
    order: 10,
  });

  return (
    <div>
      <Header queryParams={queryParams} setQueryParams={setQueryParams} />
    </div>
  );
};

export default ReportPage;
