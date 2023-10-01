"use client";

import { createContext, Fragment } from "react";
import { DataContextProviderProps, DataContextProviderValue } from "./types";
export const DataContext = createContext<DataContextProviderValue | null>(null);

export function DataContextProvider(props: Partial<DataContextProviderProps>) {
  const { projects = [], children = <Fragment /> } = props || {};
  const providerValue: DataContextProviderValue = { projects };

  return (
    <DataContext.Provider value={providerValue}>
      {children}
    </DataContext.Provider>
  );
}
