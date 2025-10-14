import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredResturants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const DEFAULT_LAT = 23.777176;
  const DEFAULT_LONG = 90.399452;

  useEffect(() => {
    fetchData(DEFAULT_LAT, DEFAULT_LONG);
  }, []);

  const fetchData = async (lat, long) => {
    const response = await fetch(
      "https://foodpanda-api-restaurants-list.vercel.app/api/restaurants",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          latitude: lat,
          longitude: long,
        }),
      }
    );
    const data = await response.json();
    const fetchedRestaurants =
      data?.data?.rlp?.organic_listing?.views[0]?.items || [];

    console.log(fetchedRestaurants);

    setListOfRestaurant(fetchedRestaurants);
    setFilteredRestaurants(fetchedRestaurants);
  };

  if (listOfRestaurants.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        {/* Search Buttons */}
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              console.log(searchText);

              const filteredNames = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );

              if (!filteredNames) {
                setFilteredRestaurants(listOfRestaurants);
              }

              setFilteredRestaurants(filteredNames);

              if (filteredNames.length === 0) {
                return <h1>No restaurant found</h1>;
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (list) => list.rating > 4
            );

            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResturants.map((restaurant) => (
          <Link key={restaurant.id} to={`/restaurant-details/${restaurant.id}`}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
