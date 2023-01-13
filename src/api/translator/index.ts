/*
export enum EDataKinds {
  CONCURRENCY,
  PAYMENTS,
  TRIP,
  MISC,
}
*/

import {
  IConcurrencyResponse,
  IMiscResponse,
  IPaymentResponse,
  ITripResponse,
} from "api/types";
import { DateTime } from "luxon";
import { EDataKinds, IExpense } from "types";
import { dataKinds } from "utils/appConfig";

export const concurrencyTranslate = (
  response: IConcurrencyResponse[]
): IExpense[] => {
  return response?.map((conc) => ({
    id: conc.id,
    kind: EDataKinds.CONCURRENCY,
    kindTitle: dataKinds[EDataKinds.CONCURRENCY],
    price: conc.amount,
    exactDate: conc.created_at,
    desc: {
      important: [
        `خرید ظرفیت، از تاریخ ${DateTime.fromFormat(
          conc.start_date,
          "yyyy-MM-dd"
        )
          .setLocale("fa-IR")
          .toLocaleString()} تا ${DateTime.fromFormat(
          conc.end_date,
          "yyyy-MM-dd"
        )
          .setLocale("fa-IR")
          .toLocaleString()}`,
      ],
    },
  }));
};

export const paymentTranslate = (response: IPaymentResponse[]): IExpense[] => {
  return response?.map((payment) => ({
    id: payment.id,
    kind: EDataKinds.PAYMENTS,
    kindTitle: dataKinds[EDataKinds.PAYMENTS],
    price: payment.amount,
    exactDate: payment.datetime,
    desc:
      typeof payment.description === "string"
        ? {
            info: [payment.description],
          }
        : undefined,
  }));
};

export const tripTranslate = (response: ITripResponse[]): IExpense[] => {
  return response?.map((trip) => ({
    id: trip.id,
    kind: EDataKinds.TRIP,
    kindTitle: dataKinds[EDataKinds.TRIP],
    price: trip.final_price,
    exactDate: trip.request_datetime,
    searchable: {
      driver: trip.driver,
    },
    desc: {
      info: [`کوریر: ${trip.driver}`, `شعبه: ${trip.hub.title}`],
    },
  }));
};

export const miscTranslate = (response: IMiscResponse[]): IExpense[] => {
  return response?.map((misc) => ({
    id: misc.id,
    kind: EDataKinds.MISC,
    kindTitle: misc.title,
    price: misc.amount,
    exactDate: misc.created_at,
  }));
};

export type TranslatorType = [
  (response: IConcurrencyResponse[]) => IExpense[],
  (response: IPaymentResponse[]) => IExpense[],
  (response: ITripResponse[]) => IExpense[],
  (response: IMiscResponse[]) => IExpense[]
];

export const translator: TranslatorType = [
  concurrencyTranslate,
  paymentTranslate,
  tripTranslate,
  miscTranslate,
];
