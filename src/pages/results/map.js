import React from "react"
import { useSelector } from "react-redux"
import Layout from "../../components/layout"
import Filters from "../../components/filters/filters"
import Sorting from "../../components/sorting/sorting"
import OnMapSearching from "../../components/onMapSearching/onMapSearching"
import { Container } from "../../components/results/searchResults.styled"

const MapView = () => {
  const results = useSelector(state => state.SearchResults)
  return (
    <Layout>
      <Container>
        <Filters />
        <Sorting />
        <OnMapSearching results={results} />
      </Container>
    </Layout>
  )
}

export default MapView
