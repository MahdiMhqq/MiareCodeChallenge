import React from "react";

interface IErrorProps {
  error: any | undefined;
  customClass?: string;
}

const Error: React.FunctionComponent<IErrorProps> = ({
  customClass = "",
  error,
}) => {
  return (
    <div className={`text-par my-4 text-tblack ${customClass}`}>
      {error &&
      (typeof error?.message === "string" || typeof error?.error === "string")
        ? error.message ?? error.error
        : "خطایی رخ داده است!"}
    </div>
  );
};

export default Error;
