import {
  SerializedError,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { compareNewsPath } from "../../utils/paths";
import { INews, NewsResponse } from "../../models/INews";

interface NewsState {
  news: INews[];
  isNewsLoaded: boolean;
  isNewsLoading: boolean;
  error: SerializedError | null;
}

const initialState: NewsState = {
  news: [],
  isNewsLoaded: false,
  isNewsLoading: false,
  error: null,
};

export const getNews = createAsyncThunk<NewsResponse<INews>>(
  "news/getNews",
  async () => {
    try {
      const response = await axios.get(`${compareNewsPath}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.isNewsLoading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload.Data;
        state.isNewsLoading = false;
        state.isNewsLoaded = true;
        state.error = null;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.isNewsLoading = false;
        state.isNewsLoaded = false;
        state.error = action.error;
      });
  },
});

export default newsSlice.reducer;
export const selectAllNews = (state: { news: INews[] }) => state.news;
