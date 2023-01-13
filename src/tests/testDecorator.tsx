import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "api/apiSlice";
import React, { ReactNode } from "react";

interface ITestDecoratorprops {
  children: ReactNode;
}

function TestDecorator({ children }: ITestDecoratorprops) {
  return <ApiProvider api={apiSlice}>{children}</ApiProvider>;
}

export default TestDecorator;
