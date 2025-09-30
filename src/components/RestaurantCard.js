import { CDN_URL } from "../utils/constants";

// Restaurant Card
const RestaurantCard = (props) => {
  const{resData} = props;
  const{deliveryTime} = resData.info.sla;
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating} = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-card-image"
        src={
           CDN_URL +
          cloudinaryImageId
        }
        alt=""
      />
      <div className="res-card-content">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>${costForTwo / 100} for two</p>
        <p>{deliveryTime} minutes</p>
        <p>{avgRating} rating</p>
      </div>
    </div>
  );
};

export default RestaurantCard;