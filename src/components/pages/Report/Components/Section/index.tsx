import React from "react";
import { IExpense } from "types";
import ExpenseDetails from "./ExpenseDetails";

export interface ISectionProps {
  date: string;
  expenses: IExpense[];
  customClass?: string;
}

const Section: React.FunctionComponent<ISectionProps> = ({
  date,
  expenses,
  customClass = "",
}) => {
  return (
    <>
      {expenses.length > 0 && (
        <section className={`mb-8 ${customClass}`}>
          <h6 className="bg-gray px-4 tablet:px-8 desktop:px-16 py-3 font-medium text-tblack text-sm tablet:text-base">
            {date}
          </h6>
          <div className="px-4 tablet:px-8 desktop:px-16">
            {expenses.map((expense) => (
              <ExpenseDetails
                key={expense.id}
                expense={expense}
                customClass={"border-b border-gray last:border-b-0"}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Section;
