import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/results/searchResults.styled"
import Filters from "../components/filters/filters"
import Sorting from "../components/sorting/sorting"
import RentEstates from "../components/rentEstates/rentEstates"

const Rent = () => {
  return (
    <Layout>
      <Container>
        <Filters />
        <Sorting />
        <RentEstates />
      </Container>
    </Layout>
  )
}

export default Rent
