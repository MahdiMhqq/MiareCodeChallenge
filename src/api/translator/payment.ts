import { apiSlice } from "api/apiSlice";
import { IPaymentResponse } from "api/types";
import {  dateSortCategorize } from "api/utility";
import { IDateCategorizedExpenses, EDataKinds } from "types";
import { translator } from ".";

export const paymentExtendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPayments: builder.query<IDateCategorizedExpenses[], void>({
      query: () => "/payments",
      transformResponse: (response: IPaymentResponse[]) => {
        // Normalize Data to IExpense Data Type
        const transformedExpenses = translator[EDataKinds.PAYMENTS](response);

        return dateSortCategorize(transformedExpenses);
      },
      providesTags: ["Payments"],
    }),
  }),
});

export const { useGetPaymentsQuery } = paymentExtendedApiSlice;
