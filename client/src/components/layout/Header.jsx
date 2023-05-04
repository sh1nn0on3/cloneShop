const Header = () => {
  return (
    <>
      <div className="h-[90px] bg-black w-full">
        <div className="max-w-[container] flex p-3 gap-5  justify-center items-center">
          <img
            src="https://laptop88.vn/media/banner/logo_logo882022.png"
            alt="#"
            className="w-60 leading-[80px]  "
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
            <a
              href="#"
              className="font-sans bg-[#ff9500] text-black rounded-[16px]  px-5 py-1"
            >
              Chính sách
            </a>
            <a
              href="#"
              className="font-sans bg-[#ff9500] text-black rounded-[16px]  px-5 py-1"
            >
              Tuyển dụng
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Header;
