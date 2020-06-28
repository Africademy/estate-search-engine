export const SearchResults = (
  results,
  city,
  type,
  payment,
  minPrice,
  maxPrice
) => {
  return {
    type: "SEARCH",
    payload: {
      results: results,
      props: {
        city: city,
        type: type,
        payment: payment,
        minPrice: minPrice,
        maxPrice: maxPrice,
      },
    },
  }
}
