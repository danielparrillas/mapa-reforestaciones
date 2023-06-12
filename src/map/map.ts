//🌎 arcgis
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import config from "@arcgis/core/config";
//🗺️ imports
import { graphicsLayer } from "./layers/graphic";
import { drawingLayer, drawingSketch } from "./layers/drawing";
import { fullscreen } from "./ui/fullscreen";
import { layerList } from "./ui/layerlist";
import { basemapToggle } from "./ui/basemapToggle";

//⚙️ config
config.apiKey =
  "AAPKd049885b0910426db536781c03b20661HIFgGhU3Hh7xnuoUq8lhAvUhEysGdin0RrXYMAotKJjivYAmbr0Pn7EKiOAOSBeB";

export const view = new MapView({
  map: new WebMap({
    portalItem: {
      id: "aa1d3f80270146208328cf66d022e09c",
    },
  }),
  center: [-88.2, 13.7],
  zoom: 9,
});

//⏺️ cuando este lista la instancia del mapa
view.when(() => {
  addLayers();
  // 1️⃣ basemap toogle
  basemapToggle.view = view;
  view.ui.add(basemapToggle, "bottom-right");
  //3️⃣ add drawing sketch
  drawingSketch.view = view;
  view.ui.add(drawingSketch, "top-right");
  //4️⃣ layer list
  layerList.view = view;
  view.ui.add(layerList, "top-right");
  //5️⃣ fullscreen option
  fullscreen.view = view;
  view.ui.add(fullscreen, "top-right");
});

function addLayers() {
  view.map.add(drawingLayer);
  view.map.add(graphicsLayer);
}
