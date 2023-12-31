import {
  GET_COUNTRIES,
  SORT,
  POST_ACTIVITY,
} from "../actions/index.js";

let initialState = { countries: [], activities: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case POST_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload]
      }

    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case SORT:
      const order = state.countries.sort((a, b) => {
        switch (action.payload) {
          case "nameUp":
            return a.name.localeCompare(b.name);
          case "nameDown":
            return b.name.localeCompare(a.name);
          case "menorPop":
            return a.population - b.population;
          case "mayorPop":
            return b.population - a.population;
          default:
            return a.name.localeCompare(b.name);
        }
      });
      return {
        ...state,
        countries: order,
      };
    default:
      return state;
  }
}

export default rootReducer;
