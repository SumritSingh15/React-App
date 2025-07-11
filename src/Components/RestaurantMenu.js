import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_Api } from "../utils/constants";

 const RestaurantMenu = ()=>{

    const [ResInfo,SetResInfo] = useState(null);
    const {resId} = useParams();
   
    useEffect(()=>{
        fetchMenu();
    },[])

const fetchMenu = async ()=>{
                const RestaurantData = await fetch(Menu_Api + resId)
  const RawData = await RestaurantData.json();
  
  SetResInfo(RawData)
  

 
};

if (!ResInfo){ return <Shimmer/>};

  const {name,cuisines,costForTwoMessage} = ResInfo?.data?.cards[2]?.card?.card?.info;


const {itemCards} = ResInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card;
  console.log(itemCards)



  
  return (
        <div className="menu">
       <h1>{name}</h1>
        <h2>Menu</h2>
        <h2>{cuisines}</h2>
         <h2>{costForTwoMessage}</h2>
        <ul>
        
        {itemCards.map(res=>{
         const item = res.card.info;
         
return(
  
<li  key = {item.id}>{item.name}{" : "}{(item.defaultPrice || item.price)/100}rupee</li>
   ) })}
          </ul>
          
        </div>
    )
 }
 export default RestaurantMenu;