import PropTypes from 'prop-types';
import styled from './Card.module.css'
import Detail from '../../views/Detail/Detail.jsx'

export default function Card({country}) {
    return (
        <div className = {styled.container}>
            {country.name.length > 28 ?  (
                <div>
                    <p className = {styled.textoChico}><strong>{country.name}</strong></p>
                    <p className = {styled.textoChico2}>({country.continent})</p>
                </div>
            ) : (
                <div>
                    <p className = {styled.texto}><strong>{country.name}</strong></p>
                    <p className = {styled.texto2}>({country.continent})</p>
                </div>
            )}
            <img className = {styled.bandera} src = {country.flag}></img>
        </div>
    )
}

Card.propTypes = {
    country: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        continent: PropTypes.string.isRequired,
        flag: PropTypes.string.isRequired,
      // Agrega otras propiedades aquí si son necesarias
    }).isRequired,
  };