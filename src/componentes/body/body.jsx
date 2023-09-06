import "./body.css";
import {Link} from "react-router-dom";
import Foto from '../../multimedia/image.png'
export default function body(){
    return(
        <>
        <div>
            <Link to= "/" class="boton" target="blank"  VER TIENDA></Link>
        </div>

        <div class="Ropa Oversise Inicio">
            <img src= {Foto}/>
            <p class="Texto">
                Ropa Oversize
            </p>
        </div> 
        </>
    )
}