import { apiSlice } from "api/apiSlice";
import { IMiscResponse } from "api/types";
import { dateSortCategorize } from "api/utility";
import { IDateCategorizedExpenses, EDataKinds } from "types";
import { translator } from ".";

export const miscExtendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMiscs: builder.query<IDateCategorizedExpenses[], void>({
      query: () => "/misc_expenses",
      transformResponse: (response: IMiscResponse[]) => {
        // Normalize Data to IExpense Data Type
        const transformedExpenses = translator[EDataKinds.MISC](response);

        return dateSortCategorize(transformedExpenses);
      },
      providesTags: ["Miscs"],
    }),
  }),
});

export const { useGetMiscsQuery } = miscExtendedApiSlice;
