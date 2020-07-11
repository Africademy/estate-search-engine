import estates from "../../data/estates.json"
import advantages from "../../data/advantages.json"

export const initState = {
  favourites: [],
  toggleBurger: false,
  advantages: [],
  results: [],
  estates: estates,
  modal: false,
  english: true,
  filtering: estates,
  fullScreenModal: false,
  roomsDropdown: false,
  maxRoomsDropdown: false,
  minFloorDrop: false,
  maxFloorDrop: false,
  selectedAdvantages: [],
  initialJSON: advantages,
  error: false,
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

export const ToggleFullScreen = (state = initState.fullScreenModal, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL": {
      return !state
    }
    default: {
      return state
    }
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
    case "ADD_NEW": {
      state = [...state, action.payload]
      return state
    }
    case "SORT_FROM_LOWEST": {
      const compare = (a, b) => {
        const priceA = a.prices.price
        const priceB = b.prices.price

        let comparison = 0
        if (priceA > priceB) {
          comparison = 1
        } else if (priceA < priceB) {
          comparison = -1
        }
        return comparison
      }
      return state.sort(compare)
    }
    case "SORT_FROM_HIGHEST": {
      const compare = (a, b) => {
        const priceA = a.prices.price
        const priceB = b.prices.price
        let comparison = 0
        if (priceA < priceB) {
          comparison = 1
        } else if (priceA > priceB) {
          comparison = -1
        }
        return comparison
      }
      return state.sort(compare)
    }
    case "RESET_RESULTS": {
      return (state = initState.estates)
    }
    default: {
      return state
    }
  }
}

export const FilterByAdvantages = (
  state = initState.selectedAdvantages,
  action
) => {
  switch (action.type) {
    case "FILTER_BY_ADVANTAGES": {
      return (state = [...state, action.payload])
    }
    case "REMOVE_SELECTED": {
      return state.filter(item => {
        return item.key !== action.payload.key
      })
    }
    case "RESET": {
      initState.initialJSON.forEach(item => {
        item.checked = false
      })
      return []
    }
    default: {
      return state
    }
  }
}

export const ToggleAmountOfRooms = (
  state = initState.roomsDropdown,
  action
) => {
  switch (action.type) {
    case "TOGGLE_AMOUNT_OF_ROOMS": {
      if (action.payload === "text") {
        return true
      }
      if (
        typeof action.payload === "number" ||
        typeof action.payload === "string"
      ) {
        return false
      }
      break
    }
    default: {
      return state
    }
  }
}

export const ToggleMaxRooms = (state = initState.maxRoomsDropdown, action) => {
  switch (action.type) {
    case "TOGGLE_MAX_AMOUNT_OF_ROOMS": {
      if (action.payload === "text") {
        return true
      }
      if (
        typeof action.payload === "number" ||
        typeof action.payload === "string"
      ) {
        return false
      }
      break
    }
    default: {
      return state
    }
  }
}

export const ToggleFloor = (state = initState.minFloorDrop, action) => {
  switch (action.type) {
    case "TOGGLE_MIN_FLOOR": {
      if (action.payload === "text") {
        return true
      }
      if (
        typeof action.payload === "number" ||
        typeof action.payload === "string"
      ) {
        return false
      }
      break
    }
    default: {
      return state
    }
  }
}

export const ToggleMaxFloor = (state = initState.maxFloorDrop, action) => {
  switch (action.type) {
    case "TOGGLE_MAX_FLOOR": {
      if (action.payload === "text") {
        return true
      }
      if (
        typeof action.payload === "number" ||
        typeof action.payload === "string"
      ) {
        return false
      }
      break
    }
    default: {
      return state
    }
  }
}

export const ErrorHandler = (state = initState.error, action) => {
  switch (action.type) {
    case "HANDLE_ERROR": {
      return !state
    }
    default: {
      return state
    }
  }
}
