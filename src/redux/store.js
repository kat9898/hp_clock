import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import authReducer from './reducers/Auth';
import authWatcher from './sagas/Auth';

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    Auth: authReducer
  },
  middleware
})

sagaMiddleware.run(authWatcher);

export default store