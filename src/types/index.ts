export enum EDataKinds {
  CONCURRENCY,
  PAYMENTS,
  TRIP,
  MISC,
}

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
  kind: EDataKinds;
  kindTitle: string;
  searchable?: {
    driver: string;
  };
  desc?: {
    important?: string[];
    info?: string[];
  };
}

export interface IDateCategorizedExpenses {
  date: string;
  expenses: IExpense[];
}
