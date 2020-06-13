import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Header from "../components/header/header"

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Montserrat", sans-serif;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  )
}
export default Layout
