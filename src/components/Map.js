import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfo from "./LocationInfo";

const Map = ({ eventData, center, zoom }) => {
  const [infoBox, setInfoBox] = useState(null);
  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          onClick={() => setInfoBox({ id: ev.id, title: ev.title })}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          key={index}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyArDCfSOyqRkHqbJdzVII_g-MJYeGRz5o0" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {infoBox && <LocationInfo info={infoBox} />}
    </div>
  );
};
Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};
export default Map;
