import "./App.css";
import { useEffect } from "react";
import BestSeller from "./pages/BestSeller";
import BooksDetails from "./pages/BooksDetails";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCategories,
  selectPage,
  editPage,
  fetchCategories,
} from "./redux/state/stateSlice";

function App() {
  const dispatch = useDispatch();
  let isThereToken = localStorage.getItem("token");
  console.log(isThereToken);
  if (isThereToken !== null) {
    dispatch(editPage(2));
  }
  // const merhaba = useSelector(selectCategories);
  // console.log(merhaba);
  // const dispatch = useDispatch();
  // let page;
  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, [dispatch, page]);
  // console.log(selectPage);
  const page = useSelector(selectPage);

  console.log(page);

  return (
    <div>
      {page === 1 && <LoginRegister />}
      {page === 2 && <Home />}
      {/* <BestSeller /> */}
      {/* <BooksDetails /> */}
    </div>
  );
}

export default App;
