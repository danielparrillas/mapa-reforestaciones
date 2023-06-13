import Graphic from "@arcgis/core/Graphic";
import Geometry from "@arcgis/core/geometry/Geometry";

import { create } from "zustand";

type GeometryType =
  | "point"
  | "polyline"
  | "polygon"
  | "extent"
  | "multipoint"
  | "mesh";

interface UseMapStore {
  graphic?: Graphic;
  setGraphic: (graphic?: Graphic) => void;
  geometry?: Geometry;
  setGeometry: (geometry?: Geometry) => void;
}

export const useMapStore = create<UseMapStore>()((set) => ({
  setGraphic: (graphic) => set(() => ({ graphic: graphic })),
  setGeometry: (geometry) => set(() => ({ geometry: geometry })),
}));
