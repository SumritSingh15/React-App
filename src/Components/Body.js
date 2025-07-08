import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
     // local state variable
     const [listofrestaurants, setRestrolist] = useState([]);
     const [filteredrestaurants, Setfilteredrestaurants] = useState([]);
     const [Searchtext, Setsearchtext] = useState("");


     useEffect(() => {
          fetchdata();
     }, [])
     const fetchdata = async () => {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7252316&lng=77.1200715&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

          const json = await data.json();

          setRestrolist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          Setfilteredrestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          
     };

     return listofrestaurants.length === 0 ? <Shimmer /> : (
          <div className="body">
               <div className="filter">
                    <div className="Search-box">
                         <input type="text" placeholder="Search" className="input-box" value={Searchtext} onChange={(e) => {
                              Setsearchtext(e.target.value)
                         }} />
                         <button className="Search-btn" onClick={() => {
                              const filteredlist = listofrestaurants.filter((res) => res.info.name.toLowerCase().includes(Searchtext.toLowerCase()));
                              console.log(filteredlist);

                              Setfilteredrestaurants(filteredlist);    // copy of listofresturants is filtered

                         }}>Search</button>

                    </div>
                    <button className="filter-btn" onClick={() => {
                         const filteredratedrestaurants = listofrestaurants.filter((res) => res.info.avgRating > 4.3);
                         setRestrolist(filteredratedrestaurants);          // rating filtering restuarants 
                    }}> Top Rated Restaurants </button>
               </div>
               <div className="Restaurants-Container">
                    {
                         filteredrestaurants.map((restaurant) => (
                              <RestaurantCard key={restaurant.info.id} resdata={restaurant} />      // iterate on every restuarants 
                         ))
                    }

               </div>
          </div>
     )
}
export default Body