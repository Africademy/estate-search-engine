import React from "react"
import Layout from "../../components/layout"
import Filters from "../../components/filters/filters"
import Sorting from "../../components/sorting/sorting"
import { Container } from "../../components/results/searchResults.styled"

const MapView = () => {
  return (
    <Layout>
      <Container>
        <Filters />
        <Sorting />
      </Container>
    </Layout>
  )
}

export default MapView
