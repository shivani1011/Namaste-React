import { IMG_CDN_URL } from "../Components/Constants";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating, slaString }) => {
    // console.log(props) : restaurant as object 
    return (
        <div className="card">
            <img src={IMG_CDN_URL +
                cloudinaryImageId}></img>
            <h3 className="card-name">{name}</h3>
            <h5 className="card-cuisines">{cuisines.join(", ")}</h5>
            <span>
                <h5> <i className="fa-solid fa-star"></i>
                    {avgRating}</h5>
                <h5>{slaString}</h5>
            </span>
        </div>
    )

};

export default RestaurantCard;
