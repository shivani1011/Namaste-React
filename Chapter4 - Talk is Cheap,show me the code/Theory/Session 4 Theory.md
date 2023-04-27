## Namaste React Course by Akshay Saini
# Chapter 04 - Talk is Cheap, show me the code

## Q: Is `JSX` mandatory for React?
Ans: `JSX`(JavaScript XML) is simply a syntax extension of JavaScript.In React,`JSX` allows us to use javascript & its rich functionality coupled with HTML directly. JSX produces the react elements which are rendered into rich user interface.Each JSX element is just to make use of react easy & for calling React.createElement(type,props,child element) with less work. So,anything which is done with JSX can also be done with just plain javascript.
`JSX` is not mandatory but is used for writing better & clean code instead of writing code using `React.CreateElement`.
#### Example of `JSX`
```
const name = <h1>Shivani Tripathi</h1>;
```


## Q: Is `ES6` mandatory for React?
Ans: `ES6` stands for `ECMAScript 6`.
-  ECMAScript was created to standardize Javascript, & ES6 is the 6th version of ECMAScript, it was published in 2015, is also well known as ECMAScript 2015. 
-  `ES6` is not mandatory for `React` but is highly recommendable. The latest project created on React rely a lot on ES6. React uses ES6 and you should be familiar with some of the new features like : Classes, Arrow Functions, Variables(let & const).


## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
Ans: The differnce is stated below:
- `{TitleComponent}` : This value describes the `TitleComponent` as a javascript expression or a variable or react element.
- `<TitleComponent />` : This value represents a component that is basically returning some JSX value.
- `<TitleComponent></TitleComponent>` : `<TitleComponent />` & `<TitleComponent></TitleComponent>` are equivalent only when `<TitleComponent />` has no child components. 
- #### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```


## Q: How can I write `comments` in JSX?
Ans: JSX commments are written as follows :
- `{/* */}` : for single or multiline comments.
#### Example
```
{/* A JSX comment */}
{/* 
  Multi
  line
  JSX
  comment
*/}  
```


## Q: What is `<React.Fragment></React.Fragment>` and `<></>`?
Ans: `<React.Fragment></React.Fragment>`: It is a component exported by react library that allows you to wrap or group multiple elements without adding an extra node to the DOM.
#### Example
```
const columns = () => {
    return (
        <React.Fragment>
           <td>Hello</td>
           <td>World</td>
        </React.Fragment>
    )
};
```
- `<></>` : is the shorthand tag for `React.Fragment`. The only difference between them is that the shorthand version does not support the key attribute. It looks like empty tags:
#### Example
```
const columns = () => {
    return(
        <>
          <td>Hello</td>
          <td>World</td>
        </>
    )
};
```


## Q: What is `Reconciliation` in React?
Ans: The reconciliation process makes React work faster. `Reconciliation` is the process through which React updates the Browser DOM.
The important concept behind `working of the Reconciliation process` are :
- `Virtual DOM`
- `Diffing Algorithm`
1. `Virtual DOM` : react renders JSX components to the browser DOM, but keeps a copy of the actual DOM to itself.This copy is the Virtual DOM. The following action takes place in react :-
* React stores a copy of Browser DOM which is called Virtual DOM.
* When we make any change or add the data, React creates a new virtual DOM and compares it with previous one.
* Comparsion is done by `Diffing Algorithm`. The cool fact is all these comparisons take place in the memory and nothing is yet changed in the browser.
* After comparing, React goes ahead and creates a new virtual DOM having the changes.
* Then it updates the browser DOM with the least number of changes possible without rendering the entire DOM again.These changes the efficiency of an application tremendously.
* Suppose new data similar to previous one,Virtual DOM compares previous & new structure & sees that it has no change,so nothing gets rendered to the browser.

`How does this Virtual DOM compare itself to its previous version? `
This is where the `Diffing Algorithm` comes into the play.
* Two elements of different types will produce different trees.
* Breadth-First Search (BFS)is applied because if a node is found as changed,it will re-render the entire subtree hence Depth First Approach is not exactly optimal.
* When comparing two elements of same type, keep the underlying node as same and only update changes in attribute or styles.
* React uses optimizations so that minimal difference can be calculated in O(N) efficiently using this algorithm.


