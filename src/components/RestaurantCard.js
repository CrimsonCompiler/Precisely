// Restaurant Card
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, rating, hero_listing_image, characteristics } = resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-card-image" src={hero_listing_image} alt="" />
      <div className="res-card-content">
        <h3>{name}</h3>
        <p>
          {characteristics.cuisines.map((cuisine) => cuisine.name).join(", ")}
        </p>{" "}
        <p>{rating} rating</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
