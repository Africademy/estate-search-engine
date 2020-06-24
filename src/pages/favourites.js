import React from "react"
import Layout from "../components/layout"
import {
  FavouritesWrapper,
  Container,
  List,
} from "../components/favourites/favourites.styled"
import { useSelector } from "react-redux"
import { Title } from "../components/advertisement/advertisement.styled"
import DetailedEstate from "../components/detailedEstate/detailedEstate"
import EmptyFavs from "../components/emptyFavs/emptyFavs"

const Favourites = () => {
  const estate = useSelector(state => state.Favourites)
  return (
    <Layout>
      <FavouritesWrapper>
        <Container>
          <Title>My favourites</Title>
          <List estate={estate.length}>
            {estate.length > 0 ? (
              estate.map(estate => {
                return <DetailedEstate estate={estate} />
              })
            ) : (
              <EmptyFavs />
            )}
          </List>
        </Container>
      </FavouritesWrapper>
    </Layout>
  )
}

export default Favourites
