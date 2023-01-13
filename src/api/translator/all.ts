import { apiSlice } from "../apiSlice";
import {
  IConcurrencyResponse,
  IMiscResponse,
  IPaymentResponse,
  ITripResponse,
} from "../types";
import { EDataKinds, IDateCategorizedExpenses } from "../../types";
import { dateSortCategorize } from "../utility";
import { translator } from ".";

export const allExtendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query<IDateCategorizedExpenses[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const allResults = await Promise.all([
          fetchWithBQ("/concurrency_costs"),
          fetchWithBQ("/payments"),
          fetchWithBQ("/trip_financials"),
          fetchWithBQ("/misc_expenses"),
        ]).catch(console.error);

        const concurrency = allResults?.[0]?.data as IConcurrencyResponse[];
        const payments = allResults?.[1]?.data as IPaymentResponse[];
        const trips = allResults?.[2]?.data as ITripResponse[];
        const miscs = allResults?.[3]?.data as IMiscResponse[];

        const transformedConcurency =
          translator[EDataKinds.CONCURRENCY](concurrency);
        const transformedPayments = translator[EDataKinds.PAYMENTS](payments);
        const transformedTrips = translator[EDataKinds.TRIP](trips);
        const transformedMiscs = translator[EDataKinds.MISC](miscs);

        const allData = transformedConcurency.concat(
          transformedPayments,
          transformedTrips,
          transformedMiscs
        );

        return {
          data: dateSortCategorize(allData),
        };
      },
    }),
  }),
});

export const { useGetAllQuery } = allExtendedApiSlice;
