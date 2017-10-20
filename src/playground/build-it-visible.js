// let visible = false;
//
// const toggleVisibility = () => {
//   visible = !visible;
//   renderApp();
// }
//
//
// const renderApp = ()=>{
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>{visible ? 'hide details' : 'Show details'}</button>
//       {visible && <p>YEAH!!! you did it</p>}
//     </div>
//   );
//   ReactDOM.render(template, document.getElementById('app'));
// }
//
// renderApp();

class Visibility extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }

  toggleVisibility(){
    this.setState((prevState, prevProps)=>{
      return {
        visible: !prevState.visible
      }
    });
  }
  render(){
    return (
      <div>
        <h1>Visibility</h1>
        <button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide content' : 'Show content'}</button>
        {this.state.visible && <p>This is the hidden text</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'));
