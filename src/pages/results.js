import React from "react"
import Layout from "../components/layout"
import SearchResults from "../components/results/searchResults"
import { useSelector } from "react-redux"
import { Container } from "../components/results/searchResults.styled"
import Filters from "../components/filters/filters"

const Results = () => {
  const results = useSelector(state => state.SearchResults)
  return (
    <Layout>
      <Container>
        <Filters />
        <SearchResults results={results} />
      </Container>
    </Layout>
  )
}

export default Results
