import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styled from './NavBar.module.css'

export default function NavBar ({onSearch, continentSearch, activitySearch}) {
    return (
        <div className = {styled.container}>
            <label className = {styled.label}><strong>Ordenar:</strong>
            <select className = {styled.filter} name='order'>
                <option
                value="nameUp">Nombre (A-Z)
                </option>
                <option
                value="nameDown">Nombre (Z-A)
                </option>
                <option
                value="menorPop">Menor Población
                </option>
                <option
                value="mayorPop">Mayor Población
                </option>
            </select>
            </label>
        <SearchBar onSearch = {onSearch} continentSearch = {continentSearch} activitySearch = {activitySearch}/>
        <button className = {styled.button}>Agregar Actividad</button>
        </div>
    )
}

NavBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    }