## Q: What is `React Fiber`?
Ans: React Fiber is a concept of ReactJs that is used to render a system faster, smoother and smarter.
The fiber reconciler,which became the default reconciler for React 16 & above, is a complete re-write of react's reconciliation algorithm to solve some long-standing issues in react.
Because fiber is asynchronous, React can:
- Pause,resume and restart rendering work on components as new updates come in.
- Reuse previously completed work & even it if not needed.
- Split work into chunks & prioritize tasks based on importance.


## Q: Why do we need `keys` in React?
Ans: In React,the "key" is a special attribute that helps identify which items in a list have changed,been updated, or been removed.
- It is used to give each element a stable identity so that react can efficiently update the UI when the data changes.
- React uses the key prop to keep track of the state of each element in the list, so that when the list is re-rendered due to changes in data,it can efficiently update only the elements that have changed,rather than re-rendering the entire list. This improves the performance of your react application. That's why we pass keys as props.
#### Example
```
const items = [{
    id: 1,
    name: "Item1"
    },
    {
        id: 2,
        name: "Item2"
    }
    ];

const itemList = items.map((item) => {
    <li key = {item.id.toString()}> {item.name} </li>
});
```


## Q: Can we use `index as keys` in React?
Ans: Yes, we can use the "index as keys", but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state.
keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.


## Q: What is `props in React`? Ways to.
Ans: The props, are type of object where the value of attributes of a tag is stored.The word "props" implies "properties" and its working functionality is quite similar to HTML attributes.
The data can be passed from one component to another component using these props, similar to how the arguments are passed in function. Inside the component, we can  add the attributes called props;however, we cannot change or modify props inside the component as they are immutable.
#### Example
```
function App() {
    return (
        <div classname = "App">
          <Display name = "Shivani" age ="23" />
        </div>
    )
}
```


## Q: What is `Config Driven UI`?
Ans: `Config Driven UI` is a software design approach where the user interface is generated dynamically based on a configuration file or data. 
- The configuration file or data. The configuration file contains information such as layout,components, and other UI related properties that determine the appearance & behavior of the user interface.
- In a config-driven UI, the UI components are created dynamically based on the configuration file.This approach allows for greater flexibility & customization of the UI without requiring changes to the underlying code.
- It also make it easier to maintain & update UI, as change can be made to the configuration file rather than the code.
- Config-driven UIs are commonly used in web applications & content management systems,where the UI needs to be adaptable to different use cases & content types.


## Q: Difference between `Virtual DOM` and `Real DOM`?
Ans: DOM stands for `Document Object Model`it is structural reperesentation of all nodes in an HTML document DOM represents the UI of your application and whenever the changes are made in the application, this DOM gets updated & the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.
- `Real DOM :`
The DOM represents the web page often called a document with a logical tree& each branch of the tree eds in a node & each node contains object programmers can modify the content of the document using scripting language like Js & changes & updates to the dom are fast because of its tree-like structure the updated element and its children have to be re-rendered to update the application UI so the  re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render  the entire list and not only those item that receives the update.
- `Virtual DOM :`
* Virtual DOM is the virtual representation of real DOM.
* React updates the state changes in virtual dom first and then it syncs with real DOM.
* Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine. 
* Virtual DOM is the programming concept where a virtual representation of UI is kept in memory synced with "Real DOM" by a library such as ReactDOM and this process is called reconciliation.
* Virtual DOM makes the performance faster, not because the processing itself is done in less time. The reason is the amount of changed information – rather than wasting time on updating the entire page, you can dissect it into small elements and interactions

|   `Real DOM`    |   `Virtual DOM` |
|-------------|-----------------|
| DOM manipulation is very expensive  | DOM manipulation is very easy  | 
| There is too much memory wastage  | No memory wastage  |
| It updates Slow | It updates fast |
| It can directly update HTML | It can’t update HTML directly  |
|  Creates a new DOM if the element updates. | Update the JSX if the element update |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the UI of your application | It is only a virtual representation of the DOM |
