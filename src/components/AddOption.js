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

export default AddOption;
