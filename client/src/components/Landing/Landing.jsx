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
    // Aplicar los estilos de fondo al elemento body
    document.body.classList.add(styles.container);

    // Limpieza: remover los estilos al desmontar el componente
    return () => {
      document.body.classList.remove(styles.container);
    };
  }, []);

    return(
        <div className = {styled.container} >
      <h1 className = {styled.title}>This is the Landing Page</h1>
      <div>
        <button onClick={() => enter()}>
          INGRESAR
        </button>
      </div>
    </div>
    )
}
