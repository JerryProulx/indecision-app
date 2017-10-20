// const obj = {
//   name: 'Vikram',
//   getName(){
//     return this.name;
//   }
// };
//
// const getName = obj.getName.bind(obj);
//
// console.log(getName());


//stateless functional component


class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      subtitle: "Put your life in the hands of a computer",
      options: []
    }
  }
  componentDidMount(){
    try{
      var options = JSON.parse(localStorage.getItem('options'));
      if(options){
        this.setState(()=>({options}));
      }
    }catch(e){
      console.log(e);
    }
  }
  componentWillMount(){
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnMount(){
  }
  handleDeleteOption(optionToRemove){
    this.setState((prevState)=>({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }));
  }
  handleDeleteOptions(){
    this.setState(() => ({options: []}));
  }
  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option){
    if(!option) {
      return 'Enter Valid value to add item';
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }
    this.setState((prevState, prevProps)=> ({options: prevState.options.concat([option])}));
  }
  render(){

    return (
      <div>
        <Header subtitle={this.state.subtitle}/>
        <Action handlePick={this.handlePick} hasOptions={!!this.state.options.length}/>
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

const Action = (props) => {
  return (
    <button onClick={props.handlePick} disabled={!props.hasOptions}>{props.hasOptions ? 'What should I do?' : 'Add options please'}</button>
  );
}

const Options = (props) => {
  return (
    <div>
        {props.options.map((option, key)=> <Option option={option} key={key} handleDeleteOption={props.handleDeleteOption}/>)}
        <button onClick={props.handleDeleteOptions}>Remove all options</button>
    </div>
  );
}

const Option = (props) => {
  return (
      <div>{props.option}<button onClick={()=>{props.handleDeleteOption(props.option)}}> Remove</button></div>
  );
}

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: ''
    }
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    const error = this.props.handleAddOption(option);

    if(!error){
      e.target.elements.option.value = '';
    }else{
      this.setState(()=>({ error}));
      setTimeout(()=>{this.setState(()=>({ error: ''}))}, 2000);
    }
  }
  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" placeholder="type your new option" name="option"/>
          <button>Add options</button>
        </form>
      </div>
    );
  }
}


const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.title && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

//Run babel src/app.js --out-file=public/script/app.js --presets=env,react --watch
