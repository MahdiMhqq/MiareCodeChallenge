import React from "react";

import BasicDropdown from "components/UI/BasicDropdown";
import Input from "components/UI/Input";

import { dataFilters } from "utils/appConfig";

import { EDataFilters, IReportQueryParams } from "types";

import icons from "utils/icons";

interface IHeaderProps {
  customClass?: string;
  queryParams: IReportQueryParams;
  setQueryParams: React.Dispatch<React.SetStateAction<IReportQueryParams>>;
}

const Header: React.FunctionComponent<IHeaderProps> = ({
  customClass = "",
  queryParams,
  setQueryParams,
}) => {
  return (
    <header
      className={`px-4 py-2 bg-opacity-30 bg-primary backdrop-blur-md ${customClass}`}
    >
      <div className="flex flex-col items-start gap-y-3 xxs:flex-row xxs:items-center justify-between">
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
      </div>

      {queryParams.filterIndex === EDataFilters.TRIP && (
        <Input
          label="جستجو"
          customClass="w-full justify-end mt-3"
          value={queryParams.search}
          onChange={(e) =>
            setQueryParams((prev) => ({ ...prev, search: e.target.value }))
          }
          placeholder="نام پیک..."
          suffix={
            queryParams.search
              ? icons.xMarkSquareFilled("h-6 w-6", "fill-tdanger")
              : undefined
          }
          onSuffixClick={() =>
            setQueryParams((prev) => ({ ...prev, search: "" }))
          }
        />
      )}
    </header>
  );
};

export default Header;
