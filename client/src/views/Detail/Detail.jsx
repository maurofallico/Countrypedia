import styled from "./Detail.module.css"
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'


export default function Detail(){

    const activities = useSelector((state) => state.activities)

    const [activityList, setActivityList] = useState([])

    const navigate = useNavigate()

    const [ country, setCountry ] = useState([]);

    const code = window.location.href.substr(-3).toUpperCase()

    useEffect(() => {
      let actList = []
        fetch(`http://localhost:3001/countries/${code}`)
          .then(response => {
            if (response.ok) {
              return response.json();
            } 
          })
          .then(data => {
            setCountry(data);
            {activities?.map((act) => {
              if (act.idCountries.includes(data.id)) {
                actList.push(act.name)
              }
          })}
          if (actList.length > 0) {
            setActivityList(actList.join(', '))
          }
          else{
            setActivityList(' <no activities registered>')
          }
          })
      }, []);


      const back = () =>{
        navigate('/home')
      }

    return(
        <div>
        <div className = {styled.container}>
            <p className = {styled.texto}><strong>[{code}]</strong></p>
            <p className = {styled.texto}><strong><u>Name</u>:</strong> {country.name}</p>
            <img className = {styled.bandera} src = {country.flag}></img>
            <p className = {styled.texto}><strong><u>Continent</u>:</strong> {country.continent}</p>

            {country.capital !== '-' && ( <p className = {styled.texto}><strong><u>Capital</u>:</strong> {country.capital}</p>)}

            {country.subregion !== country.continent && ( <p className = {styled.texto}><strong><u>Region</u>:</strong> {country.subregion}</p>)}
            
            {country.population > 0 && ( <p className = {styled.texto}><strong><u>Population</u>:</strong> {country.population.toLocaleString()}</p>)}

            <p className = {styled.texto}><strong><u>Activities</u>:</strong> {activityList} </p>
        </div>
        <div className = {styled.buttonContainer}>
        <button className={styled.volver} onClick={back}>Back</button>
        </div>
        </div>
    )
}