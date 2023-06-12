import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Sketch from "@arcgis/core/widgets/Sketch";

export const drawingLayer = new GraphicsLayer({ title: "✏️ Capa de dibujo" });

// create a new sketch widget
export const drawingSketch = new Sketch({
  layer: drawingLayer,
  // graphic will be selected as soon as it is created
  creationMode: "update",
  visibleElements: {
    createTools: { circle: false, rectangle: false, point: false },
    selectionTools: { "lasso-selection": false, "rectangle-selection": false },
    settingsMenu: false,
  },
  defaultUpdateOptions: { tool: "reshape" },
});

// con esto podemos ver las coordenadas
drawingSketch.on("create", (e) => {
  if (e.state === "complete") {
    const geometry = e.graphic.geometry;
    if (geometry.type === "point") console.log("Punto");
    if (geometry.type === "polygon") console.log("Poligono");
  }
});
