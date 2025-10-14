import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const [menus, setMenus] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const detailsResponse = await fetch(
      `https://foodpanda-api-restaurants-list.vercel.app/api/restaurant-details/${resId}`
    );
    const restaurantData = await detailsResponse.json();
    setMenus(restaurantData?.data?.data?.menus[0]?.menu_categories);
  };

  return (
    <div>
      <h1>Restaurant Name</h1>
    </div>
  );
};

export default RestaurantDetails;
