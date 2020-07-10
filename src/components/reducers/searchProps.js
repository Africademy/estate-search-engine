export const SearchEngine = (state = {}, action) => {
  switch (action.type) {
    case "HANDLE_SEARCH": {
      return (state = action.payload)
    }
    default: {
      return state
    }
  }
}
