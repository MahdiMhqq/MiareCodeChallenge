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

export interface IExpense {
  id: number;
  exactDate: string;
  price: number;
  kind: EDataFilters;
  kindTitle: string;
  searchable?: string[];
  desc?: {
    important?: string[];
    info?: string[];
  };
}
