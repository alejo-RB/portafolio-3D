import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  Marker,
} from "react-simple-maps";

const markers = [
  { markerOffset: -15, name: "Buenos Aires", coordinates: [-58.3816, -34.6037], },
  { markerOffset: -15, name: "Bolivia", coordinates: [-64.467, -16.409] },
  { markerOffset: 25, name: "Brazil", coordinates: [-55.968, -8.404] },
  { markerOffset: 25, name: "Chile", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 25, name: "Colombia", coordinates: [-74.0721, 4.711] },
  { markerOffset: 25, name: "Ecuador", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -15, name: "Guyana", coordinates: [-58.952, 4.706] },
  { markerOffset: -15, name: "Paraguay", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 25, name: "Surinam", coordinates: [-56.143, 5.184] },
  { markerOffset: 25, name: "Uruguay", coordinates: [-56.1645, -34.9011] },
  { markerOffset: -15, name: "Venezuela", coordinates: [-66.082, 7.122] },
  { markerOffset: -15, name: "Perú", coordinates: [-75.480, -10.154] },
];

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 20, 0],
        center: [-9, 14],
        scale: 1200,
      }}style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="./features.json"
        fill="#2C065D"
        stroke="#ffffff"
        strokeWidth={0.6}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#ffffff" }}
          >
            {name}
          </text>
        </Marker>
      ))}
      <Annotation
        subject={[-79.607, 0.839]}
        dx={-30}
        dy={-40}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Esmeraldas"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
