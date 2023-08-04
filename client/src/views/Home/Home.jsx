
import Paginated from '../../components/Paginated/Paginated.jsx'
import {  useDispatch } from 'react-redux'
import { getCountries } from '../../redux/actions/index.js' 
import styled from "./Home.module.css";

export default function Home(){
    const dispatch = useDispatch()

   function searchCountry (name, continent){
        dispatch(getCountries(name, continent))
    }
 
    
    return(
        <div className = {styled.parent}>
            <Paginated searchCountry = {searchCountry}/>
        </div>
    )
}