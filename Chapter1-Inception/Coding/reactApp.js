const head1 = React.createElement("h1", null, "Namaste from React!");


const head2 = React.createElement(
  "h2",
  {
    id: "h2",
  },
  "Namaste from React again!"
);

const createParent = React.createElement(
  "div",
  {
    className: "parent",
  },
  [head1, head2]
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(createParent);
