import React from "react";

interface ILoadingProps {
  customClass?: string;
}

const Loading: React.FunctionComponent<ILoadingProps> = ({
  customClass = "",
}) => {
  return (
    <div className={`text-par my-4 text-tblack ${customClass}`}>
      در حال بارگزاری...
    </div>
  );
};

export default Loading;
