const mainElement = document.querySelector("body");

function createlistElements(){

    const ul = document.createElement('ul');

    const todoTopics = ["Hosting","Functions","this","callBacks"];

    todoTopics.forEach((element) => {
     const li = document.createElement("li");
     li.innerText = element;
     ul.appendChild(li);
    });
   
     return ul;
}
function jsdomManipulation(mainElement) {
    
    const parent = document.createElement("div");
    
    const heading = document.createElement('h1');
    heading.innerHTML ="Namaste from Javascript!";

    const listElements = createlistElements();

    parent.appendChild(heading);
    parent.appendChild(listElements);

    mainElement.appendChild(parent);

}

jsdomManipulation(mainElement);