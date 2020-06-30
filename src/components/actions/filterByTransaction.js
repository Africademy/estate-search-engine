export const filterByTransaction = transaction => {
  return {
    type: "FILTER_BY_TRANSACTION",
    payload: transaction,
  }
}
