import { ReactNode } from "react";

/**
 * Since we don't have an official document for the API data,
 * we're going to type them as 'optional' fields to be safe.
 */
export interface APIResponseData {
  managementAreasGeoJSON?: string;
  longitude?: number;
  latitude?: number;
  website?: string;
  address?: string;
  phone?: string;
  email?: string;
  name?: string;
  id?: number;
}

export interface DataContextProviderProps {
  projects: APIResponseData[];
  children: ReactNode;
}

export type DataContextProviderValue = Omit<
  DataContextProviderProps,
  "children"
> & {};
