import Card from '../Card/Card.jsx'
import PropTypes from 'prop-types';
import styled from './Cards.module.css'
import { Link } from "react-router-dom";

export default function Cards ({items}) {
    const countryList = items
    return (
      <div className = {styled.parent}>
        <div className = {styled.container}>
            {countryList?.map((country) => (
              <div className = {styled.card} key={country.id}>
                <Link to={`/${country.code}`} className={styled.detail}>
                <Card country={country}/>  
                </Link>
                </div>
            ))}
        </div>
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