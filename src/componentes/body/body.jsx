import "./body.css";
import Foto from '../../multimedia/image.png'
export default function body(){
    return(
        <>
        <div>
            <a class="boton" href="https://www.canva.com/projects" 
            target="_blank"> VER TIENDA</a>
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