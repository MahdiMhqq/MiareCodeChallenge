import React, { ReactNode } from "react";

interface ICustomInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> {
  customClass?: string;
  label?: string;
  suffix?: ReactNode;
  onSuffixClick?: () => void;
}

const Input: React.FunctionComponent<ICustomInputProps> = ({
  customClass = "",
  label,
  suffix,
  onSuffixClick,
  ...rest
}) => {
  return (
    <div className={`flex items-center gap-x-3 relative ${customClass}`}>
      <label htmlFor={label} className="font-bold text-sm tablet:text-base">
        {label}
      </label>
      <input
        className={`w-[24ch] px-3 h-8 text-sm tablet:text-base overflow-hidden flex items-center rounded-lg bg-white text-right shadow-md focus:outline-none focus-visible:border-info focus-visible:ring-2 focus-visible:ring-info focus-visible:ring-opacity-75 placeholder:text-tblack`}
        {...rest}
        id={label}
      />
      {suffix && (
        <span
          className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-1 cursor-pointer group"
          onClick={onSuffixClick}
        >
          {suffix}
        </span>
      )}
    </div>
  );
};

export default Input;
