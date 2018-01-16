
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption =  this.handleDeleteOption.bind(this);
    this.state = {
      options: []
  };
}
componentDidMount() { //use for fetching data
  try {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);

    if(options) {
      this.setState(() => ({options: options})); //({options}) is the same
    }
  } catch(e) {

  }
}
componentDidUpdate(prevProps, prevState) { //use for saving data
  if(prevState.options.length !== this.state.options.length) {
    const json = JSON.stringify(this.state.options);
    localStorage.setItem('options', json);
  }
}
componentWillUnmount() {
  console.log("component will unmount")
}

handleDeleteOptions() {
  this.setState(() => ({options: [] }));
}

handleDeleteOption(optionToRemove) {
  this.setState((prevState) => ({
    options: prevState.options.filter((option) => optionToRemove !== option)
  }));
}

handlePick() {
  const randomNum = Math.floor(Math.random() * this.state.options.length); //choose a random number depending on options.length
  const option = this.state.options[randomNum]; //use randomNum to determine which array element to access
  alert(option);
}
handleAddOption(option) {
  if(!option) {
    return 'Not valid fool.';
  }
  else if(this.state.options.indexOf(option) > -1) {
    return 'Already in option list.';
  }

  this.setState((prevState) => ({options: prevState.options.concat(option)}));
}
  render() {
    const subTitle = "Put your life in my hands muhahaha";

    return (
      <div>
        <Header subTitle={subTitle} />
        {/*these components save code and can be easily reused. They are almost like class templates*/}
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick} //adding props
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {/*accesses the data passed into the call to Header*/}
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        What should I do?
      </button>
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
          Remove
      </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Add an option to start yo!</p>}
      {
        props.options.map((option) =>
        <Option
          key={option}
          optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
      )}
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({error}));

    if(!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option'></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
