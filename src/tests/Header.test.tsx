import { render, screen, within } from "@testing-library/react";
import Header from "components/pages/Report/Components/Header";
import TestDecorator from "./testDecorator";
import { EDataFilters } from "types";
import { dataFilters } from "utils/appConfig";
import userEvent from "@testing-library/user-event";

test("header initial", () => {
  render(
    <TestDecorator>
      <Header
        queryParams={{
          filterIndex: EDataFilters.ALL,
          offset: 0,
          order: 10,
          search: "",
        }}
        setQueryParams={() => {}}
      />
    </TestDecorator>
  );
  const AllDataText = screen.getByText(dataFilters[EDataFilters.ALL]);
  expect(AllDataText).toBeInTheDocument();
});

test("header trip filter + search bar input", () => {
  const setQueryParams = jest.fn();
  render(
    <TestDecorator>
      <Header
        queryParams={{
          filterIndex: EDataFilters.TRIP,
          offset: 0,
          order: 10,
          search: "",
        }}
        setQueryParams={setQueryParams}
      />
    </TestDecorator>
  );
  const TripText = screen.getByText(dataFilters[EDataFilters.TRIP]);
  const Input = screen.getByLabelText("جستجو");

  expect(Input).toBeInTheDocument();
  expect(TripText).toBeInTheDocument();

  userEvent.type(Input, "m");
  expect(setQueryParams).toBeCalled();
});

test("header filterdrop down open on click and setQueryParam on filter change", () => {
  const setQueryParams = jest.fn();
  render(
    <TestDecorator>
      <Header
        queryParams={{
          filterIndex: EDataFilters.ALL,
          offset: 0,
          order: 10,
          search: "",
        }}
        setQueryParams={setQueryParams}
      />
    </TestDecorator>
  );
  const Button = screen.getByRole("button");
  userEvent.click(Button);
  const DropdownMenu = screen.getByTestId("dropdown-menu");

  expect(DropdownMenu).toBeInTheDocument();

  const MiscOption = within(DropdownMenu).getByText(
    dataFilters[EDataFilters.MISC]
  );
  expect(MiscOption).toBeInTheDocument();

  userEvent.click(MiscOption);
  expect(setQueryParams).toBeCalled();
});
