import "./header.css";
import {Link} from "react-router-dom";
export default function Header (){
    return(
        <section class="sectionMain">
            <div class="header" >
                <div>
                    <ul class= "ulNav">
                    <li class="linav"> Envios <Link to= "/"></Link></li> 
                    <li class="linav"> Redes Sociales <Link to= "/"></Link></li> 
                    </ul>
                </div>
            </div>
            <div class="header">
            <li class="h1title"> WE ARE <br/> BROTHERS <Link to= "/"></Link></li> 
                <div class="header">
                    <ul class="ulNav">
                    <li class="linav"> Iniciar Sesion <Link to= "/"></Link></li> 
                    <li class="linav"> Carrito <Link to= "/cart"></Link></li> 

                    </ul>
                </div>
            </div>    
        </section>   
    )
}






