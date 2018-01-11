console.log("App.js is running");

const title = {
  title: 'Indecision App',
  subtitle: 'Put your life in my hands muhahhaha',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault(); //to stop the initial render
  const option = e.target.elements.option.value;
  if (option){
    title.options.push(option);
    e.target.elements.option.value = ''; //if option exists, push it to array and render option box empty
    render();
  };
}

const removeAll = () => {
  title.options = []; //empty array and re-render
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * title.options.length); //choose a random number depending on options.length
  const option = title.options[randomNum]; //use randomNum to determine which array element to access
  alert(option);
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
  <div>
    <h1>{title.title}</h1>
    {title.subtitle &&  <p>{title.subtitle}</p>}  <p>{title.options.length > 0 ? "Here are your options": "No options"}</p>
    <button disabled={title.options.length === 0} onClick={onMakeDecision}>What should I do?</button>; {/*if there is nothing in the array, make button unusable*/}
    <button onClick={removeAll}>Remove All</button>
    <ol>
      {title.options.map((list) => <li key={list}>Options: {list}</li>)} {/*map options and make an list item for each with a key of the same name*/}
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type='text' name='option'/>
      <button>Add Option</button>
    </form>
  </div>
  );
  ReactDOM.render(template, appRoot);//activating React virtual DOM
};

render();
