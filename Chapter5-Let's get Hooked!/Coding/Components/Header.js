import FoodHubLogo from "../../../Assets/foodhub-logo.png";
import Home from "../../../Assets/home.png";
import About from "../../../Assets/about.png";
import Contact from "../../../Assets/contact.png";
import Cart from "../../../Assets/cart.png";


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
                    <img className="nav-icon" alt="Home" src={Home}></img>
                    <p className="nav-label">Home</p>
                </li>
                <li className="list-item">
                    <img className="nav-icon" src={About} alt="About"></img>
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
};

export default Header;
