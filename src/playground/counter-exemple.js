class Count extends React.Component {
  render(){
    return (
      <h1>Count {this.props.count}</h1>
    )
  }
}

class Actions extends React.Component {
  constructor(props){
    super(props);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handlePlus () {
    this.props.plusOne();
  }
  handleMinus () {
    this.props.minusOne();
  }
  handleReset () {
    this.props.resetAll();
  }
  render(){
    return (
      <div>
        <button onClick={this.handlePlus}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>RESET</button>
      </div>
    )
  }
}

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.plusOne = this.plusOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.resetAll = this.resetAll.bind(this);
    this.state = {
      count: 0
    }
  }
  componentDidMount(){
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);
    if(!isNaN(count)){
      this.setState(()=>({count: count}));
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      localStorage.setItem('count', this.state.count);
    }
  }
  plusOne () {
    this.setState((prevState, props)=>{
      return {
        count: prevState.count + 1
      }
    });
  }
  minusOne () {
    this.setState((prevState, props)=>{
      return {
        count: prevState.count - 1
      }
    });
  }
  resetAll () {
    this.setState((prevState, props)=>{
      return {
        count: 0
      }
    });
  }
  render(){
    return (
      <div>
        <Count count={this.state.count} />
        <Actions plusOne={this.plusOne} minusOne={this.minusOne} resetAll={this.resetAll} />
      </div>
    );
  }
}


ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
//
// const removeOne = () => {
//   count--;
//   renderCounterApp();
// }
//
// const resetCount = () => {
//   count = 0;
//   renderCounterApp();
// }
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={removeOne}>-1</button>
//       <button onClick={resetCount}>reset</button>
//     </div>
//   );
//
//   ReactDOM.render(templateTwo, appRoot);
// }
//
// renderCounterApp();
