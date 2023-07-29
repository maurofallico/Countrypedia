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

    let prevButton = false
    let nextButton = false

    
    const [currentPage, setCurrentPage] = useState(1)

    

    if (currentPage*10 >= countries.length){
        nextButton = false
    }
    else{
        nextButton = true
    }

    if (currentPage === 1){
        prevButton = false
    }
    else{
        prevButton = true
    }



    useEffect(() => {
        setItems([...countries].splice((currentPage-1) * 10, 10));
      }, [countries, currentPage]);

      useEffect(() => {
        setCurrentPage(1)
      }, [countries]);

      let totalPages = Math.ceil(countries.length / 10);

     const nextHandler = () =>{
        const total = countries.length
        const firstIndex = currentPage * 10
        if(firstIndex === total) return
        setItems([...countries].splice(firstIndex,10))
        setCurrentPage(currentPage+1)
    }

    const prevHandler = () =>{
        const firstIndex = currentPage-2 * 10

        if (currentPage === 1) return
        setItems([...countries].splice(firstIndex,10))
        setCurrentPage(currentPage-1)
    }  

   

    function search (countryCode){
        dispatch(getCountryByCode(countryCode))
    }

    return(
        <div className = {styled.parent}>
            <NavBar onSearch = {search}/>
            <div className = {styled.container}>
            {totalPages > 1 ? (
            <p className = {styled.texto}><strong>PAGINA: {currentPage}/{totalPages}</strong></p>  
            ) : (
                <p className = {styled.texto}><strong>PAGINA: {currentPage}</strong></p>
            )}
            {prevButton === true ? (
                <button className = {styled.button}  onClick = {prevHandler} >&lt;</button>
            ): (
                <button className = {styled.button}  disabled >&lt;</button>
            )}
            {nextButton === true ? (
                <button className = {styled.button}  onClick = {nextHandler} >&gt;</button>
            ): (
                <button className = {styled.button}  disabled >&gt;</button>
            )}
            <Cards items = {items}/>
            </div>
        </div>
    )
}