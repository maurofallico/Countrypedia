import styled from "./SideBar.module.css";
import { useSelector } from 'react-redux'
import {useState, useEffect} from 'react';
import {  useDispatch } from 'react-redux'
import { filterCountries, addCountries, removeCountries } from '../../redux/actions/index.js'

export default function SideBar({ setFilter }) {
 
    const [continents, setContinents] = useState([]);

    const [select, setSelect] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        setFilter(continents);
      }, [continents, setFilter])

      function selectContinents (e){
        if (continents.includes(e.target.value)){
            const filtered = continents.filter(continent => continent !== e.target.value)
            setContinents(filtered)
        }
        else{
            setContinents([...continents, e.target.value])
        }
      }

      function clearFilters() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });
        setContinents([]);
      }

  return (
    <div className={styled.container}>
      <div className={styled.filters}>
        <h2 className={styled.title}>FILTERS</h2>

        <label className={styled.label}>
          North America
          <input
            type="checkbox"
            name="North America"
            value="North America"
            onChange={selectContinents}
          ></input>
        </label>

        <label className={styled.label}>
          South America
          <input
            type="checkbox"
            name="South America"
            value="South America"
            onChange={selectContinents}
          ></input>
        </label>

        <label className={styled.label}>
          Europe
          <input
            type="checkbox"
            name="Europe"
            value="Europe"
            onChange={selectContinents}
          ></input>
        </label>

        <label className={styled.label}>
          Asia
          <input
            type="checkbox"
            name="Asia"
            value="Asia"
            onChange={selectContinents}
          ></input>
        </label>

        <label className={styled.label}>
          Africa
          <input 
            type="checkbox" 
            name="Africa" 
            value="Africa"
            onChange={selectContinents}
          ></input>
        </label>

        <label className={styled.label}>
          Oceania
          <input 
            type="checkbox"
            name="Oceania" 
            value="Oceania"
            onChange={selectContinents}
          ></input>
        </label>

        <label className={styled.label}>
          Antarctica
          <input 
            type="checkbox" 
            name="Antarctica" 
            value="Antarctica"
            onChange={selectContinents}
          ></input>
        </label>

    
        <button className={styled.button} onClick = {clearFilters} >
            Clear All
        </button>
      </div>
    </div>
  );
}
