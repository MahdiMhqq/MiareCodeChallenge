import React from "react";
import { IExpense } from "types";

interface IExpenseDetails {
  expense: IExpense;
  customClass?: string;
}

const ExpenseDetails: React.FunctionComponent<IExpenseDetails> = ({
  expense,
  customClass = "",
}) => {
  return (
    <div className={`py-2 ${customClass}`}>
      <p className="text-sub3 text-tblack mb-1">{expense.exactDate}</p>
      <div
        className={`mb-2 flex items-center justify-between ${
          expense.price > 0 ? "text-tsuccess" : "text-tdanger"
        }`}
      >
        <p className="text-sub2">{expense.kindTitle}</p>
        <span
          className={`text-sub2 font-medium ltr ${
            expense.price === 0 ? "text-tsuccess" : ""
          }`}
        >
          {expense.price
            ? expense.price.toLocaleString(undefined, {
                signDisplay: "always",
                maximumFractionDigits: 1,
              })
            : "رایگان"}
        </span>
      </div>
      {expense?.desc && (
        <>
          {expense.desc.important &&
            expense.desc.important?.map((importantDesc) => (
              <p
                key={importantDesc}
                className="text-sub3 text-tblack font-bold"
              >
                {importantDesc}
              </p>
            ))}
          {expense.desc.info &&
            expense.desc.info?.map((infoDesc) => (
              <p key={infoDesc} className="text-sub3 text-tblack">
                {infoDesc}
              </p>
            ))}
        </>
      )}
    </div>
  );
};

export default ExpenseDetails;
