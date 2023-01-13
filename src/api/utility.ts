import { DateTime } from "luxon";
import { IDateCategorizedExpenses, IExpense } from "types";

// Sort By Desc Time
export const dateSort = (expenses: IExpense[]) => {
  return [...expenses].sort((a, b) => b.exactDate.localeCompare(a.exactDate));
};

// Categorize Data Day by Day
export const categorizedDate = (
  expenses: IExpense[]
): IDateCategorizedExpenses[] => {
  const datesArr = expenses.map((expense) => expense.exactDate);
  const dayDates = datesArr
    .map((date) => {
      if (DateTime.fromISO(date)?.isValid) {
        return DateTime.fromISO(date).toLocal().toFormat("yyyy-MM-dd");
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
      const uniqueDateExpenses: IExpense[] = expenses
        .filter((expense) => expense.exactDate.includes(uniqueDate))
        ?.map((expense) => ({
          ...expense,
          exactDate: DateTime.fromISO(expense.exactDate)
            .toLocal()
            .setLocale("fa-IR")
            .toLocaleString({
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hourCycle: "h23",
            }),
        }));
      return {
        date: DateTime.fromFormat(uniqueDate, "yyyy-MM-dd")
          .setLocale("fa-IR")
          .toLocaleString(),
        expenses: uniqueDateExpenses,
      };
    }
  );

  return categorizedExpenses;
};

export const dateSortCategorize = (
  expenses: IExpense[]
): IDateCategorizedExpenses[] => {
  return categorizedDate(dateSort(expenses));
};
