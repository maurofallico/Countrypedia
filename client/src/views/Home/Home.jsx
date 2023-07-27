import NavBar from "../../components/NavBar/NavBar.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import {  useDispatch, useSelector } from 'react-redux'
import { getCountryByCode } from '../../redux/actions/index.js' 
import styled from "./Home.module.css";
import { useState, useEffect } from 'react'

export default function Home(){
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)
    const [items, setItems] = useState([...countries].splice(0,10))

    
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        setItems([...countries].splice(currentPage * 10, 10));
      }, [countries, currentPage]);

      useEffect(() => {
        setCurrentPage(0)
      }, [countries]);

     const nextHandler = () =>{
        const total = countries.length
        const nextPage = currentPage + 1
        const firstIndex = nextPage * 10

        if(firstIndex >= total )  return
        setItems([...countries].splice(firstIndex,10))
        setCurrentPage(nextPage)
    }

    const prevHandler = () =>{
        const prevPage = currentPage - 1
        const firstIndex = prevPage * 10

        if (prevPage < 0) return
        setItems([...countries].splice(firstIndex,10))
        setCurrentPage(prevPage)
    }  

    function search (countryCode){
        dispatch(getCountryByCode(countryCode))
    }

    return(
        <div>
            <NavBar onSearch = {search}/>
            <p className = {styled.texto}>PAGINA: {currentPage+1} </p>
            <button className = {styled.button}  onClick = {prevHandler} >PREV</button>
            <button className = {styled.button}  onClick = {nextHandler} >NEXT</button>
            <Cards items = {items}/>
        </div>
    )
}