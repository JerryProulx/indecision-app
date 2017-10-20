import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    subtitle: "Put your life in the hands of a computer",
    options: [],
    selectedOption: undefined
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState)=>({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }));
  }
  handleDeleteOptions = () => {
    this.setState(() => ({options: []}));
  }
  handleResetSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}));
  }
  handlePick = () =>{
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNum];
    this.setState(() => ({selectedOption}));
  }
  handleAddOption = (option) => {
    if(!option) {
      return 'Enter Valid value to add item';
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }
    this.setState((prevState, prevProps)=> ({options: prevState.options.concat([option])}));
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
  render(){

    return (
      <div>
        <OptionModal selectedOption={this.state.selectedOption} handleResetSelectedOption={this.handleResetSelectedOption}/>
        <Header subtitle={this.state.subtitle}/>
        <Action handlePick={this.handlePick} hasOptions={!!this.state.options.length}/>
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

export default IndecisionApp;
