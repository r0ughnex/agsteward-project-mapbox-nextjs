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

export type ManagementAreaCoords = number[][][][] | number[][][];

// Add the relevant types here, when they are available from the API.
export type ManagementAreaGeometryType = "Polygon" | "MultiPolygon";

export type ManagementAreaPropertyType = "Remnant management";

export type ManagementAreaType = "Feature";

export type ManagementAreaRegion = "NNRM";

export interface ManagementAreaProperty {
  // Type of the area and its project.
  type?: ManagementAreaPropertyType;
  Region?: ManagementAreaRegion;
  projID?: string;

  // Name of the area.
  Area_name?: string;
  P_Area?: string;
  name?: string;

  // Total hectares.
  area_ha?: number;
  Area_ha?: number;
}

export interface ManagementAreaGeometry {
  coordinates?: ManagementAreaCoords;
  type?: ManagementAreaGeometryType;
}

export interface ProjectManagementArea {
  properties?: ManagementAreaProperty;
  geometry?: ManagementAreaGeometry;
  type?: ManagementAreaType;
}

export interface ProjectsData extends APIResponseData {
  managementAreas?: ProjectManagementArea[];
}

export interface DataContextProviderProps {
  projects: ProjectsData[];
  children: ReactNode;
}

export type DataContextProviderValue = Omit<
  DataContextProviderProps,
  "children"
> & {};
