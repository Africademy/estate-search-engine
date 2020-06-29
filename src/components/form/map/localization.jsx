import React, { Component, createRef } from "react"
import {
  LocalizationWrapper,
  MapContainer,
  SelectedPlace,
} from "./localization.styled"
import { Header, SubTitle, ClearBtn } from "../basics/basics.styled"
import mapboxgl from "mapbox-gl"
import { connect } from "react-redux"

mapboxgl.accessToken =
  "pk.eyJ1IjoiamFjazB3c2t5IiwiYSI6ImNqeTBpMjZnODAwYmczaW9pbzJzcmw1ZmIifQ.Cm3FLzzV89Dh6elS6STIag"

const mapStateToProps = state => {
  return {
    lang: state.SwitchLanguage,
  }
}

class Localization extends Component {
  constructor() {
    super()
    this.mapContainer = createRef(null)
    this.state = {
      lng: 19.479767,
      lat: 52.068956,
      zoom: 5,
    }
  }

  componentDidMount() {
    const mapContainer = document.querySelector(".mapContainer")
    this.map = new mapboxgl.Map({
      container: mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: [this.state.zoom],
      center: [this.state.lng, this.state.lat],
    })
    this.map.doubleClickZoom.enable()
    this.map.on("move", () => {
      this.setState({
        lng: this.map.getCenter().lng.toFixed(4),
        lat: this.map.getCenter().lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2),
      })
    })
  }

  handleClick = () => {
    let markers = []
    this.map.on("click", e => {
      const { lng, lat } = e.lngLat
      this.getMap()
      this.setState(
        {
          zoom: 3,
          lng: lng,
          lat: lat,
        },
        () => {
          if (markers.length > 0) {
            const marker = new mapboxgl.Marker({ color: "#ff0043" }).setLngLat([
              this.state.lng,
              this.state.lat,
            ])
          } else {
            const marker = new mapboxgl.Marker({ color: "#ff0043" })
              .setLngLat([this.state.lng, this.state.lat])
              .addTo(this.map)
            markers.push(marker)
          }
        }
      )
    })
  }

  render() {
    const { lang } = this.props
    return (
      <LocalizationWrapper>
        <Header>
          <SubTitle>{lang ? "Localization" : "Lokalizacja"}</SubTitle>
          <ClearBtn></ClearBtn>
        </Header>
        <MapContainer
          className="mapContainer"
          onClick={() => this.handleClick()}
          ref={this.mapContainer}
        />
        <SelectedPlace>
          {this.state.lng && this.state.lat ? (
            <p>
              {this.state.lng}, {this.state.lat}
            </p>
          ) : null}
        </SelectedPlace>
      </LocalizationWrapper>
    )
  }
}

export default connect(mapStateToProps)(Localization)
