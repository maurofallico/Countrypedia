import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Landing.css"
import styled from "./Landing.module.css"



export default function Landing(){

    const navigate = useNavigate()

    const enter = () =>{
    navigate('/home')
  }

  useEffect(() => {
    document.body.classList.add(styles.container);
  }, []);

    return(
        <div className = {styled.container} >
      <h1 className = {styled.title}>BIENVENIDO</h1>
      <div>
        <p className = {styled.texto}>Por favor haga click para ingresar</p>
        <button className = {styled.button} onClick={() => enter()}>
          INGRESAR
        </button>
      </div>
    </div>
    )
}
