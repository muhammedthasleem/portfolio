import design from "./nav.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLightbulb} from "@fortawesome/free-solid-svg-icons"





const Nav=()=>{
   

    return(
        <div id={design.nav}>
            
           <div className={design.head}>
            <h2>Muhammed Thasleem</h2>
           </div >
           <div className={design.list}>
            <ul>
          
                <li><a href="#firstPage">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><button ><FontAwesomeIcon icon={faLightbulb} /></button></li>
            </ul>
           </div>
            
        
        </div>
        
    )
    
}
export default Nav;