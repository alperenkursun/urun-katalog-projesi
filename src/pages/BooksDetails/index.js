import React from "react";
import Exit from "../../components/Exit";
import Navbar from "../../components/Navbar";
import dune from "../../images/dune.png";
import { editPage, selectBookDetail } from "../../redux/state/stateSlice";
import { useSelector, useDispatch } from "react-redux";

function BooksDetails() {
  const bookDetail = useSelector(selectBookDetail);
  const dispatch = useDispatch();
  return (
    <div className="relative w-[1440px] h-[1024px] bg-white mx-auto my-0">
      <Navbar />
      <Exit />
      <div className="flex flex-row items-center p-0 gap-2.5 absolute w-[1320px] h-[33px] left-[60px] top-[160px]">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
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
          Best Seller
        </div>
      </div>
      <div className="box-border flex flex-col items-center p-[60px] gap-5 absolute w-[420px] h-[570px] left-[60px] top-[224px] bg-[#F4F4FF] border border-solid border-[#090937] border-opacity-10 rounded">
        <img src={dune} alt="kitap resmi" />
      </div>
      <div className="flex flex-col items-start p-0 gap-2.5 absolute w-[209px] h-[109px] left-[560px] top-[224px]">
        <div className="w-[101px] h-[55px] font-manrope not-italic font-semibold text-[40px] leading-[55px] text-black flex-none order-none flex-grow-0">
          {bookDetail.name}
        </div>
        <div className="w-[209px] h-[44px] font-manrope not-italic font-semibold text-[32px] leading-[44px] text-black opacity-60 flex-none order-1 flex-grow-0">
          {bookDetail.author}
        </div>
      </div>
      <div className="flex flex-col items-start p-0 gap-2.5 absolute w-[820px] h-[343px] left-[560px] top-[393px]">
        <div className="w-[111px] h-[33px] font-manrope not-italic font-bold text-2xl leading-[33px] text-[#090937] flex-none order-none flex-grow-0">
          Summary
        </div>
        <div className="w-[820px] h-[300px] font-manrope not-italic font-normal font-xl leading-[30px] text-justify text-[#090937] opacity-60 flex-none order-1 flex-grow-0">
          {bookDetail.description}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center px-5 py-2.5 gap-2.5 absolute w-[400px] h-[60px] left-[980px] top-[924px] bg-[#EF6B4A] rounded">
        <div className="w-[68px] h-[27px] font-manrope not-italic font-bold text-xl leaidng-[27px] text-white flex-none order-none flex-grow-0">
          {bookDetail.price} $
        </div>
        <div className="w-[82px] h-[27px] font-manrope not-italic font-semibold text-xl leading-[27px] text-white flex-none order-1 flex-grow-0">
          Buy Now
        </div>
      </div>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[1336px] top-[224px]"
      >
        <circle cx="22" cy="22" r="22" fill="#F4F4FF" />
        <path
          d="M29.8143 15.2714L29.8149 15.272C30.3181 15.7607 30.7202 16.3418 30.9991 16.9828C31.288 17.6497 31.4349 18.3552 31.4328 19.0821V19.0843C31.4328 19.7651 31.2928 20.4912 31.0014 21.2478L31.0008 21.2495C30.7594 21.8809 30.402 22.5509 29.9363 23.2412C29.1994 24.332 28.1724 25.4893 26.8751 26.6785C24.7187 28.6538 22.5834 30.0186 22.5057 30.0681L22.5055 30.0682L21.9449 30.4253C21.9448 30.4253 21.9448 30.4253 21.9448 30.4253C21.9435 30.4261 21.941 30.4272 21.9371 30.4272C21.9332 30.4272 21.9307 30.4261 21.9295 30.4253C21.9294 30.4253 21.9294 30.4253 21.9294 30.4253L21.3687 30.0682L21.3687 30.0681L21.3569 30.0608C21.3572 30.061 21.357 30.0609 21.3562 30.0604C21.3537 30.0588 21.345 30.0534 21.3287 30.0429C21.3092 30.0305 21.2819 30.0128 21.2472 29.9902C21.1778 29.9449 21.0799 29.8802 20.9574 29.7974C20.7124 29.6317 20.37 29.3943 19.9624 29.0964C19.146 28.4995 18.0737 27.664 16.9992 26.6786L16.9991 26.6785C15.7017 25.4891 14.6746 24.3317 13.9377 23.2409C13.473 22.552 13.1172 21.8813 12.8727 21.2474C12.5814 20.4909 12.4414 19.765 12.4414 19.0843C12.4414 18.3558 12.5886 17.6494 12.8776 16.9824C13.1555 16.3414 13.5575 15.7605 14.061 15.2726L14.0621 15.2716C14.5698 14.7778 15.1604 14.3903 15.8168 14.1204L15.8176 14.1201C16.4965 13.84 17.2152 13.6986 17.9605 13.6986C18.9938 13.6986 20.0002 13.9795 20.8737 14.5087L20.8737 14.5087C21.0827 14.6353 21.2807 14.7739 21.4678 14.9247L21.9383 15.3036L22.4087 14.9247C22.5959 14.7739 22.7939 14.6353 23.0029 14.5087L23.0029 14.5087C23.8764 13.9795 24.8828 13.6986 25.9161 13.6986L25.9178 13.6986C26.6527 13.6969 27.3806 13.8402 28.059 14.1201L28.0599 14.1205C28.7139 14.3891 29.3094 14.7799 29.8143 15.2714ZM22.6144 13.8674L22.6145 13.8676L22.6144 13.8674Z"
          stroke="#6251DD"
          stroke-width="1.5"
        />
      </svg>
    </div>
  );
}

export default BooksDetails;
