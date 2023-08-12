import {
  GET_COUNTRIES,
  SORT,
  FILTER_ADD,
  FILTER_REMOVE,
  FILTER,
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
        }
      });
      return {
        ...state,
        countries: order,
      };

    case FILTER_ADD:
      const addedCountries = state.countries.filter(
        (country) => !action.payload.includes(country.continent)
      );
      return {
        ...state,
        countries: addedCountries,
      };

    case FILTER_REMOVE:
      const removedCountries = state.countries.filter((country) =>
        action.payload.includes(country.continent)
      );
      return {
        ...state,
        countries: removedCountries,
      };

    case FILTER:
        
    ;
    return {
        ...state,
        countries: state,
    }

    default:
      return state;
  }
}

export default rootReducer;
