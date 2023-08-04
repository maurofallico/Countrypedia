import axios from 'axios'

export const GET_COUNTRIES = "GET_COUNTRIES"
export const SORT = "SORT"

export function getCountries(name, continent){
    return async function(dispatch){
            const response = await axios.get('http://localhost:3001/countries?name=' + name + '&continent=' + continent);
            return dispatch ({
                type: GET_COUNTRIES,
                payload: response.data
            })
    }
}

export function sortCountries(value){
    return ({
        type: SORT,
        payload: value
    })
}

