import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// Import CSS
import styl from './styles/style.styl';
//import css from './styles/style.css';
/*const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component name={"Krishnaaaa"}/>
    </AppContainer>,
    document.getElementById('root'),
  )
}*/

/*ReactDOM.hydrate(
  <App data={window.__PRELOADED_STATE__} name={"Krishna"}/>,
  document.getElementById('root')
);*/

const render = Component => {
  ReactDOM.hydrate(
    <Component  data={window.__PRELOADED_STATE__}/>,
    document.getElementById('root'),
  )
}

render(App)