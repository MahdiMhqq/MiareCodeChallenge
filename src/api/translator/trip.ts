import { apiSlice } from "api/apiSlice";
import { ITripResponse } from "api/types";
import { dateSortCategorize } from "api/utility";
import {
  IDateCategorizedExpenses,
  EDataKinds,
  ITripApiCallParams,
} from "types";
import { translator } from ".";

export const tripExtendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrips: builder.query<IDateCategorizedExpenses[], ITripApiCallParams>({
      query: () => `/trip_financials`,
      transformResponse: (response: ITripResponse[], _, args) => {
        // Normalize Data to IExpense Data Type
        const transformedExpenses = translator[EDataKinds.TRIP](response);

        return dateSortCategorize(
          transformedExpenses?.filter((expense) =>
            expense.searchable?.driver?.includes(args.search)
          )
        );
      },
      providesTags: ["Trips"],
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetTripsQuery } = tripExtendedApiSlice;
