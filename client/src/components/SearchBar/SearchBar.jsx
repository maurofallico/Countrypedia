import styled from './SearchBar.module.css'
import PropTypes from 'prop-types';
import { useState } from 'react'

export default function SearchBar ({onSearch}) {
    const [code, setCode] = useState('')
    function handleSearch(){
        //if (!code){
        //    alert("Ingrese el nombre de un país")
        //}
        //else{
            onSearch(code)
        //}
    }
    return (
        <div className = {styled.container}>
        <input className = {styled.input} type='search' placeholder='Escriba el nombre de un país...' value={code} onChange={(e) => setCode(e.target.value)}  />
         <button className = {styled.button} onClick={handleSearch} >Buscar</button>
         </div>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    }