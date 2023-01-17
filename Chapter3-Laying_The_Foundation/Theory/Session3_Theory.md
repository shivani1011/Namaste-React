## Namaste React Course by Akshay Saini
# Chapter 03 - Laying the Foundation

## Ques: What is `JSX`?
1. JSX stands for Javascript XML(extension of Javascript Language).
2. It is a HTML-like syntax inside JS code.
3. JSX gives the ability to write HTML elements in Javascript & place them in the DOM by converting the HTML tags into React Elements without the need of other methods like createElement() or appendChild().
4. Browser does not understand JSX it requires Babel to understand(Transpiler/Compiler) JSX code and convert it into React.createElement()[React Element] which is an object itslef, later the object is converted into HTML code which is pit up on DOM.

`JSX ====> React.createElement ====> Object ====> HTML(DOM) `


## Ques:  Superpowers of JSX.
1. JSX as `variable` : markup(HTML-like) syntax can be set in a variable. This creates a react element(Object).
2. `Javascript Expressions` in JSX : It supports all JavaScript Expressions by wrapping them inside a pair of curly brackets.  
3. `Attributes` in JSX : We can pass all the html attributes inside jsx tag (attributes must be CamelCased). Even, custom attributes can be created, but it must not use CamelCase.
4. `Props` in JSX : The values of each attribute can be passed as properties (props) to a react element. This is my favourite superpower of jsx, since it can handle dynamic data to create react elements.


## Ques: Role of `type` attribute in script tag? What options can I use there?
1. `text/javascript` : It is the basic standard of writing javascript code inside the <script> tag.
Syntax

<script type="text/javascript"></script>

2. `text/ecmascript` : this value indicates that the script is following the EcmaScript standards.
3. `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
3. `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
4. `text/typescript`: As the name suggest the script is written in TypeScript.


## Ques: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
1. `{TitleComponent}`: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.

2. `<TitleComponent/>`: This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {<  />} expression.

3. `<TitleComponent></TitleComponent>` : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.


> Example : 
 <TitleComponent>
     <FirstChildComponent />
     <SecondChildComponent />
     <ThirdChildComponent />
 </TitleComponent>