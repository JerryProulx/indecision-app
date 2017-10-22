import React from 'react';

class AddOption extends React.Component {
  state = {
    error: ''
  };
  handleAddOption = (e) => {
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
      <div className="add-option">
        {this.state.error && <p className="add-option__error">{this.state.error}</p>}
        <form onSubmit={this.handleAddOption} className="add-option__form">
          <input className="add-option__input" type="text" placeholder="type your new option" name="option"/>
          <button className="button">Add options</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
