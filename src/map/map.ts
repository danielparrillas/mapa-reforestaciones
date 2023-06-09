//🌎 arcgis
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import config from "@arcgis/core/config";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import LayerList from "@arcgis/core/widgets/LayerList";
import WMSLayer from "@arcgis/core/layers/WMSLayer";
import Fullscreen from "@arcgis/core/widgets/Fullscreen";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Sketch from "@arcgis/core/widgets/Sketch";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
//🗺️ imports
import { layer_ac, layer_anp, layer_rb, layer_sr } from "./layers";

//⚙️ config
config.apiKey =
  "AAPKd049885b0910426db536781c03b20661HIFgGhU3Hh7xnuoUq8lhAvUhEysGdin0RrXYMAotKJjivYAmbr0Pn7EKiOAOSBeB";

export const graphicsLayer = new GraphicsLayer({ title: "Capa de edición" });

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
  //⏺️
  add_layers();
  // 1️⃣
  // basemap toogle
  view.ui.add(
    new BasemapToggle({
      view: view,
      nextBasemap: "arcgis-imagery",
    }),
    "bottom-right"
  );
  //2️⃣
  // add graphics layer
  view.map.add(graphicsLayer);
  //3️⃣
  // create a new sketch widget
  const sketch = new Sketch({
    layer: graphicsLayer,
    view: view,
    // graphic will be selected as soon as it is created
    creationMode: "update",
    visibleElements: {},
  });
  view.ui.add(sketch, "top-right");
  //4️⃣
  // layer list
  const layerList = new LayerList({
    view: view,
  });
  view.ui.add(layerList, "top-right");
  //5️⃣
  // fullscreen option
  const fullscreen = new Fullscreen({
    view: view,
  });
  view.ui.add(fullscreen, "top-right");
});

function add_layers() {
  view.map.add(layer_ac);
  view.map.add(layer_anp);
  view.map.add(layer_rb);
  view.map.add(layer_sr);
}
