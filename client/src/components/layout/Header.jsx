import { useNavigate } from "react-router-dom";
import { AuthUserContext } from "../contexts/auth-context";
import { useContext, useState } from "react";

const Header = () => {
  const [headerData, setHeaderData] = useState({
    data1: "Đăng ký",
    data2: "Đăng Nhập",
  });

  const [authUser] = useContext(AuthUserContext);
  console.log("🚀 ~ file: Header.jsx:12 ~ Header ~ authUser:", authUser);
  const navigate = useNavigate();

  const handleData1 = () => {
    navigate("/register")
  };

  const handleData2 = () => {
    navigate("/login")

  };

  return (
    <>
      <div className="header-top">
        <div className="h-[90px] bg-black w-full">
          <div className="max-w-[container] flex p-3 gap-5  justify-center items-center">
            <img
              src="https://laptop88.vn/media/banner/logo_logo882022.png"
              alt="#"
              className="w-60 leading-[80px] cursor-pointer "
              onClick={() => {
                navigate("/");
              }}
            />
            <div className="flex">
              <input
                type="text"
                className=" p-5 w-60 h-10 border rounded-l-[32px] text-gray-700 outline-none "
                placeholder="Tìm kiếm..."
              />
              <div className="flex justify-center items-center pr-1  w-12 rounded-r-[32px] bg-[#ff9300] cursor-pointer ">
                <a className="">
                  <i className="ri-search-line text-lg font-semibold "></i>
                </a>
              </div>
            </div>
            <div className="flex text-[#ff9300] gap-1 ">
              <div className="">
                <i className="ri-contacts-line text-[32px] "></i>
              </div>
              <p className="font-sans">
                Góp ý <br /> Khiếu nại
              </p>
            </div>
            <div className="flex text-[#ff9300] gap-1 ">
              <div className="">
                <i className="ri-contacts-line text-[32px] "></i>
              </div>
              <p className="font-sans ">
                Tra cứu <br /> Bảo hành
              </p>
            </div>
            <div className="flex text-[#ff9300] gap-1 ">
              <div className="">
                <i className="ri-contacts-line text-[32px] "></i>
              </div>
              <p className="font-sans">
                Liên hệ <br /> Trực tiếp
              </p>
            </div>
            <div className="flex text-[#ff9300] gap-1 ">
              <div className="">
                <i className="ri-contacts-line text-[32px] "></i>
              </div>
              <p className="font-sans">
                Tư vấn <br /> Mua hàng
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="rounded-[16px]  px-5 py-1 bg-[#ff9500] flex justify-center">
                <button
                  className="font-sans text-center text-black"
                  onClick={handleData1}
                >
                  {headerData.data1}
                </button>
              </div>
              <div className="rounded-[16px]  px-5 py-1 bg-[#ff9500] flex justify-center">
                <button className="font-sans  text-black" onClick={handleData2}>
                  {headerData.data2}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom w-full h-14 ">
        <div className="max-w-[1300px] mx-auto flex items-center gap-5 ">
          <div className="title  bg-[#ff9300] h-14 w-[260px] flex justify-center items-center border-slate-50 ">
            <i className="ri-bar-chart-horizontal-line text-[20px] p-2 font-bold "></i>
            <h3 className="text-[20px] font-semibold  ">Danh sách sản phẩm</h3>
          </div>
          <div className="flex gap-5 justify-center items-center ">
            <div className="flex justify-center items-center ">
              <div className="p-1">
                <div className=" h-4 w-4 pulse-icon flex relative ">
                  <span className="animate-ping absolute inline-flex bg-[#ff9300] rounded-full opacity-75 h-full w-full "></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff9330] translate-x-1 translate-y-1 "></span>
                </div>
              </div>
              <div className="content">
                <p className="text-[14px] hover:text-[#ff9300] transition-all font-[500]  ">
                  Zenbook Q409 Gen 12 - Màn Đẹp 15.xxx
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="p-1">
                <div className=" h-4 w-4 pulse-icon flex relative ">
                  <span className=" animation-1000 animate-ping absolute inline-flex bg-[#ff9300] rounded-full opacity-75 h-full w-full "></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff9330] translate-x-1 translate-y-1 "></span>
                </div>
              </div>
              <div className="content">
                <p className="text-[14px] hover:text-[#ff9300] transition-all font-[500] ">
                  Dell Gaming G16 7620 Siêu Khủng Chuẩn Màu!
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-1">
                <div className=" h-4 w-4 pulse-icon flex relative ">
                  <span className="animate-ping absolute inline-flex bg-[#ff9300] rounded-full opacity-75 h-full w-full "></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff9330] translate-x-1 translate-y-1 "></span>
                </div>
              </div>
              <div className="content">
                <p className="text-[14px] hover:text-[#ff9300] transition-all font-[500]  ">
                  {" "}
                  Victus chính hãng RTX 3050 - Giá Shock
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
