import { createReducer } from '@reduxjs/toolkit';
import { getErrorMessageByRejectedAction } from '../../services/helpers';

export const errorReducer = createReducer(null, builder =>
  builder.addMatcher(
    action => action.type.endsWith('rejected'),
    (state, action) => {
      return getErrorMessageByRejectedAction(action);
    },
  ),
);
