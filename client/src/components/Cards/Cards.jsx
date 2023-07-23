import Card from '../Card/Card.jsx'
import PropTypes from 'prop-types';
import styled from './Cards.module.css'

export default function Cards ({countries}) {
    const countryList = countries
    return (
        <div className = {styled.container}>
            {countryList?.map((country) => (
              <div className = {styled.card} key={country.id}>
                <Card country={country}/>  
                </div> 
            ))}
        </div>
    )
}

Cards.propTypes = {
    countries: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  };