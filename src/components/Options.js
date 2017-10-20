import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
      {props.options.map((option, key)=> <Option option={option} key={key} handleDeleteOption={props.handleDeleteOption}/>)}
      <button onClick={props.handleDeleteOptions}>Remove all options</button>
  </div>
);

export default Options;
