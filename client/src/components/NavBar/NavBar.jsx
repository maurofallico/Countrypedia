import PropTypes from "prop-types";
import styled from "./NavBar.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar({ searchCountry, orderCountry }) {

  const [country, setCountry] = useState("");

  const navigate = useNavigate()

  function toForm () {
    navigate('/form')
  }

  function toActivities () {
    navigate('/activities')
  }

  const handleOrder = (e) => {
    orderCountry(e.target.value);
  };

  const countryChange = (e) => {
    const inputCountry = e.target.value;
    setCountry(inputCountry);
  };

  useEffect(() => {
    searchCountry(country);
  }, [country]);


  return (
    <div className={styled.container}>
      
      <label className={styled.labelOrdenar}>
        <strong>Order:</strong>
        <select className={styled.select} name="order" onChange={handleOrder}>
          <option value="nameUp">Name (A-Z)</option>
          <option value="nameDown">Name (Z-A)</option>
          <option value="menorPop">Min Population</option>
          <option value="mayorPop">Max Population</option>
        </select>
      </label>
      <label className={styled.labelPais}>
        <strong>Country:</strong>
      <input
        className={styled.input}
        type="search"
        placeholder="Find a country..."
        value={country}
        onChange={countryChange}
      />
      </label>

      <button className = {styled.buttonList} onClick = {toActivities}>Activity List</button>

      <button className = {styled.buttonAdd} onClick = {toForm}>Add Activity</button>

      
    </div>
  );
}

NavBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
