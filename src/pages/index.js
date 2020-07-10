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
  ToggleAmountOfRooms,
  ToggleMaxRooms,
  ToggleFloor,
  ToggleMaxFloor,
  FilterByAdvantages,
} from "../components/reducers"
import { SearchEngine } from "../components/reducers/searchProps"

const reducers = combineReducers({
  ToggleBurger,
  Favourites,
  AddAdvantages,
  SearchResults,
  Estates,
  SwitchLanguage,
  Filter,
  modal: ToggleFullScreen,
  toggleRoomsDropdown: ToggleAmountOfRooms,
  toggleMaxRooms: ToggleMaxRooms,
  toggleFloor: ToggleFloor,
  toggleMaxFloor: ToggleMaxFloor,
  filterByAdvantages: FilterByAdvantages,
  search: SearchEngine,
})

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(reducers)

const IndexPage = () => (
  <Layout>
    <Search />
    <HomeOffers />
  </Layout>
)

export default IndexPage
