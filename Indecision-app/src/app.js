class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in my hands muhahahhaa</h2>
      </div>
    );
  }
}

class Action extends React.Component { //these components are basically React classes
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render () {
    return (
      <div>
        <p>Options component here</p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render () {
    return (
      <div>
        <p>AddOption component here</p>
      </div>
    );
  }
}

const jsx = (
  <div>
    <Header /> {/*these components save code and can be easily reused. They are almost like class templates*/}
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
