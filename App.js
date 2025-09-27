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
const RestaurantCard = (props) => {
  const{resData} = props;
  const{deliveryTime} = resData.info.sla;
  const { name, cuisines, costForTwo, cloudinaryImageId} = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-card-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt=""
      />
      <div className="res-card-content">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>${costForTwo / 100}</p>
        <p>{deliveryTime} minutes</p>
      </div>
    </div>
  );
};

// BIG LIST OF DATA

const resList = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "334475",
      name: "KFC",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "40000",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 3.8,
      parentId: "547",
      avgRatingString: "3.8",
      totalRatingsString: "500+ ratings",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "3.5 km",
        iconType: "EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "FREE DELIVERY",
        subHeader: "",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-btm-layout-btm",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "229",
      name: "Meghana Foods",
      cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
      locality: "5th Block",
      areaName: "Koramangala",
      costForTwo: "50000",
      cuisines: [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood",
      ],
      avgRating: 4.4,
      parentId: "635",
      avgRatingString: "4.4",
      totalRatingsString: "1000+ ratings",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.399999976158142,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "1.3 km",
        iconType: "EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "FREE DELIVERY",
        subHeader: "",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/meghana-foods-5th-block-koramangala",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "121603",
      name: "Kannur Food Point",
      cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
      locality: "SG Palya",
      areaName: "Tavarekere",
      costForTwo: "30000",
      cuisines: ["Kerala", "Chinese"],
      avgRating: 3.8,
      parentId: "20974",
      avgRatingString: "3.8",
      totalRatingsString: "5000+ ratings",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3.0,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "3 km",
        iconType: "EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "FREE DELIVERY",
        subHeader: "",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kannur-food-point-btm",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "307050",
      name: "Call Me Chow",
      cloudinaryImageId: "soegobqsiqvhmkfvnnkj",
      locality: "8th Block",
      areaName: "Koramangala",
      costForTwo: "40000",
      cuisines: ["Chinese", "Pan-Asian"],
      avgRating: 4.3,
      parentId: "18560",
      avgRatingString: "4.3",
      totalRatingsString: "1000+ ratings",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "1.5 km",
        iconType: "EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "Use SPECIALS",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/call-me-chow-koramangala-koramangala",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "337335",
      name: "Kannur food kitchen",
      cloudinaryImageId: "a27weqanhnszqiuzsoik",
      locality: "1st  Stage",
      areaName: "BTM Layout",
      costForTwo: "20000",
      cuisines: ["Kerala", "Biryani", "Beverages"],
      avgRating: 3.8,
      parentId: "114756",
      avgRatingString: "3.8",
      totalRatingsString: "1000+ ratings",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "2.5 km",
        iconType: "EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "FREE DELIVERY",
        subHeader: "",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kannur-food-kitchen-btm-btm",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "492159",
      name: "Roti Wala",
      cloudinaryImageId: "f99d05e4f7884caa8646c70b0b752c7a",
      locality: "5th Block",
      areaName: "Koramangala",
      costForTwo: "20000",
      cuisines: ["Home Food", "North Indian", "Thalis"],
      avgRating: 4.1,
      parentId: "171678",
      avgRatingString: "4.1",
      totalRatingsString: "100+ ratings",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 1.0,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "1 km",
        iconType: "EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "Use TRYNEW",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/new-roti-wala-koramangala-koramangala",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "65797",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId: "r4ufflqojich0r29efvc",
      locality: "KHB Colony",
      areaName: "Koramangala",
      costForTwo: "30000",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
      parentId: "371281",
      avgRatingString: "4.3",
      totalRatingsString: "1000+ ratings",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.2999999523162842,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "1.2 km",
        iconType: "EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "Use SPECIALS",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/leon-grill-koramangala-koramangala",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "425",
      name: "Hotel Empire",
      cloudinaryImageId: "un4omn7rcunkmlw6vikr",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "45000",
      cuisines: ["North Indian", "Kebabs", "Biryani"],
      avgRating: 4.1,
      parentId: "475",
      avgRatingString: "4.1",
      totalRatingsString: "1000+ ratings",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 1.2999999523162842,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "1.2 km",
        iconType: "EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "Use TRYNEW",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-empire-5th-block-koramangala",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "428",
      name: "Biryani Pot",
      cloudinaryImageId: "mdipoyzfzsa7n7igskht",
      locality: "Maruti Nagar",
      areaName: "Btm Layout",
      costForTwo: "50000",
      cuisines: ["North Indian", "Biryani"],
      avgRating: 3.8,
      parentId: "21798",
      avgRatingString: "3.8",
      totalRatingsString: "1000+ ratings",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.899999976158142,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "Use TRYNEW",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/biryani-pot-madiwala-junction-btm",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "306639",
      name: "The Coorg Food Co.",
      cloudinaryImageId: "ej90ytd5x7ffyl6ii7cn",
      locality: "6th Block",
      areaName: "Koramangala",
      costForTwo: "75000",
      cuisines: ["South Indian"],
      avgRating: 4.3,
      parentId: "207214",
      avgRatingString: "4.3",
      totalRatingsString: "100+ ratings",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 0.800000011920929,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "0.8 km",
        iconType: "EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "FREE DELIVERY",
        subHeader: "",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-coorg-food-co.-koramangala-koramangala",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "63957",
      name: "Madeena Hotel",
      cloudinaryImageId: "yc0asfa2j9elggstyjg4",
      locality: "5th Block",
      areaName: "Koramangala",
      costForTwo: "25000",
      cuisines: ["Biryani", "Mughlai", "Indian", "Beverages"],
      avgRating: 4.1,
      parentId: "12517",
      avgRatingString: "4.1",
      totalRatingsString: "1000+ ratings",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.399999976158142,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "1.3 km",
        iconType: "EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "FREE DELIVERY",
        subHeader: "",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/madeena-hotel-koramangala-koramangala",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "71298",
      name: "Bengali Fun Foods",
      cloudinaryImageId: "ub9ng9le0lf7opxxbxey",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "30000",
      cuisines: ["North Indian"],
      avgRating: 4.3,
      parentId: "2600",
      avgRatingString: "4.3",
      totalRatingsString: "500+ ratings",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.700000047683716,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "2.7 km",
        iconType: "EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "Use TRYNEW",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/bengali-fun-foods-btm-btm",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "59593",
      name: "Al Daaz",
      cloudinaryImageId: "rxsvhvcdip9dbfdijzk9",
      locality: "HSR",
      areaName: "Hsr Layout",
      costForTwo: "40000",
      cuisines: [
        "American",
        "Arabian",
        "Chinese",
        "Desserts",
        "Mughlai",
        "North Indian",
      ],
      avgRating: 4.3,
      parentId: "21640",
      avgRatingString: "4.3",
      totalRatingsString: "100+ ratings",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 4.400000095367432,
        serviceability: "SERVICEABLE",
        slaString: "40 mins",
        lastMileTravelString: "4.4 km",
        iconType: "EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "FREE DELIVERY",
        subHeader: "",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/al-daaz-hsr-hsr",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "5934",
      name: "Burger King",
      cloudinaryImageId: "jpohkfkofao0hxez7vdh",
      locality: "7th Block",
      areaName: "Koramangala",
      costForTwo: "35000",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "1000+ ratings",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 1.399999976158142,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "1.3 km",
        iconType: "EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT 129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-koramangala",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "365010",
      name: "Hotel Salam",
      cloudinaryImageId: "hgdmw8uwgewhiewwovjh",
      locality: "M G Palya",
      areaName: "Bommanahalli",
      costForTwo: "25000",
      cuisines: ["Biryani", "Tandoor", "Arabian", "Indian", "Beverages"],
      avgRating: 3.9,
      parentId: "101873",
      avgRatingString: "3.9",
      totalRatingsString: "500+ ratings",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.699999809265137,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "4.6 km",
        iconType: "EMPTY",
      },
      availability: {
        nextCloseTime: "2025-09-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "FLAT100 OFF",
        subHeader: "Use FLATDEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-salam-hsr-hsr",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
  },
];

// END OF BIG LIST DATA

// Body
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
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
