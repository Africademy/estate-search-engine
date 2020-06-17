const initState = {
  favourites: [],
  toggleBurger: false,
  advantages: [],
}

export const Favourites = (state = initState.favourites, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES": {
      action.payload.liked = !action.payload.liked
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

export const AddAdvantages = (state = initState.advantages, action) => {
  switch (action.type) {
    case "ADD_ADVANTAGES": {
      return [...state, action.payload]
    }
    default: {
      return state
    }
  }
}
