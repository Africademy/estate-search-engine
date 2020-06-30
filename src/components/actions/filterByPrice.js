export const filterByPrice = (minPrice, maxPrice) => {
  return {
    type: "FILTER_BY_PRICE",
    payload: {
      minPrice: minPrice,
      maxPrice: maxPrice,
    },
  }
}
