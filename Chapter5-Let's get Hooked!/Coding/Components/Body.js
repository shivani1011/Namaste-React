import MainImg from "../../../Assets/display-img.png";
import ContentImg from "../../../Assets/display-content-img.png";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./Constants";
import { useState } from "react";


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

const SearchBar = ({ updatedRestaurants, updatedSetRestaurants }) => {
    // console.log(updatedRestaurants); above we have done destructuring
    // const searchText = " KFC ";  normal Js variable
    const [searchText, setSearchText] = useState("");

    function filterData(searchText, updatedRestaurants) {
        const data = updatedRestaurants.filter((restaurant) => {
            return restaurant.name.toLowerCase().includes(searchText.toLowerCase());
        })
        return data;
    }

    return (

        <div className="search-bar-container">
            <input type="text" className="search-bar" placeholder=" Search for restaurants and food" value={searchText} onChange={(e) => { setSearchText(e.target.value);
             }}></input>
            <button className="search-bar-btn" onClick={() => {
                // Need to filter the data
                // Need to update the restaurant card as per filter data
                const filteredData = filterData(searchText, updatedRestaurants);
                updatedSetRestaurants(filteredData);
            }}
            >Discover</button>
        </div>
    )
}

const Body = () => {

    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
        <div className="body">
            <DisplaySection />
            <SearchBar updatedRestaurants={restaurants} updatedSetRestaurants={setRestaurants} />
            <div className="restaurant-list">
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    })
                }
            </div>

        </div>


    )

};

export default Body;