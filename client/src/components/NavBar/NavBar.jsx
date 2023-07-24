import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styled from './NavBar.module.css'

export default function NavBar ({onSearch}) {
    return (
        <div className = {styled.container}>
        <SearchBar onSearch = {onSearch}/>
        </div>
    )
}

NavBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    }
