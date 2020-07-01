import React, { useState } from "react"
import Layout from "../components/layout"
import SearchResults from "../components/results/searchResults"
import { Container } from "../components/results/searchResults.styled"
import Filters from "../components/filters/filters"
import Sorting from "../components/sorting/sorting"
import { useSelector } from "react-redux"

const Results = () => {
  const props = useSelector(state => state.filterProps)
  const lang = useSelector(state => state.SwitchLanguage)
  const [searchInput, setSearchInput] = useState(props.city)
  const handleSearchInput = e => {
    setSearchInput(e.target.value)
  }

  return (
    <Layout>
      <Container>
        <Filters
          handleSearchInput={handleSearchInput}
          searchInput={searchInput}
          lang={lang}
        />
        <Sorting />
        <SearchResults />
      </Container>
    </Layout>
  )
}

export default Results
