import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

 const RestaurantMenu = ()=>{

    const [ResInfo,SetResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])

const fetchMenu = async ()=>{
                const RestaurantData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.744533&lng=77.2045498&restaurantId=1008411&catalog_qa=undefined&submitAction=ENTER")
  const RawData = await RestaurantData.json();
  
  SetResInfo(RawData)
  

 
};

if (!ResInfo){ return <Shimmer/>};

  const {name,cuisines,costForTwoMessage} = ResInfo?.data?.cards[2]?.card?.card?.info;
  

const {itemCards} = ResInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;

 

  
  return (
        <div className="menu">
       <h1>{name}</h1>
        <h2>Menu</h2>
        <h2>{cuisines}</h2>
         <h2>{costForTwoMessage}</h2>
        <ul>
        
        {itemCards.map(res=>{
         
         
return <li>{res.card.info.name}{" : "}{(res.card.info.defaultPrice/100)}rupee</li>
        })}
          </ul>
        </div>
    )
 }
 export default RestaurantMenu;