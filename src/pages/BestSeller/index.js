import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Exit from "../../components/Exit";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import dune from "../../images/dune.png";
import seksendort from "../../images/1984.png";
import ikigai from "../../images/ikigai.png";
import cavdartarlasindacocuklar from "../../images/cavdar-tarlasinda-cocuklar.png";
import metafizik from "../../images/metafizik.png";
import tutunamayanlar from "../../images/tutunamayanlar.png";
import romeovejuliet from "../../images/romeo-ve-juliet.png";
import olaganustubirgece from "../../images/olaganustu-bir-gece.png";
import gencwertherinacilari from "../../images/genc-wertherin-acilari.png";
import morbirfilgordumsanki from "../../images/mor-bir-fil-gordum-sanki.png";
import alevsaclicocuk from "../../images/alev-sacli-cocuk.png";
import melodi from "../../images/melodi.png";
import meditasyonuntemelleri from "../../images/meditasyonun-temelleri.png";
import mutluolmasanati from "../../images/mutlu-olma-sanati.png";
import kurkmantolumadonna from "../../images/kurk-mantolu-madonna.png";

import {
  selectProducts1,
  selectProducts2,
  selectProducts3,
  selectProducts4,
  selectCategoryDetail,
  editPage,
  editBookDetail,
} from "../../redux/state/stateSlice";

