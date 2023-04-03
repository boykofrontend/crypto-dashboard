import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INews, NewsResponse } from "../../models/INews";

export const cryptocompareApi = createApi({
  reducerPath: "cryptocompare/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://min-api.cryptocompare.com/data/v2/",
  }),
  endpoints: (build) => ({
    news: build.query<INews[], string>({
      query: (lang: string) => ({
        url: `news/`,
        params: {
          lang: `${lang}`,
          api_key: `${process.env.REACT_APP_CRYPTOCOMPARE_API_KEY}`,
        },
        transformResponse: (response: NewsResponse<INews>) => response.Data,
      }),
    }),
  }),
});

export const { useNewsQuery } = cryptocompareApi;
