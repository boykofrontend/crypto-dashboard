import { combineReducers } from "@reduxjs/toolkit";

import NewsSlice from "./reducers/NewsSlice";

const rootReducer = combineReducers({
  news: NewsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