function BestSeller() {
  const dispatch = useDispatch();
  let products1 = useSelector(selectProducts1);
  let products2 = useSelector(selectProducts2);
  let products3 = useSelector(selectProducts3);
  let products4 = useSelector(selectProducts4);
  let categoryDetail = useSelector(selectCategoryDetail);

  return (
    <div className="relative w-[1440px] h-[1024px] overflow-y-scroll overflow-x-hidden my-0 mx-auto">
      <Navbar />
      <Exit />
      <div className="flex flex-row items-center p-0 gap-2.5 absolute w-[1320px] h-[33px] left-[60px] top-[160px]">
        <svg
          width="20"
          height="21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
          onClick={() => {
            dispatch(editPage(2));
          }}
        >
          <path
            d="M12.6042 18.0833L5.58335 11.0833C5.50002 11 5.44113 10.9097 5.40669 10.8125C5.37169 10.7153 5.35419 10.6111 5.35419 10.5C5.35419 10.3889 5.37169 10.2847 5.40669 10.1875C5.44113 10.0903 5.50002 9.99999 5.58335 9.91666L12.6042 2.89582C12.7986 2.70138 13.0417 2.60416 13.3334 2.60416C13.625 2.60416 13.875 2.70832 14.0834 2.91666C14.2917 3.12499 14.3959 3.36805 14.3959 3.64582C14.3959 3.9236 14.2917 4.16666 14.0834 4.37499L7.95835 10.5L14.0834 16.625C14.2778 16.8194 14.375 17.0589 14.375 17.3433C14.375 17.6283 14.2709 17.875 14.0625 18.0833C13.8542 18.2917 13.6111 18.3958 13.3334 18.3958C13.0556 18.3958 12.8125 18.2917 12.6042 18.0833Z"
            fill="#090937"
          />
        </svg>
        <div className="w-[126px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#090937] flex-none order-1 flex-grow-0">
          {categoryDetail === 1
            ? "Best Seller"
            : categoryDetail === 2
            ? "Classics"
            : categoryDetail === 3
            ? "Children"
            : "Philosopy"}
        </div>
      </div>
      <div
        className="flex flex-col items-center p-5 gap-5 absolute w-[300px] h-[433px] left-[60px] top-[224px] bg-[#F4F4FF] border border-solid border-[#090937] rounded  border-opacity-10 z-10 cursor-pointer"
        onClick={() => {
          let p =
            categoryDetail === 1
              ? products1[0]
              : categoryDetail === 2
              ? products2[0]
              : categoryDetail === 3
              ? products3[0]
              : products4[0];
          dispatch(editBookDetail(p));
          dispatch(editPage(4));
        }}
      >
        <img
          src={
            categoryDetail === 1
              ? dune
              : categoryDetail === 2
              ? romeovejuliet
              : categoryDetail === 3
              ? morbirfilgordumsanki
              : meditasyonuntemelleri
          }
          alt="kitap resmi"
          className="w-[200px] h-[300px] rounded flex-none order-none flex-grow-0 z-50"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-row justify-between items-end px-0 py-2.5 w-[260px] h-[73px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-none flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-2xl leading-[27px] text-[#090938] flex-none order-none flex-grow-0">
              {categoryDetail === 1
                ? products1[0].name
                : categoryDetail === 2
                ? products2[0].name
                : categoryDetail === 3
                ? products3[0].name
                : products4[0].name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {categoryDetail === 1
                ? products1[0].author
                : categoryDetail === 2
                ? products2[0].author
                : categoryDetail === 3
                ? products3[0].author
                : products4[0].author}
            </div>
          </div>
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[82px] h-[33px] flex-none order-none flex-grow-0">
            <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
              {categoryDetail === 1
                ? products1[0].price
                : categoryDetail === 2
                ? products2[0].price
                : categoryDetail === 3
                ? products3[0].price
                : products4[0].price}{" "}
              $
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center p-5 gap-5 absolute w-[300px] h-[433px] left-[400px] top-[224px] bg-[#F4F4FF] border border-solid border-[#090937] rounded  border-opacity-10 z-10 cursor-pointer"
        onClick={() => {
          let p =
            categoryDetail === 1
              ? products1[1]
              : categoryDetail === 2
              ? products2[1]
              : categoryDetail === 3
              ? products3[1]
              : products4[1];
          dispatch(editBookDetail(p));
          dispatch(editPage(4));
        }}
      >
        <img
          src={
            categoryDetail === 1
              ? seksendort
              : categoryDetail === 2
              ? olaganustubirgece
              : categoryDetail === 3
              ? alevsaclicocuk
              : metafizik
          }
          alt="kitap resmi"
          className="w-[200px] h-[300px] rounded flex-none order-none flex-grow-0 z-50"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-row justify-between items-end px-0 py-2.5 w-[260px] h-[73px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-none flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-2xl leading-[27px] text-[#090938] flex-none order-none flex-grow-0">
              {categoryDetail === 1
                ? products1[1].name
                : categoryDetail === 2
                ? products2[1].name
                : categoryDetail === 3
                ? products3[1].name
                : products4[1].name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {categoryDetail === 1
                ? products1[1].author
                : categoryDetail === 2
                ? products2[1].author
                : categoryDetail === 3
                ? products3[1].author
                : products4[1].author}
            </div>
          </div>
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[82px] h-[33px] flex-none order-none flex-grow-0">
            <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
              {categoryDetail === 1
                ? products1[1].price
                : categoryDetail === 2
                ? products2[1].price
                : categoryDetail === 3
                ? products3[1].price
                : products4[1].price}{" "}
              $
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center p-5 gap-5 absolute w-[300px] h-[433px] left-[740px] top-[224px] bg-[#F4F4FF] border border-solid border-[#090937] rounded  border-opacity-10 z-10 cursor-pointer"
        onClick={() => {
          let p =
            categoryDetail === 1
              ? products1[2]
              : categoryDetail === 2
              ? products2[2]
              : categoryDetail === 3
              ? products3[2]
              : products4[2];
          dispatch(editBookDetail(p));
          dispatch(editPage(4));
        }}
      >
        <img
          src={
            categoryDetail === 1
              ? ikigai
              : categoryDetail === 2
              ? gencwertherinacilari
              : categoryDetail === 3
              ? melodi
              : mutluolmasanati
          }
          alt="kitap resmi"
          className="w-[200px] h-[300px] rounded flex-none order-none flex-grow-0 z-50"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-row justify-between items-end px-0 py-2.5 w-[260px] h-[73px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-none flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-2xl leading-[27px] text-[#090938] flex-none order-none flex-grow-0">
              {categoryDetail === 1
                ? products1[2].name
                : categoryDetail === 2
                ? products2[2].name
                : categoryDetail === 3
                ? products3[2].name
                : products4[2].name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {categoryDetail === 1
                ? products1[2].author
                : categoryDetail === 2
                ? products2[2].author
                : categoryDetail === 3
                ? products3[2].author
                : products4[2].author}
            </div>
          </div>
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[82px] h-[33px] flex-none order-none flex-grow-0">
            <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
              {categoryDetail === 1
                ? products1[2].price
                : categoryDetail === 2
                ? products2[2].price
                : categoryDetail === 3
                ? products3[2].price
                : products4[2].price}{" "}
              $
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center p-5 gap-5 absolute w-[300px] h-[433px] left-[1080px] top-[224px] bg-[#F4F4FF] border border-solid border-[#090937] rounded  border-opacity-10 z-10 cursor-pointer"
        onClick={() => {
          let p = categoryDetail === 1 ? products1[3] : products1[0];
          dispatch(editBookDetail(p));
          dispatch(editPage(4));
        }}
      >
        <img
          src={categoryDetail === 1 ? cavdartarlasindacocuklar : dune}
          alt="kitap resmi"
          className="w-[200px] h-[300px] rounded flex-none order-none flex-grow-0 z-50"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-row justify-between items-end px-0 py-2.5 w-[260px] h-[73px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-none flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-2xl leading-[27px] text-[#090938] flex-none order-none flex-grow-0">
              {categoryDetail === 1 ? products1[3].name : "Dune"}
            </div>
            <div className="w-[105px] h-[22px] font-manrope font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {categoryDetail === 1 ? products1[3].author : "Frank Herbert"}
            </div>
          </div>
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[82px] h-[33px] flex-none order-none flex-grow-0">
            <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
              {categoryDetail === 1 ? products1[3].price : "87.35"} $
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center p-5 gap-5 absolute w-[300px] h-[433px] left-[60px] top-[694px] bg-[#F4F4FF] border border-solid border-[#090937] rounded  border-opacity-10 z-10 cursor-pointer"
        onClick={() => {
          let p = categoryDetail === 1 ? products1[4] : products1[0];
          dispatch(editBookDetail(p));
          dispatch(editPage(4));
        }}
      >
        <img
          src={categoryDetail === 1 ? kurkmantolumadonna : dune}
          alt="kitap resmi"
          className="w-[200px] h-[300px] rounded flex-none order-none flex-grow-0 z-50"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-row justify-between items-end px-0 py-2.5 w-[260px] h-[73px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-none flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-2xl leading-[27px] text-[#090938] flex-none order-none flex-grow-0">
              {categoryDetail === 1 ? products1[4].name : "Dune"}
            </div>
            <div className="w-[105px] h-[22px] font-manrope font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {categoryDetail === 1 ? products1[4].author : "Frank Herbert"}
            </div>
          </div>
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[82px] h-[33px] flex-none order-none flex-grow-0">
            <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
              {categoryDetail === 1 ? products1[4].price : "87.35"} $
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center p-5 gap-5 absolute w-[300px] h-[433px] left-[400px] top-[694px] bg-[#F4F4FF] border border-solid border-[#090937] rounded  border-opacity-10 z-10 cursor-pointer"
        onClick={() => {
          let p = categoryDetail === 1 ? products1[5] : products1[0];
          dispatch(editBookDetail(p));
          dispatch(editPage(4));
        }}
      >
        <img
          src={categoryDetail === 1 ? tutunamayanlar : dune}
          alt="kitap resmi"
          className="w-[200px] h-[300px] rounded flex-none order-none flex-grow-0 z-50"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-row justify-between items-end px-0 py-2.5 w-[260px] h-[73px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-none flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-2xl leading-[27px] text-[#090938] flex-none order-none flex-grow-0">
              {categoryDetail === 1 ? products1[5].name : "Dune"}
            </div>
            <div className="w-[105px] h-[22px] font-manrope font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {categoryDetail === 1 ? products1[5].author : "Frank Herbert"}
            </div>
          </div>
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[82px] h-[33px] flex-none order-none flex-grow-0">
            <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
              {categoryDetail === 1 ? products1[5].price : "87.35"} $
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-5 gap-5 absolute w-[300px] h-[433px] left-[740px] top-[694px] bg-[#F4F4FF] border border-solid border-[#090937] rounded  border-opacity-10 z-10 cursor-pointer">
        <img
          src={dune}
          alt="kitap resmi"
          className="w-[200px] h-[300px] rounded flex-none order-none flex-grow-0 z-50"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-row justify-between items-end px-0 py-2.5 w-[260px] h-[73px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-none flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-2xl leading-[27px] text-[#090938] flex-none order-none flex-grow-0">
              Dune
            </div>
            <div className="w-[105px] h-[22px] font-manrope font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              Frank Herbert
            </div>
          </div>
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[82px] h-[33px] flex-none order-none flex-grow-0">
            <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
              87,75 $
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-5 gap-5 absolute w-[300px] h-[433px] left-[1080px] top-[694px] bg-[#F4F4FF] border border-solid border-[#090937] rounded  border-opacity-10 z-10 cursor-pointer">
        <img
          src={dune}
          alt="kitap resmi"
          className="w-[200px] h-[300px] rounded flex-none order-none flex-grow-0 z-50"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-row justify-between items-end px-0 py-2.5 w-[260px] h-[73px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-none flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-2xl leading-[27px] text-[#090938] flex-none order-none flex-grow-0">
              Dune
            </div>
            <div className="w-[105px] h-[22px] font-manrope font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              Frank Herbert
            </div>
          </div>
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[82px] h-[33px] flex-none order-none flex-grow-0">
            <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
              87,75 $
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BestSeller;
