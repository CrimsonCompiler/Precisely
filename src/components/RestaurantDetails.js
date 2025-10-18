import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

import "../../restaurant-details.css";
const RestaurantDetails = () => {
  const [menus, setMenus] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const { resId } = useParams();

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    try {
      const detailsResponse = await fetch(
        `https://foodpanda-api-restaurants-list.vercel.app/api/restaurant-details/${resId}`
      );
      const restaurantData = await detailsResponse.json();
      setMenus(restaurantData?.data?.data?.menus[0]?.menu_categories);
      setRestaurantName(restaurantData?.data?.data?.name);
      console.log(restaurantData);
    } catch (error) {
      console.error("Failed to fetch details:", error);
    }
  };

  return menus.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <h1 className="menu-title">{restaurantName}</h1>
      <div className="menu-container">
        {menus.map((category) => (
          <div key={category.id} className="menu-category">
            <h2 className="category-title">{category.name}</h2>
            <ul>
              {category.products.map((product) => (
                <li key={product.id} className="product-item">
                  <div className="product-card-horizontal small-card">
                    <div className="product-info">
                      <p className="product-name">{product.name}</p>
                      <p className="product-description">
                        {product.description.length > 70
                          ? product.description.slice(0, 70) + "..."
                          : product.description}
                      </p>
                      <p className="product-price">
                        ৳{product.product_variations[0].price}
                      </p>
                    </div>
                    <img
                      src={product?.file_path}
                      alt={product.name}
                      className="product-image small-image"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantDetails;
