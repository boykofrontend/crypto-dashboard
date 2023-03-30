import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";

const rootReducer = combineReducers({
  userReducer,
});

// const reducer = {
//   counter: counterReducer,
//   // delete counter
//   auth: authReducer,
//   books: booksReducer
// };

export const store = () =>
  configureStore({
    devTools: true,
    // middleware(getDefaultMiddleware) {

    // },
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
