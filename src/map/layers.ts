import KMLLayer from "@arcgis/core/layers/KMLLayer";

export const layer_sr = new KMLLayer({
  url: "http://apps3.marn.gob.sv/geocumplimiento/restauracion/registro/SitiosRamsar.kmz",
  opacity: 0.5,
});
export const layer_anp = new KMLLayer({
  url: "http://apps3.marn.gob.sv/geocumplimiento/restauracion/registro/AnpProtegidasDeclaradas.kmz",
  opacity: 0.5,
});
export const layer_ac = new KMLLayer({
  url: "http://apps3.marn.gob.sv/geocumplimiento/restauracion/registro/AreasConservacion.kmz",
  opacity: 0.5,
});
export const layer_rb = new KMLLayer({
  url: "http://apps3.marn.gob.sv/geocumplimiento/restauracion/registro/ReservaBiosfera.kmz",
  opacity: 0.5,
});
