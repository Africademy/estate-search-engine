import React, { useState, useEffect } from "react"
import {
  OnMapWrapper,
  MapContainer,
  SwitchView,
  ThreeDimension,
  TwoDimension,
  ShowAll,
  ZoomOut,
} from "./onMapSearching.styled"
import ReactMapboxGl, { Marker } from "react-mapbox-gl"
import EstatesCarousel from "../estatesCarousel/estatesCarousel"
import { useSelector } from "react-redux"
import EstateMarker from "../estateMarker/estateMarker"
import gsap from "gsap"
import { CSSPlugin } from "gsap/CSSPlugin"
gsap.registerPlugin(CSSPlugin)

const MapElement = ReactMapboxGl({
  accessToken: process.env.GATSBY_MAPBOX_TOKEN,
})

const OnMapSearching = ({ results }) => {
  const estate = useSelector(state => state.Filter)
  const [zoom, setZoom] = useState(6)
  const [defaultCenter] = useState([19.478517, 52.0637])
  const [newCenter, setNewCenter] = useState(null)
  const [pitch, setPitch] = useState(40)

  useEffect(() => {
    if (results !== null) {
      if (results.length > 0) {
        const { coords } = results[0]
        setNewCenter([coords.lat, coords.long])
      }
    }
    if (document) {
      const items = document.querySelectorAll(".carouselItem")
      gsap.from(items, {
        opacity: 0,
        y: 10,
        stagger: 0.3,
        duration: 0.7,
        delay: 0.2,
      })
    }
  }, [results])

  const showSelectedEstate = estate => {
    const { coords } = estate
    setZoom(12)
    setNewCenter([coords.lat, coords.long])
  }
  const showAll = () => {
    if (results !== null) {
      if (results.length > 0) {
        const { coords } = results[0]
        setZoom(12)
        setNewCenter([coords.lat, coords.long])
      }
    }
    setNewCenter(defaultCenter)
    setZoom(6)
  }

  return (
    <OnMapWrapper>
      <MapContainer>
        <SwitchView>
          <ThreeDimension onClick={() => setPitch(40)} pitch={pitch}>
            3D
          </ThreeDimension>
          <TwoDimension onClick={() => setPitch(0)} pitch={pitch}>
            2D
          </TwoDimension>
        </SwitchView>
        <ZoomOut>
          <ShowAll onClick={() => showAll()}>Show all</ShowAll>
        </ZoomOut>
        <EstatesCarousel
          results={results}
          showSelectedEstate={showSelectedEstate}
        />
        <MapElement
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "100%",
            width: "100%",
          }}
          zoom={[zoom]}
          pitch={[pitch]}
          center={newCenter === null ? defaultCenter : newCenter}
        >
          {estate.map(estate => {
            const { coords, prices, type } = estate
            return (
              <Marker key={estate.key} coordinates={[coords.lat, coords.long]}>
                <EstateMarker price={prices.price} type={type} />
              </Marker>
            )
          })}
        </MapElement>
      </MapContainer>
    </OnMapWrapper>
  )
}

export default OnMapSearching
