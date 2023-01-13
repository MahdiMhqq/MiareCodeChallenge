import { useGetConcurrenciesQuery } from "./translator/concurrency";
import { useGetPaymentsQuery } from "./translator/payment";
import { useGetTripsQuery } from "./translator/trip";
import { useGetMiscsQuery } from "./translator/misc";
import { useGetAllQuery } from "./translator/all";

export default {
  useGetConcurrenciesQuery,
  useGetPaymentsQuery,
  useGetTripsQuery,
  useGetMiscsQuery,
  useGetAllQuery,
};
