#_Chapter 01 - Inception_

## Ques1 : What is Emmet ?

> Emmet is a plugin for many popular text-editors which greatly improves HTML & CSS workflow.
> Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code.

## Ques2 : What is the difference between the library & framework?

> LIBRARY :

1. It is set or collection of predefined functions and classes that are available for developers to make their work a little easier and to boost the developement process.
2. This means that the code for these functions and classes is already written in the library and developers do not write code for some specific functionality,they can call and use code from the library through their own code.
3. In geneal terms,size of library is not that large and it performs a set of specific and well-defined operations.
4. Example : In some certain libraries, there is a method named "findLastInde()". The definition of this method is written in order to find the index of a specific character in the string which is passed as the argument. So we can simply call the "findLastIndex(character to find)" method and pass the character as an argument by writing it in between the brackets e.g. "findLastIndex(A)" whose position we want to search.

> FRAMEWORK :

1. A framework just gives us a basic structure around which we can add our code to have a significant functionality of that system.So,it allows us a standard way of creating appplications & most importantly framework forces us to work in a standard manner.
2. A framework is similar to a template in that you can modify it and add certain features and higher functionalities to create a complex & broad project.

> KEY DIFFERENCE :
> A framework inverts the control of the program.It tells the developer what they need.A library doesn't.The programmer calls the library where and when they need it.

## Ques3 : What is CDN? Why do we use it ?

> A content delivery network is a network of servers that is geographically dispersed to enable faster web performance by locating copies of web content closer to users or facilitating delivery of dynamic content(e.g., live video feeds)
> Each CDN server is located on what is called the "network edge"-closer to users than the host server,which is where the website originates.
> Each server stores or caches copies of a subset of the web content-HTML files,images,audio etc-from the host server.By reducing the distance between this content & user,the content delivery network helps the website publisher provide faster performance,reduce loading time for its users & control its own bandwidth consumption & cost.

## Ques4 : Why is React known as React?

> React was developed for applications (Facebook)that have constantly changing data.Since React is a front-end framework or the "View" in MVC,this means that as the user clicks around & changes the app's data,the view should "react" or change with those user events.User events being mouse clicks,typing,submitting a form.
> React library takes UI & splits it into independent units called components.
> The types and props of the component can describe how the UI looks and behaves.

## CORS -

> CORS : Cross-Origin Resource Sharing is an HTTP-based security mechanism controlled and enforced by the client(web browser).It allows a service (API) to indicate any origin other than its own from which the client can request resources.
> CORS has been designed in response to the same-origin policy(SOP) that restricts how a website loaded by one origincan interact with a resource from another origin.
> If we need to allow certian URL's then we need to set the "Access-Control-Allow-Origin"header and its value needs to match the origin header on the request.

## Ques5 : What is crossorigin in script tag?

> The crossorigin attribute,valid on the <audio>, <img>, <links>, <scripts> and <video> elements, provide support for CORS,defining how the element handles cross-origin request,Thereby enabling the confriguation of the CORS request for the element's fetched data.Depending on the element,the attribute can be a CORS settings attribute.
> The crossorigin content attribute on the media elements is a CORS settings attribute.
> These attribute are enumerated & have the following possible values :

1. anonymous : Request uses CORS headers & credentials flag is set to 'same-origin'.There is no exchange of user credentials via cookies,client-side SSL certificate or HTTP authentication,unless destination is the same origin.
2. use-credentials:Request uses CORS headers,credentials flag is set to 'include' and user credentials are always included.
3. "" :setting the attribute name to an empty value,like crossorigin or crossorigin="".is the same as anonymous.
   An invalid keyword and an empty string will be handled as the anonymous keyword.

## Ques6 : What is the difference between React and React-DOM ?

> React : React library is responsible for creating React elements(e.g.React.createElement(type,[props],[..children]))
> React-DOM : React-DOM library is responsible to actually render UI in the browser.
> React-DOM and React were split into two libraries due to the arrival of React Native(platform for mobile developement)

## Ques7 : What is the difference between react.developement.js & react.production.js files via CDN ?

> The very basic different is that production build has ugly,minified version of JS code,so this makes rendering of file on end user's browser very quick & performance enhancing. There no hot rendering included. Source maps might be included as separate files depending on your webpack devtool.
> Whereas developement build is used for developement reason. We have source maps,debugging & often times hot rendering ability in these builds.

## Ques8 : What is async and defer ?

> When the browser comes across the <scipt> tag when loading HTML,the browser is forced to download parse the entire <script> & evalute it first, before it continue with reading the rest of HTML to build DOM.
> So this means that normal <script> tag is blocking & can cause the entire DOM to stop loading.
> This is how Async and Defer comes into play. Async and Defer are the boolean attributes which are used along with script tag to load external scripts efficiently into web page.
> By using Async Attribute,the HTML parsing goes on scripts are fetched from network ashynchronously in parallel. As soon as scripts are available in browser they are excuted & only then HTML parsing continues.
> Async Attribute does not guarantee the order of execution of scripts.
> In case of Defer Attribute, the HTML parsing continues to go on and these scripts are ecuted when the parsing is fully completed.Defer waits for the DOM.It respects the sequence of scripts.
