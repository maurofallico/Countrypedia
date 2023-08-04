import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styled from './NavBar.module.css'

export default function NavBar ({searchCountry, orderCountry}) {


    const handleOrder = (e) =>{
        orderCountry(e.target.value)
    }

    return (
        <div className = {styled.container}>
            <label className = {styled.label}><strong>Ordenar:</strong>
            <select className = {styled.filter} name='order' onChange = {handleOrder}>
                <option
                value="nameUp"
                >Nombre (A-Z)
                </option>
                <option
                value="nameDown"
                >Nombre (Z-A)
                </option>
                <option
                value="menorPop"
                >Menor Población
                </option>
                <option
                value="mayorPop"
                >Mayor Población
                </option>
            </select>
            </label>
        <SearchBar searchCountry = {searchCountry}/>
        <button className = {styled.button}>Agregar Actividad</button>
        </div>
    )
}

NavBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    }
