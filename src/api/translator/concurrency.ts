import { apiSlice } from "../apiSlice";
import { IConcurrencyResponse } from "../types";
import { EDataKinds, IDateCategorizedExpenses } from "../../types";
import { dateSortCategorize } from "../utility";
import { translator } from ".";

export const concurrencyExtendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConcurrencies: builder.query<IDateCategorizedExpenses[], void>({
      query: () => "/concurrency_costs",
      transformResponse: (response: IConcurrencyResponse[]) => {
        // Normalize Data to IExpense Data Type
        const transformedExpenses = translator[EDataKinds.CONCURRENCY](response);

        return dateSortCategorize(transformedExpenses);
      },
      providesTags: ["Concurrency"],
    }),
  }),
});

export const { useGetConcurrenciesQuery } = concurrencyExtendedApiSlice;
