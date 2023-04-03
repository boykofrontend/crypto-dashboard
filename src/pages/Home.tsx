import { useEffect } from "react";
import isEmpty from "lodash/isEmpty";

import Layout from "../components/Layout/Layout";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getNews } from "../store/reducers/NewsSlice";

const HomePage = () => {
  const { news, isNewsLoading } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isNewsLoading && isEmpty(news)) {
      dispatch(getNews());
    }
  }, [dispatch]);

  return (
    <Layout>
      <div>home page not sidebar</div>
    </Layout>
  );
};

export default HomePage;
