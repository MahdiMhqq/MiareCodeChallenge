import { apiSlice } from "./apiSlice";
import { IPaymentResponse } from "./types";
import { EDataFilters, IDateCategorizedExpenses, IExpense } from "../types";
import { dataKinds } from "../utils/appConfig";
import { categorizedDate, dateSort } from "./utility";

export const paymentExtendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPayments: builder.query<IDateCategorizedExpenses[], void>({
      query: () => "/payments",
      transformResponse: (response: IPaymentResponse[]) => {
        // Normalize Data to IExpense Data Type
        let transformedExpenses: IExpense[] = response?.map((payment) => ({
          id: payment.id,
          kind: EDataFilters.PAYMENTS,
          kindTitle: dataKinds[EDataFilters.PAYMENTS - 1],
          price: payment.amount,
          exactDate: payment.datetime,
          desc:
            typeof payment.description === "string"
              ? {
                  info: [payment.description],
                }
              : undefined,
        }));

        // Sort By Desc Time
        transformedExpenses = dateSort(transformedExpenses);

        // Categorize Data Day by Day
        const categorizedPaymentData = categorizedDate(transformedExpenses);

        return categorizedPaymentData;
      },
      providesTags: ["Payments"],
    }),
  }),
});

export const { useGetPaymentsQuery } = paymentExtendedApiSlice;
