import styled from './SearchBar.module.css'
import PropTypes from 'prop-types';
import { useState } from 'react'
import {useSelector} from 'react-redux'

export default function SearchBar ({onSearch}) {
    const [code, setCode] = useState('')
    const countries = useSelector((state) => state.countries)
    if (countries.length === 0 && code==='') onSearch(code)

    const handleChange = (e) => {
        const input = e.target.value;
        setCode(input)
        onSearch(input)
    }
           
    return (
        <div className = {styled.container}>
        <input 
        className = {styled.input} 
        type='search' 
        placeholder='Escriba el nombre de un país...' 
        value={code} 
        onChange={handleChange}
        />
        </div>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    }