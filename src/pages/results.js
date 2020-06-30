import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SearchResults from "../components/results/searchResults"
import { Container } from "../components/results/searchResults.styled"
import Filters from "../components/filters/filters"
import Sorting from "../components/sorting/sorting"

const Results = () => {
  const [searchInput, setSearchInput] = useState("")
  const handleSearchInput = e => {
    setSearchInput(e.target.value)
  }

  return (
    <Layout>
      <Container>
        <Filters
          handleSearchInput={handleSearchInput}
          searchInput={searchInput}
        />
        <Sorting />
        <SearchResults />
      </Container>
    </Layout>
  )
}

export default Results
