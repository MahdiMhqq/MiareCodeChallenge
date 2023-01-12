export enum EDataFilters {
  ALL,
  CONCURRENCY,
  PAYMENTS,
  TRIP,
  MISC,
}

export interface IReportQueryParams {
  filterIndex: EDataFilters;
  offset: number;
  order: number;
}
