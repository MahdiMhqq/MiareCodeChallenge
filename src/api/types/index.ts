export interface ITripResponse {
  id: number;
  trip_id?: number;
  request_datetime: string;
  driver: string;
  final_price: number;
  source_title: string;
  hub: {
    id: number;
    title: string;
  };
}

export interface IPaymentResponse {
  id: number;
  datetime: string;
  amount: number;
  description: null | string;
}

export interface IMiscResponse {
  id: number;
  title: string;
  created_at: string;
  amount: number;
}

export interface IConcurrencyResponse {
  id: number;
  created_at: string;
  amount: number;
  start_date: string;
  end_date: string;
}
