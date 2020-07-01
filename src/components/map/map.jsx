import React from "react"
import { MapWrapper } from "./map.styled"
import ReactMapboxGl, { Marker } from "react-mapbox-gl"
import MarkerIcon from "../icons/marker"
import { colors } from "../../theme"

const MapElement = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiamFjazB3c2t5IiwiYSI6ImNqeTBpMjZnODAwYmczaW9pbzJzcmw1ZmIifQ.Cm3FLzzV89Dh6elS6STIag",
})

const Map = ({ coords }) => {
  return (
    <MapWrapper id="mapContainer">
      <MapElement
        style={"mapbox://styles/mapbox/streets-v9"}
        containerStyle={{
          height: "100%",
          width: "100%",
        }}
        center={[coords.lat, coords.long]}
        zoom={[13]}
      >
        <Marker coordinates={[coords.lat, coords.long]} anchor="bottom">
          <MarkerIcon height={"50px"} color={colors.pink} />
        </Marker>
      </MapElement>
    </MapWrapper>
  )
}

export default Map
