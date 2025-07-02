import { CDN_URL } from "../utils/constants"
const RestaurantCard = (props) => {
     const { resdata } = props
     const {
          cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resdata?.info

     return (
          <div className="Restro-cards" style={{ backgroundColor: "#f0f0f0" }}>
               <img className="restro-image" alt="restro-image" src={ CDN_URL + cloudinaryImageId} />
               <h3>{name}</h3>
               <h3>{cuisines.join(",")}</h3>
               <h3>{avgRating}</h3>
               <h3>{costForTwo}</h3>
               <h3>{deliveryTime}minutes</h3>
          </div>
     )
}
export default RestaurantCard;