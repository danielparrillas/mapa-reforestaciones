import { useRef, useEffect } from "react";
import { view } from "../map/map";
import { graphicsLayer } from "../map/map";

export default function Map() {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      view.container = mapDiv.current;
    }
  }, []);

  return (
    <>
      {/* <button
        onClick={() =>
          graphicsLayer
            .fetchAttributionData()
            .then((response) => console.log(response))
        }
      >
        On
      </button> */}
      <div className="mapDiv w-full h-screen" ref={mapDiv}></div>
    </>
  );
}
