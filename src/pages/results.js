import React from "react"
import Layout from "../components/layout"
import SearchResults from "../components/results/searchResults"

const Results = props => {
  console.log(typeof props)
  return (
    <Layout>
      <SearchResults results={state} />
    </Layout>
  )
}

export default Results
