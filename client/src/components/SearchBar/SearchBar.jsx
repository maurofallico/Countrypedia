import styled from './SearchBar.module.css'
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'

export default function SearchBar ({ searchCountry }) {


    const [country, setCountry] = useState('')
    const [continent, setContinent] = useState('')
    const [activity, setActivity] = useState('')

    useEffect(() => {
        searchCountry(country, continent);
      }, [country, continent]);

    const countryChange = (e) => {
        const inputCountry = e.target.value;
        setCountry(inputCountry)
    }

    const continentChange = (e) => {
        const inputContinent = e.target.value;
        setContinent(inputContinent)
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
        
        <label className = {styled.label}><strong>Actividad:</strong></label>
        <input 
        className = {styled.input} 
        type='search' 
        placeholder='Ingrese una actividad...' 
        value={activity}
        />
        </div>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    }