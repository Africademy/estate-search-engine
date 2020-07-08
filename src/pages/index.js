import React from "react"
import Layout from "../components/layout"
import Search from "../components/search/search"
import HomeOffers from "../components/homeOffers/homeOffers"
import { createStore, combineReducers } from "redux"
import {
  ToggleBurger,
  Favourites,
  AddAdvantages,
  SearchResults,
  Estates,
  SwitchLanguage,
  Filter,
  ToggleFullScreen,
  FilterProps,
  ToggleAmountOfRooms,
  ToggleMaxRooms,
  ToggleFloor,
  ToggleMaxFloor,
  FilterByAdvantages,
} from "../components/reducers"

const reducers = combineReducers({
  ToggleBurger,
  Favourites,
  AddAdvantages,
  SearchResults,
  Estates,
  SwitchLanguage,
  Filter,
  modal: ToggleFullScreen,
  filterProps: FilterProps,
  toggleRoomsDropdown: ToggleAmountOfRooms,
  toggleMaxRooms: ToggleMaxRooms,
  toggleFloor: ToggleFloor,
  toggleMaxFloor: ToggleMaxFloor,
  filterByAdvantages: FilterByAdvantages,
})

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const IndexPage = () => (
  <Layout>
    <Search />
    <HomeOffers />
  </Layout>
)

export default IndexPage
