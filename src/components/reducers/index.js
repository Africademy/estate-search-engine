import estates from "../../data/estates.json"

export const initState = {
  favourites: [],
  toggleBurger: false,
  advantages: [],
  results: [],
  estates: estates,
  modal: false,
  english: true,
  filtering: estates,
}

export const Favourites = (state = initState.favourites, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES": {
      if (action.payload.liked) {
        action.payload.liked = false
        return state.filter(estate => {
          return estate.key !== action.payload.key
        })
      } else {
        action.payload.liked = !action.payload.liked
        return [...state, action.payload]
      }
    }
    default: {
      return state
    }
  }
}

export const ToggleBurger = (state = initState.toggleBurger, action) => {
  switch (action.type) {
    case "TOGGLE_BURGER": {
      return !state
    }
    default: {
      return state
    }
  }
}

export const AddAdvantages = (state = initState.advantages, action) => {
  switch (action.type) {
    case "ADD_ADVANTAGES": {
      return [...state, action.payload]
    }
    case "REMOVE_ADVANTAGE": {
      const filtered = state.filter(adv => {
        return adv.key !== action.payload
      })
      return filtered
    }
    default: {
      return state
    }
  }
}

export const SearchResults = (state = initState.results, action) => {
  if (action.type === "SEARCH") {
    if (action.payload.length === 0) {
      return null
    } else {
      return {
        results: action.payload.results,
        value: action.payload.props,
      }
    }
  } else {
    return state
  }
}

export const Estates = (state = initState.estates, action) => {
  if (action.type === "FILTER") {
    return state
  } else if (action.type === "ADD_NEW") {
    return [...state, action.payload]
  } else {
    return state
  }
}

export const SwitchLanguage = (state = initState.english, action) => {
  if (action.type === "SWITCH_LANGUAGE") {
    return !state
  } else {
    return state
  }
}

export const Filter = (state = initState.filtering, action) => {
  switch (action.type) {
    case "FILTER_BY_CITY": {
      let filter
      if (action.payload !== "") {
        filter = state.filter(estate => {
          return `${estate.city}, ${estate.district}` === action.payload
        })
        return filter
      } else {
        return state
      }
    }
    case "FILTER_BY_TYPE": {
      const filtered = state.filter(estate => {
        return estate.type === action.payload
      })
      return filtered
    }
    case "FILTER_BY_TRANSACTION": {
      const filtered = state.filter(estate => {
        return estate.prices.type === action.payload
      })
      return filtered
    }
    case "FILTER_BY_PRICE": {
      const filtered = state.filter(estate => {
        return (
          estate.prices.price >= action.payload.minPrice &&
          estate.prices.price <= action.payload.maxPrice
        )
      })
      return filtered
    }
    default: {
      return state
    }
  }
}
