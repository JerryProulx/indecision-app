const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in hands of a computer',
  options: []
}

const renderOptions = function(){
  return app.options.map((option, key) => {
    return <li key={key}>{option}</li>
  });
}

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
}

const removeAllOptions = (e) => {
  e.preventDefault();
  app.options = [];
  renderApp();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

var renderApp = function() {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? ' Here are your ' +  app.options.length + ' options'  : 'No options...you can add one'} </p>
      <button onClick={onMakeDecision} disabled={app.options.length === 0}>What sould I do?</button>
      <ol>
        {renderOptions()}
        {/* app.options.map((option, key) => <li key={key}>{option}</li>) */}
      </ol>
      <button onClick={removeAllOptions}>Remove all options</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Enter an option" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApp();


//Run babel src/app.js --out-file=public/script/app.js --presets=env,react --watch     to compile
