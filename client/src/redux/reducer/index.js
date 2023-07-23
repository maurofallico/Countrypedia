import { GET_COUNTRIES, GET_BY_CODE } from '../actions/index.js'

let initialState = {countries: []}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state, countries: action.payload
            }
        case GET_BY_CODE:
            return{
                ...state, countries: action.payload
            }
        default:
            return state
    }
}

export default rootReducer