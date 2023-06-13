import Graphic from "@arcgis/core/Graphic";
import Collection from "esri/core/Collection";

import { create } from "zustand";

type GeometryType =
  | "point"
  | "polyline"
  | "polygon"
  | "extent"
  | "multipoint"
  | "mesh";

interface UseMapStore {
  graphics?: Collection<Graphic>;
  setGraphics: (graphics: Collection<Graphic>) => void;
}

export const useMapStore = create<UseMapStore>()((set) => ({
  setGraphics: (graphics) => set(() => ({ graphics: graphics })),
}));
