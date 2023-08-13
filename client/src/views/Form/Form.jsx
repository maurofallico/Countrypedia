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

  function validate(form) {
    setErrors(prevErrors => ({
      ...prevErrors,
      name: !form.name ? "empty name" : /[^a-zA-Z]/.test(form.name) ? "invalid name" : "",
      difficulty: !form.difficulty ? "no difficulty" : "",
      duration: !form.duration ? "no duration" : /[^0-9]/.test(form.duration) ? "invalid duration" : "",
      season: !form.season ? "no season" : "",
      idCountries: form.idCountries.length === 0 ? "no countries" : ""
    }));
  }

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    idCountries: []
  })

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    idCountries: "",
  })

  const [country, setCountry] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(true)

  function handleChange (e){
    const property = e.target.name;
    const value = e.target.value;
    setForm({...form, [property]: value})
    validate(form)
  }

  function toHome() {
    navigate("/home");
  }

  const createActivity = () => {
    
    const ids = []
    country?.map((c) => (
      ids.push(c)
    ))
    if (!errors.name && !errors.difficulty && !errors.duration && !errors.season && !errors.idCountries){
      dispatch(postActivity(form));
    setForm({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    idCountries: []
    })
    setCountry([])
    }
    else{
      alert("Some fields are empty")
      
    }
};

  function addCountry(){
    if (country.includes(selectedCountry)){
      alert("Ese país ya se encuentra añadido")
    }
    else{
      const updatedCountry = [...country, selectedCountry];
      const updatedId = countries.filter((c) => updatedCountry.includes(c.name)).map((c) => c.id);

      setCountry(updatedCountry);
      setForm({...form, idCountries: updatedId})
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
    validate(form)
  }, [selectedCountry, form])

  return (
    <div className={styled.container}>
      <form className={styled.form}>
        <p className={styled.texto}><strong>Create Activity</strong></p>
        <div className ={styled.elements}>
        <div className = {styled.name}>
        <label className={styled.labelName}><strong>Name: </strong></label>
        <input
         className={styled.inputName}
         name="name"
         value={form.name}
         onChange={handleChange}
         ></input>
         
        </div>
        <div className={styled.difficulty}>
        <label className={styled.labelDifficulty}><strong>Difficulty:</strong></label>
        <div>
            <input
              type="radio"
              name="difficulty"
              value="1"
              checked={form.difficulty === "1"}
              onChange={handleChange}
            ></input>
            <label className={styled.labelRadio}>
              1
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="difficulty"
              value="2"
              onChange={handleChange}
              checked={form.difficulty === "2"}
            ></input>
            <label className={styled.labelRadio}>
              2
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="difficulty"
              value="3"
              onChange={handleChange}
              checked={form.difficulty === "3"}
            ></input>
            <label className={styled.labelRadio}>
              3
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="difficulty"
              value="4"
              onChange={handleChange}
              checked={form.difficulty === "4"}
            ></input>
            <label className={styled.labelRadio}>
              4
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="difficulty"
              value="5"
              onChange={handleChange}
              checked={form.difficulty === "5"}
            ></input>
            <label className={styled.labelRadio}>
              5
            </label>
          </div>
        </div>
        <div className = {styled.duration}>
        <label className={styled.labelDuration}><strong>Duration: </strong></label>
        <input name="duration" maxLength = "3" className={styled.inputDuration}
        onChange={handleChange}value = {form.duration}></input>
        <p className = {styled.subText}>(minutes)</p>
        </div>
        <label className={styled.labelSeasons}><strong>Season: </strong></label>
        <div className = {styled.inputContainer}>
            <input
              type="radio"
              name="season"
              checked={form.season === "Summer"}
              value="Summer"
              onChange={handleChange}
              className = {styled.inputSeason}
            ></input>
            <label className={styled.labelSeason}>
              Summer
            </label>
            </div>
            <div className = {styled.inputContainer}>
                      <input
              type="radio"
              name="season"
              checked={form.season === "Autumn"}
              value="Autumn"
              onChange={handleChange}
              className = {styled.inputSeason}
            ></input>
            <label className={styled.labelSeason}>
              Autumn
            </label>
            </div>
            <div className = {styled.inputContainer}>
            <input
              type="radio"
              name="season"
              checked={form.season === "Winter"}
              value="Winter"
              onChange={handleChange}
              className = {styled.inputSeason}
            ></input>
            <label className={styled.labelSeason}>
              Winter
            </label>
            </div>
            <div className = {styled.inputContainer}>
            <input
              type="radio"
              name="season"
              checked={form.season === "Spring"}
              value="Spring"
              onChange={handleChange}
              className = {styled.inputSeason}
            ></input>
            
            <label className={styled.labelSeason}>
              Spring
            </label>
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
        </div>
        <div className = {styled.buttons}>
        <button type = "button" className={styled.button} onClick={createActivity}>
          Create
        </button>
        <button className={styled.button} onClick={toHome}>
          Back
        </button>
        </div>
        {errors.name === "empty name" && (<p className = {styled.error}>- Name can not be null -</p>)}
        {errors.name === "invalid name" && (<p className = {styled.error}>- Invalid name -</p>)}
        {errors.difficulty && (<p className = {styled.error}>- Difficulty can not be null -</p>)}
        {errors.duration === "no duration" && (<p className = {styled.error}>- Duration can not be null -</p>)}
        {errors.duration === "invalid duration" && (<p className = {styled.error}>- Invalid duration -</p>)}
        {errors.season && (<p className = {styled.error}>- Season can not be null -</p>)}
        {errors.idCountries && (<p className = {styled.error}>- Add at least one country -</p>)}
      </form>
    </div>
  );
}
