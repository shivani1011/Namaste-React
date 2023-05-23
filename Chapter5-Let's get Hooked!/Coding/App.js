import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

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
 
const AppLayout = () => {
    return (
        <>
            <Header />  {/* Logo, Navitems,
                  SignInSignUp*/}
            <Body />    {/* DisplaySection
                            -DisplayContent-DisplayImg 
                      RestaurantCard       
                  */}
            <Footer />  {/* Footer
                        -DisplayFooter */}
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout />);