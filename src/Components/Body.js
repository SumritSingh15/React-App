import RestaurantCard from "./RestaurantCard";
import Restrolist from "../utils/mockdata";
import { useState } from "react";


const Body = () => {
    const [listofrestaurants,setRestrolist] = useState(Restrolist);
     return (
          <div className="body">
               <div className="filter">
               <button className="filter-btn" onClick={()=>{
                const filteredrestaurants = listofrestaurants.filter((res)=> res.info.avgRating > 4.3);
                setRestrolist(filteredrestaurants);
               }}> Top Rated Restaurants </button>
               </div>
               <div className="Restaurants-Container">
                    {
                        listofrestaurants.map((restaurant) => (
                              <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
                         ))
                    }

               </div>
          </div>
     )
}
export default Body