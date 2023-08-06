
import Paginated from '../../components/Paginated/Paginated.jsx'
import {  useDispatch } from 'react-redux'
import { getCountries } from '../../redux/actions/index.js' 


export default function Home(){
    const dispatch = useDispatch()

   function searchCountry (name){
        dispatch(getCountries(name))
    }
 
    
    return(
        <div>
            <Paginated searchCountry = {searchCountry}/>
        </div>
    )
}