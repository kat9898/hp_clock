import { createReducer } from '@reduxjs/toolkit';
import { authRequest, authSuccess, authFailure, authFulfill } from '../actions/index';

const initialState = {
    isLogged: false,
    isFetching: false,
    error: []
};

export const onRequest = (state) => {
    state.isFetching = true;
    return state;
};

export const onFailure = (state, action) => {
    const { error } = action.payload;
    state.error = error;
    return state;
};

export const onFulfill = (state) => {
    state.isFetching = false;
    state.error = [];
    return state;
  };

const tenderDocumentUploadReducer = createReducer(initialState, {
  [authRequest]: onRequest,
  [authFailure]: onFailure,
  [authFulfill]: onFulfill,
  [authSuccess]: (state, action) => {
    state.isLogged = true;
    return state;
  }
});

export default tenderDocumentUploadReducer;
