import "./header.css";
import {Link} from "react-router-dom";
export default function Header (){
    return(
        <section class="sectionMain">
            <div class="header" >
                <div>
                    <ul class= "ulNav">
                        <li class="linav"><Link to= "/Envios"> Envios </Link></li> 
                        <li class="linav"><Link to= "/Redes"> Redes Sociales </Link></li> 
                    </ul>
                </div>
            </div>
            <div class="header">
                <h1 class="h1title"><Link to= "/"> WE ARE <br/> BROTHERS </Link></h1>
                <div class="header">
                    <ul class="ulNav">
                        <li class="linav"><Link to= "/Login"> Iniciar Sesion </Link></li> 
                        <li class="linav"><Link to= "/cart"> Carrito </Link></li> 
                    </ul>
                </div>
            </div>    
        </section>   
    )
}






