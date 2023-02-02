import React from "react";
import Exit from "../../components/Exit";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import showcase from "../../images/showcase.png";
import dune from "../../images/dune.png";
import seksendort from "../../images/1984.png";
import ikigai from "../../images/ikigai.png";
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

import {
  selectCategories,
  selectProducts1,
  selectProducts2,
  selectProducts3,
  selectProducts4,
  editCategoryDetail,
  editPage,
  editBookDetail,
} from "../../redux/state/stateSlice";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  let categories = useSelector(selectCategories);
  let products1 = useSelector(selectProducts1);
  let products2 = useSelector(selectProducts2);
  let products3 = useSelector(selectProducts3);
  let products4 = useSelector(selectProducts4);

  return (
    <div className="relative w-[1440px] h-[1024px]  bg-white mx-auto my-0 overflow-y-scroll overflow-x-hidden">
      <Navbar />
      <Exit />
      <div
        className="absolute w-[1320px] h-[400px] left-[60px] top-[160px]"
        style={{
          background:
            "linear-gradient(270deg, rgba(29, 29, 78, 0.2) 0%, rgba(9, 9, 55, 0.7) 100%), url(.jpg), #D9D9D9",
        }}
      >
        <img src={showcase} alt="showcase" />
      </div>
      <div
        className="absolute w-[435px] h-[228px] left-[120px] top-[246px] font-manrope not-italic font-extrabold text-[56px] leading-[76px]"
        style={{ color: "white" }}
      >
        <span style={{ color: "#F0B861" }}>25% discount</span> all Paulo Coelho
        books!
      </div>
      <div className="flex flex-row justify-center items-center p-0 gap-3 absolute w-[56px] h-3 left-[692px] top-[580px]">
        <div className="w-2.5 h-2.5 flex-none order-0 flex-grow-0 bg-[#090937] opacity-60 rounded-full"></div>
        <div className="w-3 h-3 flex-none order-1 flex-grow-0 bg-[#EF6B4A] rounded-full"></div>
        <div className="w-2.5 h-2.5 flex-none order-2 flex-grow-0 bg-[#090937] opacity-60 rounded-full"></div>
      </div>
      <div className="absolute w-[1340px] h-[264px] left-[60px] top-[652px]">
        <div className="flex flex-row justify-between items-center p-0 gap-[912px] absolute w-[1320px] h-[44px]">
          <div className="w-[168px] h-[44px] font-manrope not-italic font-bold text-[32px] leading-[44px] text-[#090937] flex-none order-none flex-grow-0">
            {categories[0]?.name}
          </div>
          <div
            className="w-[75] h-[27px] font-manrope not-italic font-bold text-xl leading-[27px] text-[#EF684A] flex-none order-1 flex-grow-0 cursor-pointer"
            onClick={() => {
              dispatch(editCategoryDetail(1));
              dispatch(editPage(3));
            }}
          >
            View All
          </div>
        </div>
      </div>
      <div
        className="flex flex-row items-start p-2.5 gap-5 absolute w-[320px] h-[200px] left-[60px] top-[716px] bg-[#F4F4FF] border border-solid border-[#F4F4FF] border-opacity-10 rounded cursor-pointer"
        onClick={() => {
          dispatch(editBookDetail(products1[0]));
          dispatch(editPage(4));
        }}
      >
        <img
          src={dune}
          alt="kitap resmi"
          className="w-[120px] h-[180px] rounded flex-none order-none flex-grow-0"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-col justify-between items-start py-2.5 px-0 gap-20 w-[105px] h-[180px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-0 flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] flex-none order-none flex-grow-0  ">
              {products1[0]?.name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope not-italic font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {products1[0]?.author}
            </div>
          </div>
          <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
            {products1[0]?.price} $
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-start p-2.5 gap-5 absolute w-[320px] h-[200px] left-[400px] top-[716px] bg-[#F4F4FF] border border-solid border-[#F4F4FF] border-opacity-10 rounded cursor-pointer"
        onClick={() => {
          dispatch(editBookDetail(products1[1]));
          dispatch(editPage(4));
        }}
      >
        <img
          src={seksendort}
          alt="kitap resmi"
          className="w-[120px] h-[180px] rounded flex-none order-none flex-grow-0"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-col justify-between items-start py-2.5 px-0 gap-20 w-[105px] h-[180px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-0 flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] flex-none order-none flex-grow-0  ">
              {products1[1]?.name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope not-italic font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {products1[1]?.author}
            </div>
          </div>
          <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-row flex-none order-none flex-grow-0">
            {products1[1]?.price} $
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-start p-2.5 gap-5 absolute w-[320px] h-[200px] left-[740px] top-[716px] bg-[#F4F4FF] border border-solid border-[#F4F4FF] border-opacity-10 rounded cursor-pointer"
        onClick={() => {
          dispatch(editBookDetail(products1[2]));
          dispatch(editPage(4));
        }}
      >
        <img
          src={ikigai}
          alt="kitap resmi"
          className="w-[120px] h-[180px] rounded flex-none order-none flex-grow-0"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-col justify-between items-start py-2.5 px-0 gap-20 w-[105px] h-[180px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-0 flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] flex-none order-none flex-grow-0  ">
              {products1[2]?.name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope not-italic font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {products1[2]?.author}
            </div>
          </div>
          <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
            {products1[2]?.price} $
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-start p-2.5 gap-5 absolute w-[320px] h-[200px] left-[1080px] top-[716px] bg-[#F4F4FF] border border-solid border-[#F4F4FF] border-opacity-10 rounded cursor-pointer"
        onClick={() => {
          dispatch(editBookDetail(products1[5]));
          dispatch(editPage(4));
        }}
      >
        <img
          src={tutunamayanlar}
          alt="kitap resmi"
          className="w-[120px] h-[180px] rounded flex-none order-none flex-grow-0"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-col justify-between items-start py-2.5 px-0 gap-20 w-[105px] h-[180px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-0 flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] flex-none order-none flex-grow-0  ">
              {products1[5]?.name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope not-italic font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {products1[5]?.author}
            </div>
          </div>
          <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
            {products1[5]?.price} $
          </div>
        </div>
      </div>

      <div className="absolute w-[1340px] h-[264px] left-[60px] top-[976px]">
        <div className="flex flex-row justify-between items-center p-0 gap-[912px] absolute w-[1320px] h-[44px]">
          <div className="w-[168px] h-[44px] font-manrope not-italic font-bold text-[32px] leading-[44px] text-[#090937] flex-none order-none flex-grow-0">
            {categories[1]?.name}
          </div>
          <div
            className="w-[75] h-[27px] font-manrope not-italic font-bold text-xl leading-[27px] text-[#EF684A] flex-none order-1 flex-grow-0 cursor-pointer"
            onClick={() => {
              dispatch(editCategoryDetail(2));
              dispatch(editPage(3));
            }}
          >
            View All
          </div>
        </div>
      </div>
      <div
        className="flex flex-row items-start p-2.5 gap-5 absolute w-[320px] h-[200px] left-[60px] top-[1040px] bg-[#F4F4FF] border border-solid border-[#F4F4FF] border-opacity-10 rounded cursor-pointer"
        onClick={() => {
          dispatch(editBookDetail(products2[0]));
          dispatch(editPage(4));
        }}
      >
        <img
          src={romeovejuliet}
          alt="kitap resmi"
          className="w-[120px] h-[180px] rounded flex-none order-none flex-grow-0"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-col justify-between items-start py-2.5 px-0 gap-20 w-[105px] h-[180px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-0 flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] flex-none order-none flex-grow-0  ">
              {products2[0]?.name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope not-italic font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {products2[0]?.author}
            </div>
          </div>
          <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
            {products2[0]?.price} $
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-start p-2.5 gap-5 absolute w-[320px] h-[200px] left-[400px] top-[1040px] bg-[#F4F4FF] border border-solid border-[#F4F4FF] border-opacity-10 rounded cursor-pointer"
        onClick={() => {
          dispatch(editBookDetail(products2[1]));
          dispatch(editPage(4));
        }}
      >
        <img
          src={olaganustubirgece}
          alt="kitap resmi"
          className="w-[120px] h-[180px] rounded flex-none order-none flex-grow-0"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-col justify-between items-start py-2.5 px-0 gap-20 w-[105px] h-[180px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-0 flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] flex-none order-none flex-grow-0  ">
              {products2[1]?.name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope not-italic font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {products2[1]?.author}
            </div>
          </div>
          <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
            {products2[1]?.price} $
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-start p-2.5 gap-5 absolute w-[320px] h-[200px] left-[740px] top-[1040px] bg-[#F4F4FF] border border-solid border-[#F4F4FF] border-opacity-10 rounded cursor-pointer"
        onClick={() => {
          dispatch(editBookDetail(products2[2]));
          dispatch(editPage(4));
        }}
      >
        <img
          src={gencwertherinacilari}
          alt="kitap resmi"
          className="w-[120px] h-[180px] rounded flex-none order-none flex-grow-0"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-col justify-between items-start py-2.5 px-0 gap-20 w-[105px] h-[180px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-0 flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] flex-none order-none flex-grow-0  ">
              {products2[2]?.name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope not-italic font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {products2[2]?.author}
            </div>
          </div>
          <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
            {products2[2]?.price} $
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-start p-2.5 gap-5 absolute w-[320px] h-[200px] left-[1080px] top-[1040px] bg-[#F4F4FF] border border-solid border-[#F4F4FF] border-opacity-10 rounded cursor-pointer"
        onClick={() => {
          dispatch(editBookDetail(products2[2]));
          dispatch(editPage(4));
        }}
      >
        <img
          src={gencwertherinacilari}
          alt="kitap resmi"
          className="w-[120px] h-[180px] rounded flex-none order-none flex-grow-0"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-col justify-between items-start py-2.5 px-0 gap-20 w-[105px] h-[180px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-0 flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] flex-none order-none flex-grow-0  ">
              {products2[2]?.name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope not-italic font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {products2[2]?.author}
            </div>
          </div>
          <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
            {products2[2]?.price} $
          </div>
        </div>
      </div>

      <div className="absolute w-[1340px] h-[264px] left-[60px] top-[1300px]">
        <div className="flex flex-row justify-between items-center p-0 gap-[912px] absolute w-[1320px] h-[44px]">
          <div className="w-[168px] h-[44px] font-manrope not-italic font-bold text-[32px] leading-[44px] text-[#090937] flex-none order-none flex-grow-0">
            {categories[2]?.name}
          </div>
          <div
            className="w-[75] h-[27px] font-manrope not-italic font-bold text-xl leading-[27px] text-[#EF684A] flex-none order-1 flex-grow-0 cursor-pointer"
            onClick={() => {
              dispatch(editCategoryDetail(3));
              dispatch(editPage(3));
            }}
          >
            View All
          </div>
        </div>
      </div>
      <div
        className="flex flex-row items-start p-2.5 gap-5 absolute w-[320px] h-[200px] left-[60px] top-[1364px] bg-[#F4F4FF] border border-solid border-[#F4F4FF] border-opacity-10 rounded cursor-pointer"
        onClick={() => {
          dispatch(editBookDetail(products3[0]));
          dispatch(editPage(4));
        }}
      >
        <img
          src={morbirfilgordumsanki}
          alt="kitap resmi"
          className="w-[120px] h-[180px] rounded flex-none order-none flex-grow-0"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-col justify-between items-start py-2.5 px-0 gap-20 w-[105px] h-[180px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-0 flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] flex-none order-none flex-grow-0  ">
              {products3[0]?.name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope not-italic font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {products3[0]?.author}
            </div>
          </div>
          <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
            {products3[0]?.price} $
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-start p-2.5 gap-5 absolute w-[320px] h-[200px] left-[400px] top-[1364px] bg-[#F4F4FF] border border-solid border-[#F4F4FF] border-opacity-10 rounded cursor-pointer"
        onClick={() => {
          dispatch(editBookDetail(products3[1]));
          dispatch(editPage(4));
        }}
      >
        <img
          src={alevsaclicocuk}
          alt="kitap resmi"
          className="w-[120px] h-[180px] rounded flex-none order-none flex-grow-0"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-col justify-between items-start py-2.5 px-0 gap-20 w-[105px] h-[180px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-0 flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] flex-none order-none flex-grow-0  ">
              {products3[1]?.name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope not-italic font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {products3[1]?.author}
            </div>
          </div>
          <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
            {products3[1]?.price} $
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-start p-2.5 gap-5 absolute w-[320px] h-[200px] left-[740px] top-[1364px] bg-[#F4F4FF] border border-solid border-[#F4F4FF] border-opacity-10 rounded cursor-pointer"
        onClick={() => {
          dispatch(editBookDetail(products3[2]));
          dispatch(editPage(4));
        }}
      >
        <img
          src={melodi}
          alt="kitap resmi"
          className="w-[120px] h-[180px] rounded flex-none order-none flex-grow-0"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-col justify-between items-start py-2.5 px-0 gap-20 w-[105px] h-[180px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-0 flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] flex-none order-none flex-grow-0  ">
              {products3[2]?.name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope not-italic font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {products3[2]?.author}
            </div>
          </div>
          <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
            {products3[2]?.price} $
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-start p-2.5 gap-5 absolute w-[320px] h-[200px] left-[1080px] top-[1364px] bg-[#F4F4FF] border border-solid border-[#F4F4FF] border-opacity-10 rounded cursor-pointer"
        onClick={() => {
          dispatch(editBookDetail(products3[2]));
          dispatch(editPage(4));
        }}
      >
        <img
          src={melodi}
          alt="kitap resmi"
          className="w-[120px] h-[180px] rounded flex-none order-none flex-grow-0"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-col justify-between items-start py-2.5 px-0 gap-20 w-[105px] h-[180px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-0 flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] flex-none order-none flex-grow-0  ">
              {products3[2]?.name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope not-italic font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {products3[2]?.author}
            </div>
          </div>
          <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
            {products3[2]?.price} $
          </div>
        </div>
      </div>

      <div className="absolute w-[1340px] h-[264px] left-[60px] top-[1624px]">
        <div className="flex flex-row justify-between items-center p-0 gap-[912px] absolute w-[1320px] h-[44px]">
          <div className="w-[168px] h-[44px] font-manrope not-italic font-bold text-[32px] leading-[44px] text-[#090937] flex-none order-none flex-grow-0">
            {categories[3]?.name}
          </div>
          <div
            className="w-[75] h-[27px] font-manrope not-italic font-bold text-xl leading-[27px] text-[#EF684A] flex-none order-1 flex-grow-0 cursor-pointer"
            viewBox="0 0 20 21"
            onClick={() => {
              dispatch(editCategoryDetail(4));
              dispatch(editPage(3));
            }}
          >
            View All
          </div>
        </div>
      </div>
      <div
        className="flex flex-row items-start p-2.5 gap-5 absolute w-[320px] h-[200px] left-[60px] top-[1688px] bg-[#F4F4FF] border border-solid border-[#F4F4FF] border-opacity-10 rounded cursor-pointer"
        onClick={() => {
          dispatch(editBookDetail(products4[0]));
          dispatch(editPage(4));
        }}
      >
        <img
          src={meditasyonuntemelleri}
          alt="kitap resmi"
          className="w-[120px] h-[180px] rounded flex-none order-none flex-grow-0"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-col justify-between items-start py-2.5 px-0 gap-20 w-[105px] h-[180px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-0 flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] flex-none order-none flex-grow-0  ">
              {products4[0]?.name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope not-italic font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {products4[0]?.author}
            </div>
          </div>
          <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
            {products4[0]?.price} $
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-start p-2.5 gap-5 absolute w-[320px] h-[200px] left-[400px] top-[1688px] bg-[#F4F4FF] border border-solid border-[#F4F4FF] border-opacity-10 rounded cursor-pointer"
        onClick={() => {
          dispatch(editBookDetail(products4[1]));
          dispatch(editPage(4));
        }}
      >
        <img
          src={metafizik}
          alt="kitap resmi"
          className="w-[120px] h-[180px] rounded flex-none order-none flex-grow-0"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-col justify-between items-start py-2.5 px-0 gap-20 w-[105px] h-[180px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-0 flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] flex-none order-none flex-grow-0  ">
              {products4[1]?.name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope not-italic font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {products4[1]?.author}
            </div>
          </div>
          <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
            {products4[1]?.price} $
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-start p-2.5 gap-5 absolute w-[320px] h-[200px] left-[740px] top-[1688px] bg-[#F4F4FF] border border-solid border-[#F4F4FF] border-opacity-10 rounded cursor-pointer"
        onClick={() => {
          dispatch(editBookDetail(products4[2]));
          dispatch(editPage(4));
        }}
      >
        <img
          src={mutluolmasanati}
          alt="kitap resmi"
          className="w-[120px] h-[180px] rounded flex-none order-none flex-grow-0"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-col justify-between items-start py-2.5 px-0 gap-20 w-[105px] h-[180px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-0 flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] flex-none order-none flex-grow-0  ">
              {products4[2]?.name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope not-italic font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {products4[2]?.author}
            </div>
          </div>
          <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
            {products4[2]?.price} $
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-start p-2.5 gap-5 absolute w-[320px] h-[200px] left-[1080px] top-[1688px] bg-[#F4F4FF] border border-solid border-[#F4F4FF] border-opacity-10 rounded cursor-pointer"
        onClick={() => {
          dispatch(editBookDetail(products4[2]));
          dispatch(editPage(4));
        }}
      >
        <img
          src={mutluolmasanati}
          alt="kitap resmi"
          className="w-[120px] h-[180px] rounded flex-none order-none flex-grow-0"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(98, 81, 221, 0.2))" }}
        />
        <div className="flex flex-col justify-between items-start py-2.5 px-0 gap-20 w-[105px] h-[180px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col justify-center items-start p-0 gap-1 w-[105px] h-[53px] flex-none order-0 flex-grow-0">
            <div className="w-[51px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] flex-none order-none flex-grow-0  ">
              {products4[2]?.name}
            </div>
            <div className="w-[105px] h-[22px] font-manrope not-italic font-semibold text-base leading-[22px] text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
              {products4[2]?.author}
            </div>
          </div>
          <div className="w-[82px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#6251DD] flex-none order-none flex-grow-0">
            {products4[2]?.price} $
          </div>
        </div>
      </div>

      <Footer top={1880} />
    </div>
  );
}

export default Home;
