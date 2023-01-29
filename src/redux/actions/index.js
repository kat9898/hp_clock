import { createAction } from '@reduxjs/toolkit';

export const authTrigger = createAction('AUTH/TRIGGER');
export const authRequest = createAction('AUTH/REQUEST');
export const authSuccess = createAction('AUTH/SUCCESS');
export const authFailure = createAction('AUTH/FAILURE');
export const authFulfill = createAction('AUTH/FULFILL');