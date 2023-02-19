import React from "react";
import ReactDOM from "react-dom/client";
import FoodHubLogo from "../../assests/Foodhub-logo.png";
import HomeLogo from "../../assests/Home-Icon.png";
import AboutUs from "../../assests/About.png";
import Contact from "../../assests/Contact.png";
import Cart from "../../assests/Cart.png";
import MainImg from "../../assests/Main-Img.png";
import ContentImg from "../../assests/display-content-img.png";
import FacebookLogo from "../../assests/facebookImg.png";
import InstaLogo from "../../assests/instaImg.png";
import TwitterLogo from "../../assests/twitterImg.png";

/** FoodHub :
 *    >Header
 *        - Logo(left side)
 *        - Nav items(right side)  
 *        - Cart
 *        - SignIn
 *    >Body
 *        - Search Bar
 *        - Restrauntlist-List
 *        - Restraunt-Card(Many Cards)
 *             - Images
 *             - Name
 *                  - Small description
 *             - Rating
 *             - Delivery Distance
 *             - Cusinies
 *   >Footer
 *        - Links
 *        - Copyright
 *
 *   
 */
const Logo = () => (
  <a href="/">
    <img className="logo" src={FoodHubLogo} alt="FoodHub-Logo"></img>
  </a>
);

const NavItems = () => {
  return (
    <div className="nav-items">
      <ul>
        <li className="list-item">
          <img className="nav-icon" alt="Home" src={HomeLogo}></img>
          <p className="nav-label">Home</p>
        </li>
        <li className="list-item">
          <img className="nav-icon" src={AboutUs} alt="About"></img>
          <p className="nav-label">About</p>
        </li>
        <li className="list-item">
          <img className="nav-icon" src={Contact} alt="Contact"></img>
          <p className="nav-label">Contact</p>
        </li>
        <li className="list-item">
          <img className="nav-icon" src={Cart} alt="Cart"></img>
          <p className="nav-label">Cart</p>
        </li>
      </ul>
    </div>
  )
}

const SignInSignUp = () => (
  <div className="sign-in-sign-up">
    <button className="sign-in">Sign In</button>
    <button className="sign-up">Sign Up</button>
  </div>
)
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavItems />
      <SignInSignUp />
    </div>
  )
}

const DisplayContent = () => {
  return (
    <div className="display-content">
      <div className="display-content-wrapper">
        <p className="display-content-info">Fastest
          <img className="display-content-img" src={ContentImg} alt="content img"></img>
          <span className="display-content-highlighter"> Delivery & </span>
          Easy
          <span className="display-content-highlighter"> Pickup </span>
        </p>
      </div>
    </div>
  )
};

const DisplayImg = () => (
  <img className="header-img" src={MainImg} alt="Header-Img"></img>
);

const DisplaySection = () => {
  return (
    <div className="body-first">
      <DisplayContent />
      <DisplayImg />
    </div>
  )
};

