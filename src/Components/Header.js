import { useState } from "react";
import {LOGO_URL} from "../utils/constants";

const Header = () => {

          const [btnnamereact,setbtnname] = useState("login")

     return (
          <div className="Header">
               <div className="logo-container">
                <img className="logo" src= {LOGO_URL} />
               </div>
               <div className="nav-items">
                    <ul>
                         <li>Home</li>
                         <li>About us</li>
                         <li>Contact us</li>
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