import { call, put, takeEvery } from 'redux-saga/effects';
import { authTrigger, authRequest, authSuccess, authFailure, authFulfill } from '../actions/index';
import {API} from '../../api/index.js';

function* authWorker(action) {
  const { email, password } = action.payload;

  try {
    yield put(authRequest());
    yield call(API.login, { email, password });
    yield put(authSuccess());
  } catch (error) {
    yield put(authFailure({ error }));
  } finally {
    yield put(authFulfill());
  }
}

export default function* authWatcher() {
  yield takeEvery(authTrigger, authWorker);
}
