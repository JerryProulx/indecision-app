import React from 'react';

const Action = (props) => (
  <button className="big-button" onClick={props.handlePick} disabled={!props.hasOptions}>{props.hasOptions ? 'What should I do?' : 'Add options please'}</button>
);

export default Action;
