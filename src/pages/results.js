import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SearchResults from "../components/results/searchResults"
import { useSelector } from "react-redux"
import { Container } from "../components/results/searchResults.styled"
import Filters from "../components/filters/filters"
import Sorting from "../components/sorting/sorting"

const Results = () => {
  const results = useSelector(state => state.SearchResults)
  const [searchInput, setSearchInput] = useState("")
  useEffect(() => {
    if (results.props !== undefined) {
      setSearchInput(results.props.city)
    }
  }, [])
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
        <SearchResults results={results} />
      </Container>
    </Layout>
  )
}

export default Results
