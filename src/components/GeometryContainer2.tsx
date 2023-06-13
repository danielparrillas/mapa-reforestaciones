import { InputNumber } from "antd";
// import Polygon from "@arcgis/core/geometry/Polygon";
// import Point from "@arcgis/core/geometry/Point";
// import Polyline from "@arcgis/core/geometry/Polyline";
// import Geometry from "@arcgis/core/geometry/Geometry";
// import Graphic from "@arcgis/core/Graphic";
import { drawingSketch } from "../map/layers/drawing";
import { useEffect } from "react";
// import Collection from "esri/core/Collection";
import { useMapStore } from "../map/store";
import { webMercatorToGeographic } from "@arcgis/core/geometry/support/webMercatorUtils";

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
  const { graphics, setGraphics } = useMapStore();
  useEffect(() => {
    setGraphics(drawingSketch.layer.graphics);
    drawingSketch.on("create", (e) => {
      if (e.state === "complete") {
        console.log(e.graphic.geometry.type);
        console.log("hola");
      }
      setGraphics(drawingSketch.layer.graphics.map((graphic) => graphic));
    });
    drawingSketch.on("delete", () => {
      setGraphics(drawingSketch.layer.graphics.map((graphic) => graphic));
    });
    drawingSketch.on("update", () => {
      setGraphics(drawingSketch.layer.graphics.map((graphic) => graphic));
    });
    drawingSketch.on("redo", () => {
      setGraphics(drawingSketch.layer.graphics.map((graphic) => graphic));
    });
    drawingSketch.on("undo", () => {
      setGraphics(drawingSketch.layer.graphics.map((graphic) => graphic));
    });
  }, []);
  return (
    <div className="w-96">
      {graphics?.map((graphic, index) => (
        <div key={index}>
          <div>{graphic.geometry.type}</div>
          {/* <div>{JSON.stringify(graphic)}</div> */}
          <div>{JSON.stringify(webMercatorToGeographic(graphic.geometry))}</div>
          <InputNumber value={0} className="w-full" />
          <br />
        </div>
      ))}
    </div>
  );
}
