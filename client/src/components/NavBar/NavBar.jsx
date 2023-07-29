import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styled from './NavBar.module.css'

export default function NavBar ({onSearch}) {
    return (
        <div className = {styled.container}>
            <label className = {styled.label}><strong>Ordenar</strong>
            <select className = {styled.filter} name='order'>
                <option
                value="asc">A - Z
                </option>
                <option
                value="des">Z - A
                </option>
            </select>
            </label>
        <SearchBar onSearch = {onSearch}/>
        </div>
    )
}

NavBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    }
