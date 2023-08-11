import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import styled from './Activities.module.css'
import { useSelector } from 'react-redux'

export default function Activities() {

    const activities = useSelector((state) => state.activities)
    const countries = useSelector((state) => state.countries)

    const [countryList, setCountryList] = useState([])

  const navigate = useNavigate()

  function toHome () {
    navigate('/home')
  }

  useEffect(() => {
    const newCountryList = activities.map((act) => {
        return countries.filter(c => act.idCountries.includes(c.id));
    });
    setCountryList(newCountryList);
}, [activities, countries]);
  
  

    return (
        <div className = {styled.container}>
            <div className = {styled.navBar}>
            <button className = {styled.button} onClick = {toHome}>BACK</button>
            </div>
            
            <div className = {styled.sideBar}>
                <br></br>
            </div>
            <div className = {styled.cards}>
            {activities?.map((act, index) => (
                <div className = {styled.card}>
            <p className = {styled.text}>
                <strong><u>{act.name}</u></strong><br></br>
                <u>Difficulty</u>: {act.difficulty}<br></br>
                <u>Duration</u>: {act.duration}<br></br>
                <u>Season</u>: {act.season}<br></br>
                <u>Countries</u>: {countryList[index]?.map(c => c.name).join(', ')}
            </p>
            </div>
        ))}
            </div>
            
        </div>
    )

}