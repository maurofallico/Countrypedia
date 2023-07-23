import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar.jsx';

export default function NavBar ({onSearch}) {
    return (
        <SearchBar onSearch = {onSearch}/>
    )
}

NavBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    }
