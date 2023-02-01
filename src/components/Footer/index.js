import React from "react";

function Footer({ top }) {
  return (
    <div
      className={`relative w-[1440px] h-[100px] left-0 ${
        true ? "top-[1130px]" : "top-[1880px]"
      } bg-white`}
    ></div>
  );
}

export default Footer;
