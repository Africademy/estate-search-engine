import React from "react"
import Layout from "../components/layout"
import Search from "../components/search/search"
import HomeOffers from "../components/homeOffers/homeOffers"

const IndexPage = () => (
  <Layout>
    <Search />
    <HomeOffers />
  </Layout>
)

export default IndexPage
