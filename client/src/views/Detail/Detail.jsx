import styled from "./Detail.module.css"
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'


export default function Detail(){

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

    return(
        <div className = {styled.container}>
            <p className = {styled.texto}>[{code}]</p>
            <p className = {styled.texto}><strong><u>Nombre</u>:</strong> {country.name}</p>
            <img className = {styled.bandera} src = {country.flag}></img>
            <p className = {styled.texto}><strong><u>Continente</u>:</strong> {country.continent}</p>

            {country.capital !== '-' && ( <p className = {styled.texto}><strong><u>Capital</u>:</strong> {country.capital}</p>)}

            {country.subregion !== country.continent && ( <p className = {styled.texto}><strong><u>Región</u>:</strong> {country.subregion}</p>)}
            
            {country.population > 0 && ( <p className = {styled.texto}><strong><u>Población</u>:</strong> {country.population}</p>)}
            <Link className={styled.volver} to = '/home'>VOLVER</Link>
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