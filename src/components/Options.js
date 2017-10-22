import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      <button className="button button--link" onClick={props.handleDeleteOptions}>Remove all options</button>
    </div>

      {props.options.map((option, key)=> <Option optionText={option} count={key + 1} key={key} handleDeleteOption={props.handleDeleteOption}/>)}
  </div>
);

export default Options;
