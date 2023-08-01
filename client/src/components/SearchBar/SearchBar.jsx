import styled from './SearchBar.module.css'
import PropTypes from 'prop-types';
import { useState } from 'react'
import {useSelector} from 'react-redux'

export default function SearchBar ({onSearch, continentSearch, activitySearch }) {
    const [country, setCountry] = useState('')
    const [continent, setContinent] = useState('')
    const [activity, setActivity] = useState('')
    const countries = useSelector((state) => state.countries)
    if (countries.length === 0 && country==='' && continent==='') onSearch(country)

    const countryChange = (e) => {
        const input = e.target.value;
        setCountry(input)
        onSearch(input)
    }

    const continentChange = (e) => {
        const input = e.target.value;
        setContinent(input)
        continentSearch(input)
    }

    const activityChange = (e) => {
        const input = e.target.value;
        setActivity(input)
        activitySearch(input)
    }
           
    return (
        <div className = {styled.container}>
        <label className = {styled.label}><strong>País:</strong></label>
        <input 
        className = {styled.input} 
        type='search' 
        placeholder='Ingrese un país...' 
        value={country} 
        onChange={countryChange}
        />
        <label className = {styled.label}><strong>Continente:</strong></label>
        <input 
        className = {styled.input} 
        type='search' 
        placeholder='Ingrese un continente...' 
        value={continent}
        onChange={continentChange}
        />
        <label className = {styled.label}><strong>Actividad:</strong></label>
        <input 
        className = {styled.input} 
        type='search' 
        placeholder='Ingrese una actividad...' 
        value={activity}
        onChange={activityChange}
        />
        </div>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    }