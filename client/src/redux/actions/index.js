import axios from 'axios'

export const GET_COUNTRIES = "GET_COUNTRIES"
export const SORT = "SORT"
export const FILTER_ADD = "FILTER_ADD"
export const FILTER_REMOVE = "FILTER_REMOVE"
export const FILTER = "FILTER"
export const POST_ACTIVITY = "POST_ACTIVITY"


export function getCountries(name){
    return async function(dispatch){
            const response = await axios.get('http://localhost:3001/countries?name=' + name );
            return dispatch ({
                type: GET_COUNTRIES,
                payload: response.data
            })
    }
}

export function postActivity(data){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/activity', data)
        return dispatch ({
            type: POST_ACTIVITY,
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

