import FoodHubLogo from "../../../Assets/foodhub-logo.png";
import FacebookLogo from "../../../Assets/facebookImg.png";
import InstaLogo from "../../../Assets/instaImg.png";
import TwitterLogo from "../../../Assets/twitterImg.png";


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
};

export default Footer;