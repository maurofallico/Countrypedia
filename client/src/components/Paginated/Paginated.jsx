import Cards from '../Cards/Cards.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import styled from './Paginated.module.css'
import {  useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { sortCountries}  from '../../redux/actions/index.js'

export default function Paginated ({searchCountry}){

    const dispatch = useDispatch()

    const countries = useSelector((state) => state.countries)

    const [items, setItems] = useState([...countries].splice(0,10))
    
    const [currentPage, setCurrentPage] = useState(1)

    const [currentOrder, setCurrentOrder] = useState('')


    function orderCountry(order){
        setCurrentOrder(order)
        dispatch(sortCountries(order))
    }

    

    let prevButton = false
    let nextButton = false   

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

    useEffect(() => {
        setItems([...countries].splice((currentPage-1) * 10, 10));
        if (currentPage > totalPages) setCurrentPage(1)
      }, [countries, currentPage, currentOrder]);

      return (
        <div>
            <NavBar orderCountry = {orderCountry} searchCountry = {searchCountry}/>
        <div className = {styled.container}>
            {totalPages > 1 ? (
                <p className = {styled.texto}><strong>PAGINA: {currentPage}/{totalPages}</strong></p>  
            ) : (
                <p className = {styled.texto}><strong>PAGINA: {currentPage}</strong></p>
            )}
            </div>
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
    )

}

    