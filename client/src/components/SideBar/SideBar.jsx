import styled from "./SideBar.module.css";
import { useSelector } from 'react-redux'
import {useState, useEffect} from 'react';

export default function SideBar({ filterContinents, filterActivity }) {

  const activities = useSelector((state) => state.activities)
 
    const [continents, setContinents] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState("")

    useEffect(() => {
      filterContinents(continents);
      filterActivity(selectedActivity);
      }, [continents, filterContinents, selectedActivity, filterActivity])


      function selectContinents (e){
        if (continents.includes(e.target.value)){
            const filtered = continents.filter(continent => continent !== e.target.value)
            setContinents(filtered)
        }
        else{
            setContinents([...continents, e.target.value])
        }
      }

      function selectActivity(e) {
        if (e) setSelectedActivity(e.target.value);
      }

      function clearFilters() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });
        setContinents([]);
        setSelectedActivity('')
        filterActivity('')
      }

  return (
    <div className={styled.container}>
      <div className={styled.filters}>
        <h2 className={styled.title}>Filters</h2>
        <select value = {selectedActivity} onChange={selectActivity} className={styled.activities}>
        <option className = {styled.filterAct} value="" disabled>-- filter by activity --</option>
        {activities?.map((act) => (
            <option
            value = {act.name}>
                {act.name}
            </option>
        ))}
        </select>
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
