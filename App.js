import React from "react";
import ReactDOM from "react-dom/client";


// Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
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

// AppLayout

const AppLayout = () => {
  return (
    <div id="app">
      <Header />
    </div>
  );
};

// React - Root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
