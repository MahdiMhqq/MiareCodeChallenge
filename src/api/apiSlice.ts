import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IConcurrencyResponse,
  IMiscResponse,
  IPaymentResponse,
  ITripResponse,
} from "./types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  tagTypes: ['Payments', 'Miscs', 'Concurrency', 'Trips', 'All'],
  endpoints: () => ({
  
    // getMiscs: builder.query<IMiscResponse, void>({
    //   query: () => "/misc_expenses",
    // }),
    // getConcorrency: builder.query<IConcurrencyResponse, void>({
    //   query: () => "/concurrency_costs",
    // }),
    // getTrips: builder.query<ITripResponse, void>({
    //   query: () => "/trip_financials",
    // }),
  }),
});

// export const {
//   useGetConcorrencyQuery,
//   useGetMiscsQuery,
//   useGetPaymentsQuery,
//   useGetTripsQuery,
// } = apiSlice;
