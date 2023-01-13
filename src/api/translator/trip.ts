import { apiSlice } from "api/apiSlice";
import { ITripResponse } from "api/types";
import { dateSortCategorize } from "api/utility";
import { IDateCategorizedExpenses, EDataKinds } from "types";
import { translator } from ".";

export const tripExtendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrips: builder.query<IDateCategorizedExpenses[], void>({
      query: () => "/trip_financials",
      transformResponse: (response: ITripResponse[]) => {
        // Normalize Data to IExpense Data Type
        const transformedExpenses = translator[EDataKinds.TRIP](response);

        return dateSortCategorize(transformedExpenses);
      },
      providesTags: ["Trips"],
    }),
  }),
});

export const { useGetTripsQuery } = tripExtendedApiSlice;
