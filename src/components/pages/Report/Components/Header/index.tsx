import React from "react";

import BasicDropdown from "components/UI/BasicDropdown";

import { dataFilters } from "utils/appConfig";
import { IReportQueryParams } from "types";

interface IHeaderProps {
  queryParams: IReportQueryParams;
  setQueryParams: React.Dispatch<React.SetStateAction<IReportQueryParams>>;
}

const Header: React.FunctionComponent<IHeaderProps> = ({
  queryParams,
  setQueryParams,
}) => {
  return (
    <header className="px-4 py-2 flex flex-col items-start gap-y-3 xxs:flex-row xxs:items-center justify-between bg-opacity-30 bg-primary">
      <h1 className="font-bold text-sm tablet:text-base">تراکنش ها</h1>
      <BasicDropdown
        title="نوع تراکنش"
        activeItem={dataFilters[queryParams.filterIndex]}
        items={dataFilters}
        onChange={(_, index) => {
          setQueryParams((prev) => ({
            ...prev,
            filterIndex: index,
          }));
        }}
        customClass="mr-auto"
      />
    </header>
  );
};

export default Header;
