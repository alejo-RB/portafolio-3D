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
  { markerOffset: -15, name: "Bolivia", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 25, name: "Brazil", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 25, name: "Chile", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 25, name: "Colombia", coordinates: [-74.0721, 4.711] },
  { markerOffset: 25, name: "Ecuador", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -15, name: "Guyana", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -15, name: "Paraguay", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 25, name: "Surinam", coordinates: [-55.2038, 5.852] },
  { markerOffset: 25, name: "Uruguay", coordinates: [-56.1645, -34.9011] },
  { markerOffset: -15, name: "Venezuela", coordinates: [-66.9036, 10.4806] },
  { markerOffset: -15, name: "Perú", coordinates: [-77.0428, -12.0464] },
];

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 20, 0],
        center: [-8, 14],
        scale: 1000,
      }}style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#D6D6DA"
        stroke="#000000"
        strokeWidth={0.5}
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
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
      <Annotation
        subject={[-79.64931995974774, 0.9695929637421825]}
        dx={-30}
        dy={-40}
        connectorProps={{
          stroke: "#22a318",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#22a318">
          {"Esmeraldas"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
