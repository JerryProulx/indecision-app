import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

//import style
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//Run babel src/app.js --out-file=public/script/app.js --presets=env,react --watch
