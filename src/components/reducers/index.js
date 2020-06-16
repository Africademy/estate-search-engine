const initState = {
  favourites: [],
  toggleBurger: false,
}

export const Favourites = (state = initState.favourites, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES": {
      return [...state, action.payload]
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
