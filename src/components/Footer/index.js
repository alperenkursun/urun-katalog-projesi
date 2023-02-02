import React from "react";
import { useSelector } from "react-redux";
import { selectPage } from "../../redux/state/stateSlice";
function Footer() {
  const page = useSelector(selectPage);
  return (
    <div
      className={`relative w-[1440px] h-[100px] left-0 ${
        page === 2 ? "top-[1880px]" : "top-[1130px]"
      } bg-white`}
    ></div>
  );
}

export default Footer;
