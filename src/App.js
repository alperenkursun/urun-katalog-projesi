import "./App.css";
import { useEffect } from "react";
import BestSeller from "./pages/BestSeller";
import BooksDetails from "./pages/BooksDetails";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import { useSelector, useDispatch } from "react-redux";
import {
  editCategories,
  selectPage,
  editPage,
  editProducts1,
  editProducts2,
  editProducts3,
  editProducts4,
} from "./redux/state/stateSlice";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  let isThereToken = localStorage.getItem("token");

  if (isThereToken !== null) {
    dispatch(editPage(2));
  }

  useEffect(() => {
    axios
      .get(`https://assign-api.piton.com.tr/api/rest/categories`)
      .then((res) => dispatch(editCategories(res.data.category)));
    axios
      .get(`https://assign-api.piton.com.tr/api/rest/products/1`)
      .then((res) => dispatch(editProducts1(res.data.product)));
    axios
      .get(`https://assign-api.piton.com.tr/api/rest/products/2`)
      .then((res) => dispatch(editProducts2(res.data.product)));
    axios
      .get(`https://assign-api.piton.com.tr/api/rest/products/3`)
      .then((res) => dispatch(editProducts3(res.data.product)));
    axios
      .get(`https://assign-api.piton.com.tr/api/rest/products/4`)
      .then((res) => dispatch(editProducts4(res.data.product)));
  }, [dispatch]);

  const page = useSelector(selectPage);

  return (
    <div>
      {page === 1 && <LoginRegister />}
      {page === 2 && <Home />}
      {page === 3 && <BestSeller />}
      {page === 4 && <BooksDetails />}
    </div>
  );
}

export default App;
