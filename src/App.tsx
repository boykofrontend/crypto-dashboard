import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.scss";

import HomePage from "./pages/Home";
import NewsPage from "./pages/NewsPage";
import NotFound from "./pages/NotFound";

const App = () => {
  console.log("asd");

  // use REM instead of PX and add some fonts

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
