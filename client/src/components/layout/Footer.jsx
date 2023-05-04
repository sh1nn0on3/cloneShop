const Footer = () => {
  return (
    <footer className="w-full">
      <div className=" bg-[#e1e1e1] p-2 ">
        <div className="flex justify-between mx-auto max-w-[1300px] items-center ">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[#333333] text-[18px] ">
              Kênh thông tin
            </h1>
            <p>
              Mời bạn nhập email để nhận những thông tin khuyến mãi mới nhất từ
              Laptop88
            </p>
          </div>
          <input
            type="text"
            className=" w-[450px] h-10 p-5 rounded-[20px] outline-none "
            placeholder="Nhập email của bạn "
          />
        </div>
      </div>
      <div className="bg-[#fff]">
        <div className="flex justify-between max-w-[1300px] mx-auto mt-5 gap-5">
          <div className="flex flex-col w-full ">
            <h3 className="text-[18px] mb-[5px] font-semibold text-[#222222] ">
              THÔNG TIN CÔNG TY
            </h3>
            <ul>
              <li className="my-[3px] ">Laptop88.vn</li>
              <li className="my-[3px] ">Công ty cổ phần 88 group</li>
              <li className="my-[3px] ">SĐT : 090.xxxx.xxx</li>
              <li className="my-[3px] ">Website:laptop88.vn</li>
              <li className="my-[3px] ">Sở abc abc</li>
            </ul>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-[18px] mb-[5px] font-semibold text-[#222222] ">
              VỀ LAPTOP88
            </h3>
            <ul>
              <li className="my-[3px] ">Giới thiệu chung</li>
              <li className="my-[3px] ">Tuyển dụng</li>
              <li className="my-[3px] ">Chăm sóc khách hàng</li>
              <li className="my-[3px] ">Hotline: 0299.999.999</li>
              <li className="my-[3px] ">Email:contact@laptop88.vn</li>
            </ul>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-[18px] mb-[5px] font-semibold text-[#222222] ">
              CHÍNH SÁCH
            </h3>
            <ul>
              <li className="my-[3px] ">Chính sách mua hàng từ xa</li>
              <li className="my-[3px] ">Chính sách đặt cọc sản phẩm</li>
              <li className="my-[3px] ">Chính sách giao nhận - đổi trả</li>
              <li className="my-[3px] ">Chính sách bảo mật thông tin </li>
              <li className="my-[3px] ">Chính sách bảo hành</li>
              <li className="my-[3px] ">Thỏa thuận sử dụng và quy định giao dịch chung</li>
            </ul>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-[18px] mb-[5px] font-semibold text-[#222222] ">
              THANH TOÁN
            </h3>
            <ul>
              <li className="my-[3px] ">Thanh toán trực tuyến (Internet Banking) </li>
              <li className="my-[3px] ">Thanh toán khi nhận hàng (COD)</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between max-w-[1300px] mx-auto mt-10 gap-5">
          <p className="w-full flex justify-center">2020 Appy . All rights reserved</p>
          <p className="w-full flex justify-center">Terms * Privacy Polivy </p>
          <p className="w-full flex justify-center">abc abc</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
