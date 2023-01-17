// ## Namaste React Live Course by Akshay Saini.
// # Chapter 03 - Laying The Foundation

/*
 *** Parcel Features -"Parcel is a Beast" ***
    
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
*/

// imported react & react-dom from node_module folder 
import React from "react";
import ReactDOM from "react-dom/client";


/*Create a Header Element like navbar using createElement  
React.createElement => This is an Object => Object is later converted into HTML code which is put on HTML(DOM) */
const container = React.createElement("div",
    {
        className: "container",
        key: "parentdiv",
    },
    [React.createElement("h1",
        { id: "title", key: "h1" },
        "Heading1"
    ),
    React.createElement("ul",
        {
            key: "ul"
        },
        [React.createElement("li",
            { key: "Home" },
            "Home"
        ),
        React.createElement("li",
            { key: "About Us" },
            "About Us")
        ]
    )]);


/* Using JSX : JSX is HTML like syntax.
JSX => Babel understands JSX which converts => React.createElement(React Element) => Object => HTML(DOM)*/
const heading = <h2 id="title" key="h2" >Heading2</h2>
console.log(heading);


/* Components => 1) Functional Component 2) Class Component
Functional Component => JS functions, which returns some piece of JSX.

// 1. Way of writing code : */
const HeaderComp = () => {
    return (
        <h1>Welcome to Namaste React</h1>
    )
}


// 2. Way of writing code : some cool developers also write code like this 

/* How to use my React Elements or Components inside components ? 
> I will use my React Element inside component like - {reactElement}
>I will use my component inside component(component composition) like - <functionComp/> 
"or" 
We can also write our code like - {functionComp()} ? Why, because at the end of the day this a normal JS function and we call our function like this only. 
*/
const HeaderComp2 = () => (
    <div>
        {container}
        {HeaderComp()}
        <HeaderComp/>
        <h2>Welcome to Namaste React again!</h2>
        <h2>Welcome to Namaste React again!</h2>
    </div>
)


// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));


/*Passing a react element inside root : root.render(container);
syntax for rendering your functional component : root.render(<HeaderComp/>); */
root.render(<HeaderComp2/>);