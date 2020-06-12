import React, { Component } from "react"
import { SearchWrapper, SearchBar } from "./search.styled"
import HomepageIllustration from "../homepageIllustration/homepageIllustration"

class Search extends Component {
  render() {
    return (
      <SearchWrapper>
        <HomepageIllustration />
        <SearchBar></SearchBar>
      </SearchWrapper>
    )
  }
}

export default Search
