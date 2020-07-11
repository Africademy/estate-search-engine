import React, { useState } from "react"
import Layout from "../components/layout"
import SearchResults from "../components/results/searchResults"
import { Container } from "../components/results/searchResults.styled"
import Filters from "../components/filters/filters"
import Sorting from "../components/sorting/sorting"
import { useSelector } from "react-redux"

const Results = () => {
  const lang = useSelector(state => state.SwitchLanguage)
  const estates = useSelector(state => state.Filter)
  const [switchSorting, setSorting] = useState(false)
  const handleSwitch = () => {
    setSorting(!switchSorting)
  }
  return (
    <Layout>
      <Container>
        <Filters lang={lang} />
        {estates.length > 0 ? <Sorting handleSwitch={handleSwitch} /> : null}
        <SearchResults sorting={switchSorting} />
      </Container>
    </Layout>
  )
}

export default Results
