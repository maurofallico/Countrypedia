import axios from 'axios'

export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_BY_CODE = "GET_BY_CODE"
export const GET_BY_CONTINENT = "GET_BY_CONTINENT"

export function getCountries(){
    return async function(dispatch){
        const response = await axios.get('http://localhost:3001/countries');
        return dispatch ({
            type: "GET_COUNTRIES",
            payload: response.data
        })
    }
}

export function getByContinent(continent){
    return async function(dispatch){
        const response = await axios.get('http://localhost:3001/countries?continent=' + continent);
        return dispatch ({
            type: "GET_BY_CONTINENT",
            payload: response.data
        })
    }
}

export function getCountryByCode(code){
    return async function(dispatch){
        const response = await axios.get('http://localhost:3001/countries?name=' + code)
        return dispatch ({
            type: "GET_BY_CODE",
            payload: response.data
        })
    }
}

