import { configureStore } from "@reduxjs/toolkit";

import messagesSlice from "./messages-slice";

const store = configureStore({
  reducer: {
    messages: messagesSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type
export type AppDispatch = typeof store.dispatch;

export default store;
