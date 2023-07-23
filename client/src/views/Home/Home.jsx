import NavBar from "../../components/NavBar/NavBar.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import {  useDispatch, useSelector } from 'react-redux'
import { getCountryByCode } from '../../redux/actions/index.js' 

export default function Home(){
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)

    function search (countryCode){
        dispatch(getCountryByCode(countryCode))
    }

    return(
        <div>
            <NavBar onSearch = {search}/>
            <Cards countries = {countries}/>
        </div>
    )
}