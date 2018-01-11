const app = {
  title: "Visibility Toggle",
  text: "There was no secret you fool!"
}
let text = false;

const toggleVisibility = () => {
  text = !text;
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
  <div>
    <h1>{app.title}</h1>
    <button onClick={toggleVisibility}>
      {text ? 'Hide details': 'Show details'}
    </button>
      {text ? <p>{app.text}</p>: <p>It's a secret yo. Click to see.</p>}
  </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
