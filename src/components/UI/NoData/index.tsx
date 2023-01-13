import React from "react";

interface INoDataProps {
  customClass?: string;
}

const NoData: React.FunctionComponent<INoDataProps> = ({
  customClass = "",
}) => {
  return (
    <p className={`text-par my-4 text-tblack ${customClass}`}>
      داده ای جهت نمایش وجود ندارد!
    </p>
  );
};

export default NoData;
