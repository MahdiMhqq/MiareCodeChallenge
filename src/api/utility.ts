import { DateTime } from "luxon";
import { IDateCategorizedExpenses, IExpense } from "types";

export const dateSort = (expenses: IExpense[]) => {
  return [...expenses].sort((a, b) => b.exactDate.localeCompare(a.exactDate));
};

export const categorizedDate = (
  expenses: IExpense[]
): IDateCategorizedExpenses[] => {
  const datesArr = expenses.map((expense) => expense.exactDate);
  const dayDates = datesArr
    .map((date) => {
      if (DateTime.fromISO(date)?.isValid) {
        return DateTime.fromISO(date).toFormat("yyyy-MM-dd");
      } else {
        return null;
      }
    })
    .filter((date): date is string => !!date);

  // Array to Set and Set to Array to get unique Dates only
  const uniqueDayDates = Array.from(new Set(dayDates).values());

  // Categorize Expenses by date
  const categorizedExpenses: IDateCategorizedExpenses[] = uniqueDayDates.map(
    (uniqueDate) => {
      const uniqueDateExpenses: IExpense[] = expenses.filter((expense) =>
        expense.exactDate.includes(uniqueDate)
      );
      return {
        date: uniqueDate,
        expenses: uniqueDateExpenses,
      };
    }
  );

  return categorizedExpenses;
};
