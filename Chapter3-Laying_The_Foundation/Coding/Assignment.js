import React from "react";
import ReactDOM from "react-dom/client";
import "./Assignment.css";
import log from "./logo.png";
import userIcon from "./user1-icon.png";


// Coding Assignment :

// Q : Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
// const header = React.createElement("div", {
//     className: "title"
// }, [
//     React.createElement("h1", {
//         key: "head1"
//     }, "Heading 1"
//     ),
//     React.createElement("h2", {
//         key: "head2"
//     }, "Heading 2"
//     ),
//     React.createElement("h3", {
//         key: "head3"
//     }, "Heading 3")
// ]);


// Q : Create the same element using JSX
// const header = (
//     <div className="title" key="header">
//        <h1>Heading 1</h1> 
//        <h2>Heading 2</h2>
//        <h3>Heading 3</h3>
//     </div>
// );


// Q : Create a functional component of the same with JSX
// const Header = () => {
//     return (
//         <div className="title" key="headerComp">
//             <h1 key="h1">Heading 1</h1>
//             <h2 key="h2">Heading 2</h2>
//             <h3 key="h3">Heading 3</h3>
//         </div>
//     )
// }


// Q : Pass attribute into the tag in JSX
// const Header = () => {
//     return (
//         <div className="title" key="headerComp">
//             <h1 style={{ backgroundColor: "lightblue" }} key="h1">Heading 1 </h1>
//             <h2 style={{ backgroundColor: "DodgerBlue" }} key="h2">Heading 2</h2>
//             <h2 style={{ backgroundColor: "blueviolet" }} key="h3">Heading 3</h2>
//         </div>
//     )
// };


// Q : Composition of Component (Add a component inside another)
// const AnotherComponent = () => {
//     return <h5>Another Component </h5>
// }

// const Header = () => {
//     return (
//         <div className="title" key="headerComp">
//             <h1 style={{ backgroundColor: "lightblue" }} key="h1">Heading 1 </h1>
//             <h2 style={{ backgroundColor: "DodgerBlue" }} key="h2">Heading 2</h2>
//             <h2 style={{ backgroundColor: "blueviolet" }} key="h3">Heading 3</h2>
//             {/*Passing a Component inside a Component*/}
//             <AnotherComponent />
//             {/*Passing a component inside curly braces {invokeJsFunc} by invoking it because at the end Functional Component is => JS Function and this is how we call a normal JS function */}
//             {TitleElement()}
//         </div>
//     )
// };


// Q : `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.
// const element = <h4>This is a React Element</h4>; 

// const TitleElement = () => {
//     return <h4 style={{color:"red"}}>This is Functional Component</h4>
// };




/*
Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="left">
                    <img src="https://aistudio-cdata.s3.amazonaws.com/CHAT-WIDGET/9936a96c-2ccc-4291-8046-bf201a36e2c1/botImagestudio.netomi.com__405731a8-4694-4704-9e73-a6dfef8c2bed.png" alt="logo"></img>
                </div>
                <div className="center">
                    <input type="search" placeholder="Search..." name="search"></input>
                    <button type="submit">
                        {/* <i class="fa fa-search"></i> */}
                    </button>
                </div>
                <div className="right">
                    <img src={userIcon} alt="User Icon"></img>
                </div>
            </header>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);





/**
 * input {
    width : 350px;
    border: 2px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    background-color: white;
    padding: 10px 10px 10px 10px;
    border: 2px solid rgba(182, 161, 161, 0.61);
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
}

input[type=text]:focus {
    border: 3px solid rgba(0, 0, 0, 0.904);
  }

.center button {
    background-color: rgba(245, 245, 245, 0.973); 
    border: none;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 10px;
}

button:hover {
    background-color: #25a7048e;
    color: white;
}

 * 
 * 
 * 
 */