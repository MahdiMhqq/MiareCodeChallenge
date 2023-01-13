import { translator } from "api/translator";
import { EDataKinds } from "types";

test("test concurrency translator object match", () => {
  const actualData = {
    id: 28705,
    created_at: "2022-04-20T16:58:54.148113+04:30",
    amount: 7140000,
    start_date: "2022-06-08",
    end_date: "2022-07-07",
  };

  const translated = translator[EDataKinds.CONCURRENCY]([actualData])[0];

  // Object Match Assertion
  expect(translated).toHaveProperty("id");
  expect(translated).toHaveProperty("kind");
  expect(translated).toHaveProperty("kindTitle");
  expect(translated).toHaveProperty("price");
  expect(translated).toHaveProperty("exactDate");
  expect(translated).toHaveProperty("desc");

  expect(typeof translated.id).toEqual("number");
  expect(typeof translated.kind).toEqual("number");
  expect(typeof translated.kindTitle).toEqual("string");
  expect(typeof translated.price).toEqual("number");
  expect(typeof translated.exactDate).toEqual("string");
  expect(typeof translated.desc).toEqual("object");
});

test("test misc translator object match", () => {
  const actualData = {
    id: 10740,
    title: "تست فنی",
    created_at: "2022-04-20T16:57:30.703642+04:30",
    amount: 120000,
  };

  const translated = translator[EDataKinds.MISC]([actualData])[0];

  // Object Match Assertion
  expect(translated).toHaveProperty("id");
  expect(translated).toHaveProperty("kind");
  expect(translated).toHaveProperty("kindTitle");
  expect(translated).toHaveProperty("price");
  expect(translated).toHaveProperty("exactDate");

  expect(typeof translated.id).toEqual("number");
  expect(typeof translated.kind).toEqual("number");
  expect(typeof translated.kindTitle).toEqual("string");
  expect(typeof translated.price).toEqual("number");
  expect(typeof translated.exactDate).toEqual("string");
});

test("test payment translator object match", () => {
  const actualData = {
    id: 1990321,
    datetime: "2022-04-22T18:57:09.959629+04:30",
    amount: -100000,
    description: null,
  };

  const translated = translator[EDataKinds.PAYMENTS]([actualData])[0];

  // Object Match Assertion
  expect(translated).toHaveProperty("id");
  expect(translated).toHaveProperty("kind");
  expect(translated).toHaveProperty("kindTitle");
  expect(translated).toHaveProperty("price");
  expect(translated).toHaveProperty("exactDate");

  expect(typeof translated.id).toEqual("number");
  expect(typeof translated.kind).toEqual("number");
  expect(typeof translated.kindTitle).toEqual("string");
  expect(typeof translated.price).toEqual("number");
  expect(typeof translated.exactDate).toEqual("string");
});

test("test trip translator object match", () => {
  const actualData = {
    id: 286742119,
    trip_id: 3207732,
    request_datetime: "2022-04-19T14:54:00.569765+04:30",
    driver: "راننده نمیاره",
    final_price: 33000,
    source_title: "تست میاره ۲",
    hub: {
      id: 3115,
      title: "شیراز",
    },
  };

  const translated = translator[EDataKinds.TRIP]([actualData])[0];

  // Object Match Assertion
  expect(translated).toHaveProperty("id");
  expect(translated).toHaveProperty("kind");
  expect(translated).toHaveProperty("kindTitle");
  expect(translated).toHaveProperty("price");
  expect(translated).toHaveProperty("desc.info");
  expect(translated).toHaveProperty("searchable.driver");
  expect(translated).toHaveProperty("exactDate");

  expect(typeof translated.id).toEqual("number");
  expect(typeof translated.kind).toEqual("number");
  expect(typeof translated.kindTitle).toEqual("string");
  expect(typeof translated.price).toEqual("number");
  expect(typeof translated.exactDate).toEqual("string");
  expect(typeof translated.desc?.info).toEqual("object");
  expect(typeof translated.searchable?.driver).toEqual("string");
});
