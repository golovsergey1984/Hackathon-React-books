import { createReducer } from '@reduxjs/toolkit';

export const loaderReducer = createReducer(true, builder =>
  builder
    .addMatcher(
      action => action.type.endsWith('pending'),
      () => true,
    )
    .addMatcher(
      action =>
        action.type.endsWith('fulfilled') || action.type.endsWith('rejected'),
      () => false,
    ),
);
