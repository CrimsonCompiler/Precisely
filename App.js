import React from "react";
import ReactDOM from "react-dom/client";

// Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://foodibd.com/_next/static/media/logo.c6a0f759.svg"
          alt="Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Restaurant Card
const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-card-image"
        src="https://imrs.foodibd.com/api/v1/image-resize?imageUrl=https%3A%2F%2Fs3.ap-southeast-1.amazonaws.com%2Fcdn.foodibd.com%2Frestaurant-service%2Fkacchi-bhai-app-cover-d84f-20250430060533161.jpg&width=400"
        alt=""
      />
      <div className="res-card-content">
        <h3>Kacchi Bhai - Gulshan 2</h3>
        <p>Biriyani, Puran Dhaka, Kacchi</p>
        <p>4.4 stars</p>
        <p>40 minutes</p>
      </div>
    </div>
  );
};

// Body
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

// AppLayout

const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  );
};

// React - Root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
