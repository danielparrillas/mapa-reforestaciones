// import Polygon from "@arcgis/core/geometry/Polygon";
// import Point from "@arcgis/core/geometry/Point";
// import Polyline from "@arcgis/core/geometry/Polyline";
// import Geometry from "@arcgis/core/geometry/Geometry";
// import Graphic from "@arcgis/core/Graphic";
import { drawingSketch } from "../map/layers/drawing";
import { useEffect } from "react";
// import Collection from "esri/core/Collection";
import { useMapStore } from "../map/store";

drawingSketch.on("create", (e) => {
  if (drawingSketch.layer.graphics.length !== 0) {
    if (
      drawingSketch.layer.graphics.getItemAt(0).geometry.type !==
      e.graphic.geometry.type
    ) {
      drawingSketch.layer.graphics.removeAll();
    }
  }
});

export function GeometryContainer() {
  const { graphics, setGraphics, setGeometryType } = useMapStore();
  useEffect(() => {
    setGraphics(drawingSketch.layer.graphics);
    drawingSketch.on("create", (e) => {
      if (e.state === "complete") {
        setGeometryType(e.graphic.geometry.type);
        console.log(e.graphic.geometry.type);
      }
      setGraphics(drawingSketch.layer.graphics.map((graphic) => graphic));
      console.log(graphics);
    });
    drawingSketch.on("delete", () => {
      setGraphics(drawingSketch.layer.graphics.map((graphic) => graphic));
      console.log(graphics);
    });
    drawingSketch.on("update", () => {
      setGraphics(drawingSketch.layer.graphics.map((graphic) => graphic));
      console.log(graphics);
    });
    drawingSketch.on("redo", () => {
      setGraphics(drawingSketch.layer.graphics.map((graphic) => graphic));
      console.log(graphics);
    });
    drawingSketch.on("undo", () => {
      setGraphics(drawingSketch.layer.graphics.map((graphic) => graphic));
      console.log(graphics);
    });
  }, [drawingSketch.layer.graphics]);
  return (
    <div className="w-96">
      <div>{JSON.stringify(graphics)}</div>
    </div>
  );
}
