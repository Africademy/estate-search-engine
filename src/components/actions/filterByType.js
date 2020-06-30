export const filterByType = estateType => {
  return {
    type: "FILTER_BY_TYPE",
    payload: estateType,
  }
}
