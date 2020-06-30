export const filterByCity = searchInput => {
  return {
    type: "FILTER_BY_CITY",
    payload: searchInput,
  }
}
