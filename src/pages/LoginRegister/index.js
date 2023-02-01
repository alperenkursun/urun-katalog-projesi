import { useState } from "react";
import login from "../../images/login.png";

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative w-[1440px] h-[1024px] bg-white mx-auto">
      <img
        src={login}
        alt="login image"
        className="absolute w-[720px] h-[1024px] left-0 top-0 "
      />

      <svg
        width="120"
        height="78"
        viewBox="0 0 120 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // className="absolute left-0 right-0 top-0 bottom-0"
        className="absolute left-[1020px] top-[80px]"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.0847129 34.0698L27.9196 0L38.1296 0.0140442L53.086 18.4245L42.8645 26.6242L33.0044 14.487L13.5738 38.2701L33.0345 63.1256L82.6863 0.0908642L93.0336 0.0945839L119.83 34.1644L120 41.977L94.4499 77.528L84.1331 78L68.1383 59.5896L78.0818 51.0591L88.616 63.1842L106.457 38.3598L87.8546 14.7081L38.1911 77.7578L27.8348 77.7427L0 42.1917L0.0847129 34.0698Z"
          fill="#6251DD"
        />
      </svg>
      <div className="absolute w-[174px] h-[33px] left-[880px] top-[269px] font-manrope not-italic font-semibold text-2xl leading-[33px] text-[#090937] opacity-60">
        Welcome Back!
      </div>
      <div className="absolute w-[336px] h-[44px] left-[880px] top-[312px] font-manrope not-italic font-bold text-[32px] leading-[44px] text-[#090937]">
        Login to your account
      </div>
      <div
        className={`absolute w-[94.84px] h-[27px] left-[880px]  font-manrope not-italic font-semibold text-xl leading-[27px] text-[#090937] ${
          isLogin ? "top-[436px]" : "top-[573px] "
        }`}
      >
        E-mail
      </div>
      <input
        type="email"
        placeholder="john@mail.com"
        className={`flex flex-row items-center p-4 gap-4 absolute w-[400px] h-[60px] left-[880px]  bg-[#F4F4FF] rounded placeholder:w-[141px] placeholder:h-[27px] placeholder:font-manrope placeholder:font-normal placeholder:text-sm placeholder:leading-[27px] placeholder:text-[#090937] placeholder:opacity-40 flex-none order-none grow-0 ${
          isLogin ? "top-[473px]" : "top-[610px]"
        }`}
      />
      <div
        className={`absolute w-[92px] h-[27px] left-[880px]  font-manrope not-italic font-bold text-xl leading-[27px] text-[#090937] ${
          isLogin ? "top-[573px]" : "top-[710px]"
        }`}
      >
        Password
      </div>
      <input
        type="password"
        className={`flex flex-row items-center p-4 gap-2.5 absolute w-[400px] h-[60px] left-[880px]  bg-[#F4F4FF] rounded z-20 ${
          isLogin ? "top-[610px]" : "top-[747px]"
        }`}
      />
      <div
        className={`flex flex-row items-center p-4 gap-2.5 absolute w-[400px] h-[60px] left-[880px]  bg-[#F4F4FF] rounded z-20 ${
          isLogin ? "top-[610px]" : "top-[747px]"
        }`}
      >
        <div
          className="absolute w-[8px] h-[8px] bg-[#090937] opacity-40 z-30"
          style={{ left: "4%", right: "94%", top: "43.33", bottom: "43.33%" }}
        ></div>
        <div
          className="absolute w-[8px] h-[8px] bg-[#090937] opacity-40 z-30"
          style={{ left: "8%", right: "90%", top: "43.33", bottom: "43.33%" }}
        ></div>
        <div
          className="absolute w-[8px] h-[8px] bg-[#090937] opacity-40 z-30"
          style={{ left: "12%", right: "86%", top: "43.33", bottom: "43.33%" }}
        ></div>
        <div
          className="absolute w-[8px] h-[8px] bg-[#090937] opacity-40 z-30"
          style={{ left: "16%", right: "82%", top: "43.33", bottom: "43.33%" }}
        ></div>
        <div
          className="absolute w-[8px] h-[8px] bg-[#090937] opacity-40 z-30"
          style={{ left: "20%", right: "78%", top: "43.33", bottom: "43.33%" }}
        ></div>
        <div
          className="absolute w-[8px] h-[8px] bg-[#090937] opacity-40 z-30"
          style={{ left: "24%", right: "74%", top: "43.33", bottom: "43.33%" }}
        ></div>
        <div
          className="absolute w-[8px] h-[8px] bg-[#090937] opacity-40 z-30"
          style={{ left: "28%", right: "70%", top: "43.33", bottom: "43.33%" }}
        ></div>
        <div
          className="absolute w-[8px] h-[8px] bg-[#090937] opacity-40 z-30"
          style={{ left: "32%", right: "66%", top: "43.33", bottom: "43.33%" }}
        ></div>
      </div>
      <div className="flex flex-row items-center p-0 gap-[71px] absolute w-[400px] h-6 left-[880px] top-[680px]">
        <div className="flex flex-row items-center p-0 gap-1 w-[139px] h-6 flex-none order-none grow-0">
          <div
            className={`w-6 h-6 relative flex items-center justify-center order-none grow-0 ${
              isLogin ? "flex" : "hidden"
            }`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 18C1.45 18 0.979 17.8043 0.587 17.413C0.195667 17.021 0 16.55 0 16V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H16C16.55 0 17.021 0.195667 17.413 0.587C17.8043 0.979 18 1.45 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.021 17.8043 16.55 18 16 18H2ZM2 16H16V2H2V16Z"
                fill="#6251DD"
              />
            </svg>
          </div>
          <div
            className={`flex font-manrope  not-italic font-bold leading-[18px] text-[#6251DD] order-1 items-center text-base ${
              isLogin ? "flex" : "hidden"
            }`}
          >
            Remember Me
          </div>
        </div>
      </div>
      <div
        className={`absolute w-[92px] h-[27px] left-[880px] top-[436px] font-manrope not-italic font-bold text-xl leading-[27px] text-[#090937] ${
          isLogin ? "hidden" : "block"
        }`}
      >
        Name
      </div>
      <input
        type="text"
        placeholder="John Doe"
        className={`flex flex-row items-center p-4 gap-4 absolute w-[400px] h-[60px] left-[880px] top-[473px] bg-[#F4F4FF] rounded placeholder:w-[141px] placeholder:h-[27px] placeholder:font-manrope placeholder:font-normal placeholder:text-sm placeholder:leading-[27px] placeholder:text-[#090937] placeholder:opacity-40 flex-none order-none grow-0 ${
          isLogin ? "hidden" : "block"
        }`}
      />
      <div
        className="flex flex-row justify-center items-center px-5 py-2.5 gap-2.5 absolute w-[400px] h-[60px] left-[880px] top-[854px] bg-[#EF6B4A] rounded font-manrope not-italic font-bold text-xl leading-[33px] text-white cursor-pointer"
        onClick={() => {
          isLogin ? setIsLogin(true) : setIsLogin(false);
        }}
      >
        {isLogin ? "Login" : "Register"}
      </div>
      <div
        className="flex flex-row justify-center items-center px-5 py-2.5 gap-2.5 absolute w-[400px] h-[60px] left-[880px] top-[924px] bg-white rounded border border-solid border-[#6251DD] font-manrope not-italic font-bold text-xl leading-[33px] text-[#6251DD] cursor-pointer"
        onClick={() => {
          isLogin ? setIsLogin(false) : setIsLogin(true);
        }}
      >
        {isLogin ? "Register" : "Login"}
      </div>
    </div>
  );
}

export default LoginRegister;