// I will make my card data dynamic 
const restaurantList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "424004",
      "name": "KFC",
      "uuid": "ca99fdc2-8ad5-4111-8587-d152670d6f88",
      "city": "4",
      "area": "Najafgarh",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "tags": [

      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 1.2999999523162842,
      "slugs": {
        "restaurant": "kfc-najafgarh-najafgarh",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "KFC Najafgarh, Plot No-C-9, Ground Floor ,Old Roshanpura ,Najafgarh",
      "locality": "New Roshanpura",
      "parentId": 547,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5899592~p=1~eid=00000186-1c82-2e9c-08e6-b9b6004e0116",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "1.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "424004",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.8",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "438436",
      "name": "Burger King",
      "uuid": "26f5bb8b-15f3-40fa-b16d-25cc67b5e653",
      "city": "4",
      "area": "Najafgarh",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "sxuryuhftgahjnrcnidi",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "tags": [

      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 0.30000001192092896,
      "slugs": {
        "restaurant": "burger-king-najafgarh-najafgarh",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "554 Ground Floor, Shivaji Marg,Tuda Mandi,Najafgarh Main Road,NAJAFGARH,South West , Delhi-110043",
      "locality": "Shivaji Marg",
      "parentId": 166,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "Get every item under 129",
        "shortDescriptionList": [
          {
            "meta": "Get every item under 129",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Get every item under 129",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "",
        "shortDescriptionList": [
          {
            "meta": "",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Get every item under 129",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "438436",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 0.30000001192092896,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "634471",
      "name": "Chaayos Chai+Snacks=Relax",
      "uuid": "54d462d7-22d1-42a6-acd6-cb9a7aee3f04",
      "city": "4",
      "area": "Dwarka",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "bdebfd404d1b15acf064275279aafb7d",
      "cuisines": [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets"
      ],
      "tags": [

      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "slaString": "31 MINS",
      "lastMileTravel": 4.400000095367432,
      "slugs": {
        "restaurant": "chaayos-chaisnacksrelax-uttam-nagar-dwarka",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Unit No. 7, Ground Floor, Vipin Garden, Pillar No. 800, Uttam Nagar, DWARKA, South West , Delhi-110059",
      "locality": "Sector 16",
      "parentId": 281782,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5890497~p=16~eid=00000186-2042-7a16-0c4c-898100bb104e",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "4.4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "634471",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 4.400000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.4",
      "totalRatings": 20,
      "new": true
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "24168",
      "name": "Domino's Pizza",
      "uuid": "8d2156e8-e402-4a5a-bd42-429f3c1f0183",
      "city": "4",
      "area": "Najafgarh",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "hpkaobol1cnxxioq9hbf",
      "cuisines": [
        "Pizzas"
      ],
      "tags": [

      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 0,
      "slugs": {
        "restaurant": "dominos-pizza-east-patel-nagar-metronew-delhi-karol-bagh",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Ground And First Floor Plot C-24/7 Roshanpurac Block Najafgarh New Delhi 110043",
      "locality": "New Roshanpura",
      "parentId": 2456,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": true,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "hasSurge": false,
      "sla": {
        "restaurantId": "24168",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 0,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "36694",
      "name": "Sargam Sweets & Restaurant",
      "uuid": "17e6ee59-7045-47a1-b902-66c2b1f8546a",
      "city": "4",
      "area": "Uttam Nagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "qetsckyabfqyq3qz4opm",
      "cuisines": [
        "Sweets",
        "Snacks"
      ],
      "tags": [

      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 39,
      "minDeliveryTime": 39,
      "maxDeliveryTime": 39,
      "slaString": "39 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "sargam-sweets-uttam-nagar-uttam-nagar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "A 11, Mohan Garden, Near Metro Pillar 753, Peepal Wala Road, Uttam Nagar, New Delhi",
      "locality": "Pipal Wala Road",
      "parentId": 16038,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5400,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5400",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5813723~p=4~eid=00000186-1c82-2e9c-08e6-b9b7004e0472",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "36694",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.7",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "369728",
      "name": "Pizza Wings",
      "uuid": "fab32373-dab4-4393-aea4-038e047fc5ee",
      "city": "4",
      "area": "Najafgarh",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "a46a6aa00709f771fabb45c864a81b5e",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian"
      ],
      "tags": [

      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 1.2999999523162842,
      "slugs": {
        "restaurant": "pizza-wings-najafgarh-najafgarh",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Plot No-8, Block-C, Old Roshan Pura Extn,  Najafgarh, New Delhi-110043, NAJAFGARH, South  West , Delhi-110043",
      "locality": "New Roshanpura",
      "parentId": 159048,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "1.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "369728",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "109514",
      "name": "Bunny's Bite N Sip",
      "uuid": "8ca98735-27db-4299-8184-e03b2d25e547",
      "city": "4",
      "area": "Najafgarh",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "eoluuxn2xunxw29rcbpn",
      "cuisines": [
        "Chinese",
        "North Indian"
      ],
      "tags": [

      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 1.100000023841858,
      "slugs": {
        "restaurant": "bunnys-bite-n-sip-najafgarh-test-siddardha",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "1631, Opposite Canara Bank, Najafgarh, New Delhi",
      "locality": "Todarmal Colony",
      "parentId": 15497,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "1.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "109514",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 1.100000023841858,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.5",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "111839",
      "name": "Pizza Hut",
      "uuid": "40f4b586-6bee-4864-ad17-9d81b49cd674",
      "city": "4",
      "area": "Najafgarh",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "hz56lgshxqwrmd45tm4c",
      "cuisines": [
        "Pizzas"
      ],
      "tags": [

      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 1.2999999523162842,
      "slugs": {
        "restaurant": "pizza-hut-old-roshanpur-extention-najafgarh",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "PIZZA HUT GF, PLOT NO.-25 , KHASRA NO.503 , OLD RASHANPURA EXTN. BLOCK -B,NAJAFGARGH NEW DELHI , NAJAFGARGH SOUTH WEST DELHI 110020",
      "locality": "Old Roshanpur Extention",
      "parentId": 721,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "1.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "111839",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "389123",
      "name": "AGGARWAL SWEET CORNER",
      "uuid": "4618d9ec-95b6-4bf3-9a77-ebbba23bd85b",
      "city": "4",
      "area": "Najafgarh",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "tosxrkd68wadnv86z1di",
      "cuisines": [
        "Sweets",
        "South Indian",
        "Bakery",
        "Desserts"
      ],
      "tags": [

      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 20,
      "slaString": "20 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "aggarwal-sweet-corner-najafgarh-najafgarh",
        "city": "delhi"
      },
      "cityState": "4",
      "address": " Aggarwal Sweet Corner ,Tuda Mandi Chowk ,Najafgarh, near Reliance Smart ",
      "locality": "Kakrola Road",
      "parentId": 9093,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "Free Pastry",
        "shortDescriptionList": [
          {
            "meta": "Free Pastry on orders above ₹299",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free Pastry on orders above ₹299",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "",
        "shortDescriptionList": [
          {
            "meta": "Free Pastry",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free Pastry on orders above ₹299",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "389123",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "158018",
      "name": "STR - Southern Tiffin Room",
      "uuid": "b8ba402a-e900-451e-839f-1e44d5ac9afb",
      "city": "4",
      "area": "Dwarka",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "cisq0q3c9fnbvexiufmr",
      "cuisines": [
        "South Indian",
        "Andhra",
        "Biryani"
      ],
      "tags": [

      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 44,
      "minDeliveryTime": 44,
      "maxDeliveryTime": 44,
      "slaString": "44 MINS",
      "lastMileTravel": 7.5,
      "slugs": {
        "restaurant": "str-southern-tiffin-room-dwarka",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Plot No G 224, Main Raja Puri Road, Vishwas Park, Bhind lO Petrol Pump, Dwarka Sector 3 DADA DEV TOWER",
      "locality": "Sector 3",
      "parentId": 15292,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "FLAT125 off",
        "shortDescriptionList": [
          {
            "meta": "FLAT125 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FLAT125 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FLAT125 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 6900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 6900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "6900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5813789~p=10~eid=00000186-1c82-2e9c-08e6-b9b9004e0a7b",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "7.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "158018",
        "deliveryTime": 44,
        "minDeliveryTime": 44,
        "maxDeliveryTime": 44,
        "lastMileTravel": 7.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "170525",
      "name": "Punjabi Zaika",
      "uuid": "678c6e16-e348-409e-84d4-d27ab58483a8",
      "city": "4",
      "area": "Najafgarh",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "xcqrhcz2kl1auzlvyiaq",
      "cuisines": [
        "Chinese",
        "North Indian"
      ],
      "tags": [

      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "slaString": "25 MINS",
      "lastMileTravel": 0.30000001192092896,
      "slugs": {
        "restaurant": "punjabi-zaika-laxmi-garden-najafgarh",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "A-11, Laxmi Garden, Najafgarh, New Delhi,110043",
      "locality": "Dharam Pura",
      "parentId": 2873,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "170525",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 0.30000001192092896,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "110256",
      "name": "Moti Mahal Delux Tandoori Trail",
      "uuid": "7813e521-2a71-4dd2-a7c4-c9abb0e7cd42",
      "city": "4",
      "area": "Najafgarh",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "lb08b5mionfvl2nvojeb",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese"
      ],
      "tags": [

      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 1.100000023841858,
      "slugs": {
        "restaurant": "moti-mahal-delux-tandoori-trail-thana-road-najafgarh",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "1644-C, Thana Road, Najafgarh, NAJAFGARH, South West , Delhi-110043",
      "locality": "Thana Road",
      "parentId": 387765,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5832922~p=1~eid=00000186-1d35-b4c0-0afa-d8c100ad0127",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "1.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "110256",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 1.100000023841858,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.6",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "594069",
      "name": "DCD FOODS",
      "uuid": "67703061-8381-406e-9703-dec5c2230abb",
      "city": "4",
      "area": "Najafgarh",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "gv11roo4ixwrgehaoxg6",
      "cuisines": [
        "Chinese",
        "Fast Food",
        "Pizzas",
        "Burgers",
        "Beverages"
      ],
      "tags": [

      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "slaString": "31 MINS",
      "lastMileTravel": 2,
      "slugs": {
        "restaurant": "dcd-foods-najafgarh-najafgarh",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "JX6F+8VX, Dauralla Road, Nanda Enclave, Block B, New Gopal Nagar, Najafgarh, Delhi, 110043, India",
      "locality": "B Block",
      "parentId": 355305,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5791457~p=7~eid=00000186-1d3f-1efb-0b06-c64800230719",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "594069",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 2,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.4",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "348711",
      "name": "Sardarji Malai Chaap Wale",
      "uuid": "305cdcae-b133-445e-a906-ff6c3b7f37cb",
      "city": "4",
      "area": "Najafgarh",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "tw7hlfp9q5esqpnhxu8c",
      "cuisines": [
        "Chinese",
        "North Indian"
      ],
      "tags": [

      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 20,
      "slaString": "20 MINS",
      "lastMileTravel": 1.5,
      "slugs": {
        "restaurant": "sardarji-malai-chaap-wale-najafgarh-najafgarh",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Plot no.RZ-8 KH no.298 Sudan  garden,main Gurgaon road Najafgarh  New Delhi 110043, PUL PEHLAD, KALKAJI,  South East, Delhi-110043",
      "locality": "Gurgaon Road",
      "parentId": 2007,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "1.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "348711",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "lastMileTravel": 1.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.4",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "450411",
      "name": "WarmOven Cake & Desserts",
      "uuid": "e930575d-9ba5-4fd6-966a-31ceb02e8f64",
      "city": "4",
      "area": "Madhu Vihar",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "e94a483b8201ed56bda72dc81e3f7090",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Ice Cream",
        "Beverages"
      ],
      "tags": [

      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 44,
      "minDeliveryTime": 44,
      "maxDeliveryTime": 44,
      "slaString": "44 MINS",
      "lastMileTravel": 9.300000190734863,
      "slugs": {
        "restaurant": "warmoven-cake-&-desserts-rani-bagh-rani-bagh",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "C-184, Old Number 98, KH 120/1/10&9, Madhu Vihar G/F, Village Palam, Uttam Nagar,New Delhi, PATEL NAGAR, West , Delhi, 110059",
      "locality": "Palam Village",
      "parentId": 9696,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 9000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 9000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "9000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5833374~p=16~eid=00000186-2050-fe51-0c71-401400231056",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "9.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "450411",
        "deliveryTime": 44,
        "minDeliveryTime": 44,
        "maxDeliveryTime": 44,
        "lastMileTravel": 9.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.4",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  }

]

const RestaurantCard = ({ restaurant }) => {

  return (
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
        restaurant.data?.cloudinaryImageId}></img>
      <h2>{restaurant.data?.name}</h2>
      <h3>{restaurant.data?.cuisines.join(", ")}</h3>
      <h4>{restaurant.data?.avgRating}</h4>
      <h5>{restaurant.data?.slaString}</h5>







    </div>
  )

}

const Body = () => {
  return (
    <div className="body">
      <DisplaySection />
      <div className="restaurant-body">
        <RestaurantCard restaurant={restaurantList[0]} />
        <RestaurantCard restaurant={restaurantList[1]} />
        <RestaurantCard restaurant={restaurantList[2]} />
        <RestaurantCard restaurant={restaurantList[3]} />
        <RestaurantCard restaurant={restaurantList[4]} />
        <RestaurantCard restaurant={restaurantList[5]} />
        <RestaurantCard restaurant={restaurantList[6]} />
        <RestaurantCard restaurant={restaurantList[7]} />
        <RestaurantCard restaurant={restaurantList[8]} />
        <RestaurantCard restaurant={restaurantList[9]} />
        <RestaurantCard restaurant={restaurantList[10]} />
        <RestaurantCard restaurant={restaurantList[11]} />
        <RestaurantCard restaurant={restaurantList[12]} />
        <RestaurantCard restaurant={restaurantList[13]} />
        <RestaurantCard restaurant={restaurantList[14]} />


      </div>

    </div>


  )

};

const DisplayFooter = () => {
  return (
    <div className="display-footer">
      <img src={FoodHubLogo} alt="FoodHub" className="display-footer-logo"></img>
      <div className="display-footer-links">
        <ul className="display-footer-links-list">
          <li>About Us</li>
          <li>Delivery</li>
          <li>Help & Support</li>
          <li>T & C</li>
        </ul>
      </div>
      <div className="display-footer-img">
        <img src={FacebookLogo} alt="facebook-icon"></img>
        <img src={InstaLogo} alt="insta-icon"></img>
        <img src={TwitterLogo} alt="twitter-icon"></img>
      </div>
    </div>
  )
}
const Footer = () => {
  return (
    <DisplayFooter />
  )
}

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout />);