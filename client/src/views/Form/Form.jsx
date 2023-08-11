import styled from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import  { useState, useEffect }  from 'react';
import {  useDispatch } from 'react-redux'
import { postActivity } from '../../redux/actions/index'

export default function Form() {

  const dispatch = useDispatch()

    

  const countries = useSelector((state) => state.countries)

  const navigate = useNavigate();

  const [activityName, setActivityName] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [duration, setDuration] = useState('')
  const [season, setSeason] = useState('')
  const [country, setCountry] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [idList, setIdList] = useState([])

  function toHome() {
    navigate("/home");
  }

  const createActivity = () => {
    const ids = []
    country?.map((c) => (
      ids.push(c)
    ))
    const activityData = {
        name: activityName,
        difficulty: difficulty,
        duration: duration,
        season: season,
        idCountries: idList
    };
    dispatch(postActivity(activityData));
    setActivityName('')
    setDifficulty('')
    setDuration('')
    setSeason('')
    setCountry([])
    setSelectedCountry('')
};


  function addCountry(){
    if (country.includes(selectedCountry)){
      alert("Ese país ya se encuentra añadido")
    }
    else{
      const updatedCountry = [...country, selectedCountry];
      const updatedId = countries.filter((c) => updatedCountry.includes(c.name)).map((c) => c.id);

      setCountry(updatedCountry);
      setIdList(updatedId);
    }
    setSelectedCountry('')
  }

  useEffect(() => {
    if (!selectedCountry){
      setButtonDisabled(true)
    }
    else{
      setButtonDisabled(false)
    }
  }, [selectedCountry])




  return (
    <div className={styled.container}>
      <form className={styled.form}>
        <p className={styled.texto}><strong>Create Activity</strong></p>

        <div className = {styled.name}>
        <label className={styled.labelName}><strong>Name: </strong></label>
        <input
         className={styled.inputName}
         value={activityName}
         onChange={(e) => setActivityName(e.target.value)}
         ></input>
        </div>

        <label className={styled.labelDifficulty}><strong>Difficulty</strong></label>
        <div className={styled.difficulty}>
        <div>
            <input
              type="radio"
              checked={difficulty === '1'}
              value = "1"
              onChange={(e) => setDifficulty(e.target.value)}
            ></input>
            <label className={styled.labelRadio}>
              1
            </label>
          </div>
          <div>
            <input
              type="radio"
              checked={difficulty === '2'}
              value = "2"
              onChange={(e) => setDifficulty(e.target.value)}
            ></input>
            <label className={styled.labelRadio}>
              2
            </label>
          </div>
          <div>
            <input
              type="radio"
              checked={difficulty === '3'}
              value = "3"
              onChange={(e) => setDifficulty(e.target.value)}
            ></input>
            <label className={styled.labelRadio}>
              3
            </label>
          </div>
          <div>
            <input
              type="radio"
              checked={difficulty === '4'}
              value = "4"
              onChange={(e) => setDifficulty(e.target.value)}
            ></input>
            <label className={styled.labelRadio}>
              4
            </label>
          </div>
          <div>
            <input
              type="radio"
              checked={difficulty === '5'}
              value = "5"
              onChange={(e) => setDifficulty(e.target.value)}
            ></input>
            <label className={styled.labelRadio}>
              5
            </label>
          </div>
        </div>
        <div className = {styled.duration}>
        <label className={styled.labelDuration}><strong>Duration: </strong></label>
        <input maxLength = "3" className={styled.inputDuration}
        onChange={(e) => setDuration(e.target.value)}value = {duration}></input>
        <p className = {styled.subText}><strong>(minutes)</strong></p>
        </div>
        <div className = {styled.season}>
        <label className={styled.labelSeason}><strong>Season: </strong></label>
        <select className = {styled.inputSeason} value={season} onChange={(e) => setSeason(e.target.value)}>
            <option disabled value = ""
            >-- pick a season --</option>
            <option value="Summer"
            >Summer</option>
            <option value="Autumn"
            >Autumn</option>
            <option value="Winter"
            >Winter</option>
            <option value="Spring"
            >Spring</option>
        </select>
        </div>
        <div className = {styled.countries}>
        <label className={styled.labelCountries}><strong>Countries: </strong></label>

        <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className={styled.select}>
        <option disabled value="" >-- select a country --</option>
        {countries?.map((country) => (
            <option
            >
                {country.name}
                
            </option>
        ))}
        
        </select>
        <button type = "button" className = {styled.button2} onClick={addCountry} disabled = {buttonDisabled}>
            +
        </button>
        
        </div>
        <div className = {styled.listContainer}>
        <p className = {styled.countryList}>{country.join(', ')}</p>
        </div>
        <div className = {styled.buttons}>
        <button type = "button" className={styled.button} onClick={createActivity}>
          <strong>CREATE</strong>
        </button>
        
        <button className={styled.button} onClick={toHome}>
          <strong>BACK</strong>
        </button>
        </div>
      </form>
    </div>
  );
}
