import styled from "./Form.module.css"
import { useNavigate } from "react-router-dom";

export default function Form () {

    const navigate = useNavigate()

    function toHome(){
        navigate('/home')
    }

    return (
        <div className = {styled.container}>
            <form className = {styled.form}>
            <p className = {styled.texto}>Create Activity</p>
            
            <label>Name: <input></input></label>
            
            <label>Difficulty: <input></input></label>
            <label>Duration: <input></input></label>
            <label>Season: <input></input></label>
            <label>Countries: <input></input></label>

            <button className = {styled.button} onClick={toHome}>BACK</button>
            </form>
        </div>
    )
}