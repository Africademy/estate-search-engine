import estates from "../../data/estates.json"

export const initState = {
  favourites: [],
  toggleBurger: false,
  advantages: [],
  results: [],
  estates: estates,
  modal: false,
  english: true,
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
