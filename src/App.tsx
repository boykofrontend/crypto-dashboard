import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.scss";

import HomePage from "./pages/Home";

const App = () => {
  console.log("asd");
  // const { users, error, isLoading } = useAppSelector(
  //   (state) => state.userReducer
  // );

  // use REM instead of PX and add some fonts
  // use REM instead of PX and add some fonts
  // use REM instead of PX and add some fonts
  // use REM instead of PX and add some fonts
  // use REM instead of PX and add some fonts
  // use REM instead of PX and add some fonts
  // use REM instead of PX and add some fonts

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/users" element={<UserPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos/:id" element={<TodoItemPage />} /> */}
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
