import * as reducers from '../reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
export default () => {
  const reducer = combineReducers(reducers)
  const store = applyMiddleware(promiseMiddleware, thunk.withExtraArgument({ga: () => {}}))(typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension()(createStore) : (createStore))(reducer)
  return store
}
