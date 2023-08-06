import Cards from '../Cards/Cards.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import SideBar from '../SideBar/SideBar.jsx'
import styled from './Paginated.module.css'
import {  useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { sortCountries}  from '../../redux/actions/index.js'

export default function Paginated ({searchCountry}){

    const dispatch = useDispatch()

    const countries = useSelector((state) => state.countries)
    
    const [currentPage, setCurrentPage] = useState(1)

    const [filteredCountries, setFilteredCountries] = useState([...countries]);

    const [currentOrder, setCurrentOrder] = useState('')

    const [continents, setContinents] = useState([])

    const [items, setItems] = useState([...filteredCountries])

    const [totalPages, setTotalPages] = useState(1)


    function orderCountry(order){
        setCurrentOrder(order)
        dispatch(sortCountries(order))
    }

       

    let prevButton = false
    let nextButton = false   

    if (currentPage*10 >= filteredCountries.length){
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

    

    const nextHandler = () =>{
        const total = filteredCountries.length
        const firstIndex = currentPage * 10
        if(firstIndex === total) return
        setItems([...filteredCountries].splice(firstIndex,10))
        setCurrentPage(currentPage+1)
    }

    const prevHandler = () =>{
        const firstIndex = currentPage-2 * 10
        if (currentPage === 1) return
        setItems([...filteredCountries].splice(firstIndex,10))
        setCurrentPage(currentPage-1)
    }

    
    useEffect(() => {
        const filtered = continents.length > 0 ? countries.filter(country => continents.includes(country.continent)) : countries;
        setFilteredCountries(filtered)
        setTotalPages(Math.ceil(filtered.length / 10))
        setItems([...filtered].splice((currentPage-1) * 10, 10));
         if (currentPage > totalPages) setCurrentPage(1)
       }, [filteredCountries, continents, countries, currentPage, currentOrder]);

       

      return (
        <div>
            <SideBar setFilter = {setContinents}/>
            <NavBar orderCountry = {orderCountry} searchCountry = {searchCountry}/>
            
        <div className = {styled.container}>
        
            {totalPages > 1 ? (
                <p className = {styled.texto}><strong>PAGE: {currentPage}/{totalPages}</strong></p>  
            ) : (
                <p className = {styled.texto}><strong>PAGE: {currentPage}</strong></p>
            )}
            </div>
            <div className= {styled.botones}>
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
            
            </div>
            <Cards items = {items}/>
            
            </div>
    )

}

    