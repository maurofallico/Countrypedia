import styled from "./Detail.module.css"
import { Link } from "react-router-dom";

export default function Detail(){

    return(
        <div>
            <p className = {styled.texto}>ESTO ES EL DETAIL</p>
            <Link className={styled.volver} to = '/home'>VOLVER</Link>
        </div>
    )
}