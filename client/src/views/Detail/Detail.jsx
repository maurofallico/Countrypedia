import styled from "./Detail.module.css"
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react'


export default function Detail(){

    const navigate = useNavigate()

    const [ country, setCountry ] = useState([]);

    const code = window.location.href.substr(-3).toUpperCase()

    useEffect(() => {
        fetch(`http://localhost:3001/countries/${code}`)
          .then(response => {
            if (response.ok) {
              return response.json();
            } 
          })
          .then(data => {
            setCountry(data);
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
        </div>
        <div className = {styled.buttonContainer}>
        <button className={styled.volver} onClick={back}>BACK</button>
        </div>
        </div>
    )
}
/* ID (Código de tres letras).
Nombre.
Imagen de la bandera.
Continente.
Capital.
Subregión (si tiene).
Área (si tiene).
Población. */