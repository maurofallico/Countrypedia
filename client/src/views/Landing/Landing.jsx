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
      <h1 className = {styled.title}>Welcome to Countrypedia</h1>
      <div>
        <p className = {styled.texto}><i>"Adventure awaits, go find it"</i></p>
        <button className = {styled.button} onClick={() => enter()}>
          Click to Enter
        </button>
        <div className={styled.footContainer}>
        <p className = {styled.foot}><i>For a better experience, we recommend using a desktop device</i></p>
        </div>
      </div>
    </div>
    )
}
