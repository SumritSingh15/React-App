import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

          const [btnnamereact,setbtnname] = useState("login")

     return (
          <div className="Header">
               <div className="logo-container">
                <img className="logo" src= {LOGO_URL} />
               </div>
               <div className="nav-items">
                    <ul>
                         <li><Link to="/Home">Home</Link></li>
                         <li><Link to="/About">About us</Link></li>
                         <li> <Link to="/contact">Contact us </Link>
                         </li>
                         <li>Cart</li>
                       <button className="login-btn" onClick={()=>{
                  btnnamereact === "login"?setbtnname("logout"):setbtnname("login");
 
                       }}>{btnnamereact}</button>
                    </ul>
               </div>
          </div>
     )
}
export default Header