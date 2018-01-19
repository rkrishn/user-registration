import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Login from './components/Login'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, combineReducers  } from 'redux'
import {browserHistory } from 'react-router'
import routes from './routes'
import configureStore from './stores/configureStore';
import { HashRouter as Router, Route } from 'react-router-dom';
// Import CSS
//import styl from './styles/style.styl'
//import css from './styles/style.css';
/*const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component name={"Krishnaaaa"}/>
    </AppContainer>,
    document.getElementById('root'),
  )
}*/
const sagaMiddleware = createSagaMiddleware()

// Creates the Redux store using our reducer and the logger and saga middlewares
const store = configureStore()
// We run the root saga automatically
//sagaMiddleware.run(rootSaga)

/*
<Component  data={window.__PRELOADED_STATE__}/>,
ReactDOM.hydrate(
  <App data={window.__PRELOADED_STATE__} name={"Krishna"}/>,
  document.getElementById('root')
);*/

const render = Component => {
 // console.log(window.__PRELOADED_STATE__)
  ReactDOM.hydrate(
    <Provider store={store}>
        <Router children={routes} history={browserHistory} />
      </Provider>,    
    document.getElementById('root'),
  )
}
if(typeof window !== 'undefined') 
render(App)