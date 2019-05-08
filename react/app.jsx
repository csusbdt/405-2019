(function() {
  class Number extends React.Component {
    constructor(props) { 
      super(props); 
      this.state = { n: 0 };
      this.handleOne = this.handleOne.bind(this);
      this.handleTwo = this.handleTwo.bind(this);
    }

    handleOne() {
      this.setState({ n: 1 });
    }

    handleTwo() {
      this.setState({ n: 2 });
    }

    render() { 
      return (
        <div>
          <div id="number">{ this.state.n }</div>
          <button onClick={ this.handleOne }>1</button>
          <button onClick={ this.handleTwo }>2</button>
        </div>
      );
    }
  }

  class App extends React.Component {     
    constructor() { super();              }
    render()      { return <Number/>; }
  }
  ReactDOM.render(<App />, document.getElementById('root'));
})();

