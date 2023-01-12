import React, { useState } from "react";

import BasicDropdown from "components/UI/BasicDropdown";
import { dataFilters, EDataFilters } from "./services";

const ReportPage: React.FunctionComponent = () => {
  const [queryParams, setQueryParams] = useState({
    filterIndex: EDataFilters.ALL,
    offset: 0,
    order: 10,
  });

  return (
    <div>
      <BasicDropdown
        title="نوع تراکنش"
        activeItem={dataFilters[queryParams.filterIndex]}
        items={dataFilters}
        onChange={(_, index) => {
          console.log({ _, index });
          setQueryParams((prev) => ({ ...prev, filterIndex: index }));
        }}
      />
    </div>
  );
};

export default ReportPage;
