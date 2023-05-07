import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FooterTop from "./FooterTop";
import { AuthUserContext } from "../components/contexts/auth-context";

const ProductDetail = () => {
  const [demo, setDemo] = useState([]);

  const [authUser] = useContext(AuthUserContext);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:8000/get-product-data", authUser)
      .then((items) => {
        setDemo(items.data);
      })
      .catch((error) => console.log(error));
  }, [authUser]);

  // const filterProduct = demo.filter((props) => props.id === 10 )
  // console.log("🚀 ~ file: ProductDetail.jsx:18 ~ ProductDetail ~ filterProduct:", filterProduct)

  return (
    <>
      <div className="bg-slate-50">
        <div className="max-w-[1300px] mx-auto flex flex-col gap-2 border-t-2 border-slate-50">
          <div className="row  flex h-8 items-center">
            <div className="item">
              <Link to="/">
                <span className="text-20 font-medium">Trang chủ</span>
              </Link>
            </div>
            <span className="px-5">/</span>
            <div className="item px-3">
              <span>Máy tính xách tay</span>
            </div>
          </div>
          <div className="product-detail">
            <div className="product-name">
              <h2 className="font-semibold leading-10 text-[20px] text-gray-600 h-10">
                {demo.name}
              </h2>
            </div>
            <div className="main-product-detail flex gap-2 w-full ">
              {/* product left */}
              <div className="main-product-left w-[390px] bg-white p-3 rounded-2xl flex flex-col">
                <div className="img-big">
                  <a href="">
                    <img src={demo.image} className="w-full" alt="#" />
                  </a>
                </div>
                <div className="img-cart grid grid-cols-3 gap-2 w-full border justify-between ">
                  <img
                    className="h-[120px] w-full"
                    src="https://laptop88.vn/media/product/5212_msi_bravo_15_b5dd_275vn_900x900_5.jpg"
                    alt=""
                  />
                  <img
                    className="h-[120px] w-full"
                    src="https://laptop88.vn/media/product/120_4766_acer_nitro_5_5669_ph__m.jpg"
                    alt=""
                  />
                  <img
                    className="h-[120px] w-full"
                    src="https://laptop88.vn/media/product/7318_laptop_asus_zenbook_q409za.jpg"
                    alt=""
                  />
                </div>
                <div className="offer-detail border mt-4 border-[#ff9300] rounded-lg ">
                  <div className="title flex h-10 items-center p-2 text-[#ff9300] bg-[#fff2e1] rounded-lg ">
                    <i className="ri-gift-line text-[20px] "></i>
                    <p className="text-[18px] px-2 font-[600] ">
                      Thông tin khuyến mãi
                    </p>
                  </div>
                  <div className="content-offer px-3 my-2 flex flex-col gap-3">
                    <div className="pricate-offer gift flex">
                      <i className="ri-check-line mr-3 text-[16px] font-bold "></i>
                      <span>
                        Balo Acer Gaming SUV <br /> (Không tặng kèm balo
                        Laptop88, tặng đến khi hết quà){" "}
                      </span>
                    </div>
                    <div className="pricate-offer gift flex">
                      <i className="ri-check-line mr-3 text-[16px] font-bold "></i>
                      <span>
                        {" "}
                        Miễn phí dán Skin mặt lưng Laptop - sử dụng tại các cơ
                        sở Skin88 trị giá 180.000đ{" "}
                      </span>
                    </div>
                    <div className="pricate-offer gift flex">
                      <i className="ri-check-line mr-3 text-[16px] font-bold "></i>
                      <span> Hệ điều hành Windows Bản Quyền theo máy </span>
                    </div>
                    <div className="pricate-offer gift flex">
                      <i className="ri-check-line mr-3 text-[16px] font-bold "></i>
                      <span>
                        KHÔNG ÁP DỤNG THANH TOÁN QUA CÁC LOẠI THẺ: Visa, Master,
                        JCB, Amex{" "}
                      </span>
                    </div>
                    <div className="pricate-offer gift flex">
                      <i className="ri-check-line mr-3 text-[16px] font-bold "></i>
                      <span>
                        {" "}
                        KHÁCH HÀNG ĐƯỢC CHỌN 1 TRONG 2 OPTION KHUYẾN MẠI: <br />
                        - KM1: Cấu hình gốc RAM 8GB - Giá: 18.490.000đ <br /> -
                        KM2: (*)Tặng thêm 8GB RAM - Giá: 18.990.000đ{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="note-pay pt-3 pl-2">
                  <p>
                    ✅ Các sản phẩm bán GIÁ SHOCK, các quà tặng đánh dấu (*) sẽ
                    không áp dụng khi thanh toán qua các loại thẻ: VISA / MASTER
                    / JCB / Amex.
                  </p>
                </div>
              </div>
              {/* product mid */}
              <div className="main-product-mid w-[490px] bg-white p-[10px] rounded-2xl ">
                <div className="price">
                  <h1 className="text-[24px] font-[700] text-[#ef1200] pt-4 ">
                    {demo.price}
                  </h1>
                </div>
                <div className="old-price mt-2 flex pt-2">
                  <b>Giá gốc:</b>
                  <del className="pl-3 pr-2">XX.XXX.XXX</del>Đ
                  <p className="text-red-600 px-3">-23%</p>
                </div>
                <div className="items-combo-config grid grid-cols-3 gap-3 mt-5 ">
                  <div className="item-combo border border-gray-[600] bg-slate-50 p-3 hover:bg-slate-100 hover:text-[#ff9300] transition-all rounded-lg cursor-pointer">
                    <p>Nitro 5 Pro Max | R7 + RTX 3050</p>
                    <b>1x.xxx.xxx VNĐ</b>
                  </div>
                  <div className="item-combo border border-gray-[600] bg-slate-50 p-3 hover:bg-slate-100 hover:text-[#ff9300] transition-all rounded-lg cursor-pointer">
                    <p>Nitro 5 Pro Max | R7 + RTX 3050</p>
                    <b>1x.xxx.xxx VNĐ</b>
                  </div>
                  <div className="item-combo border border-gray-[600] bg-slate-50 p-3 hover:bg-slate-100 hover:text-[#ff9300] transition-all rounded-lg cursor-pointer">
                    <p>Nitro 5 Pro Max | R7 + RTX 3050</p>
                    <b>1x.xxx.xxx VNĐ</b>
                  </div>
                  <div className="item-combo border border-gray-[600] bg-slate-50 p-3 hover:bg-slate-100 hover:text-[#ff9300] transition-all rounded-lg cursor-pointer">
                    <p>Nitro 5 Pro Max | R7 + RTX 3050</p>
                    <b>1x.xxx.xxx VNĐ</b>
                  </div>
                  <div className="item-combo border border-gray-[600] bg-slate-50 p-3 hover:bg-slate-100 hover:text-[#ff9300] transition-all rounded-lg cursor-pointer">
                    <p>Nitro 5 Pro Max | R7 + RTX 3050</p>
                    <b>1x.xxx.xxx VNĐ</b>
                  </div>
                  <div className="item-combo border border-gray-[600] bg-slate-50 p-3 hover:bg-slate-100 hover:text-[#ff9300] transition-all rounded-lg cursor-pointer">
                    <p>Nitro 5 Pro Max | R7 + RTX 3050</p>
                    <b>1x.xxx.xxx VNĐ</b>
                  </div>
                  <div className="item-combo border border-gray-[600] bg-slate-50 p-3 hover:bg-slate-100 hover:text-[#ff9300] transition-all rounded-lg cursor-pointer">
                    <p>Nitro 5 Pro Max | R7 + RTX 3050</p>
                    <b>1x.xxx.xxx VNĐ</b>
                  </div>
                  <div className="item-combo border border-gray-[600] bg-slate-50 p-3 hover:bg-slate-100 hover:text-[#ff9300] transition-all rounded-lg cursor-pointer">
                    <p>Nitro 5 Pro Max | R7 + RTX 3050</p>
                    <b>1x.xxx.xxx VNĐ</b>
                  </div>
                  <div className="item-combo border border-gray-[600] bg-slate-50 p-3 hover:bg-slate-100 hover:text-[#ff9300] transition-all rounded-lg cursor-pointer">
                    <p>Nitro 5 Pro Max | R7 + RTX 3050</p>
                    <b>1x.xxx.xxx VNĐ</b>
                  </div>
                  <div className="item-combo border border-gray-[600] bg-slate-50 p-3 hover:bg-slate-100 hover:text-[#ff9300] transition-all rounded-lg cursor-pointer">
                    <p>Nitro 5 Pro Max | R7 + RTX 3050</p>
                    <b>1x.xxx.xxx VNĐ</b>
                  </div>
                  <div className="item-combo border border-gray-[600] bg-slate-50 p-3 hover:bg-slate-100 hover:text-[#ff9300] transition-all rounded-lg cursor-pointer">
                    <p>Nitro 5 Pro Max | R7 + RTX 3050</p>
                    <b>1x.xxx.xxx VNĐ</b>
                  </div>
                </div>
                <div className="config-holder px-2 w-full">
                  <div className="item w-full mt-6 flex items-center">
                    <div className="name w-[120px] ">
                      <span className="text-gray-600">CPU:</span>
                    </div>
                    <div className="border px-3 py-1 rounded-xl border-[#ff9300] ">
                      <span>{demo.cpu} </span>
                    </div>
                  </div>
                  <div className="item w-full mt-4 flex items-center">
                    <div className="name w-[120px] ">
                      <span className="text-gray-600">RAM:</span>
                    </div>
                    <div className="border px-3 py-1 rounded-xl border-[#ff9300] ">
                      <span>16GB DDR4 </span>
                    </div>
                  </div>
                  <div className="item w-full mt-4 flex items-center">
                    <div className="name w-[120px] ">
                      <span className="text-gray-600">Ổ Cứng:</span>
                    </div>
                    <div className="border px-3 py-1 rounded-xl border-[#ff9300] ">
                      <span>{demo.ssd} </span>
                    </div>
                  </div>
                  <div className="item w-full mt-4 flex items-center">
                    <div className="name w-[120px] ">
                      <span className="text-gray-600">Card đồ họa:</span>
                    </div>
                    <div className="border px-3 py-1 rounded-xl border-[#ff9300] ">
                      <span>{demo.card} </span>
                    </div>
                  </div>
                  <div className="item w-full mt-4 flex items-center">
                    <div className="name w-[120px] ">
                      <span className="text-gray-600">Màn hình:</span>
                    </div>
                    <div className="border px-3 py-1 rounded-xl border-[#ff9300] ">
                      <span>{demo.cpu} </span>
                    </div>
                  </div>
                </div>
                {/*--------------- end config ------------- */}
                <div className="end-config mt-6 px-2">
                  <div className="chat border w-full flex justify-center py-3 bg-[#0084cb] rounded-3xl hover:bg-[#0093e3]  ">
                    <span className="font-semibold text-white text-lg">
                      Chat với nhân viên tư vấn
                    </span>
                  </div>
                  <div className="buy mt-3">
                    <div className="buy-now flex items-center gap-3">
                      <button
                        onClick={() => {
                          navigate("/cart");
                        }}
                        className="add w-full p-2 flex flex-col justify-center items-center bg-[#ff7000] hover:bg-[#ff9300] transition-all rounded-xl  "
                      >
                        <span
                          className="font-semibold text-white"
                          onClick={() => {}}
                        >
                          Thêm Vào Giỏ Hàng
                        </span>
                        <span className="text-sm text-white ">
                          (Thêm vào ở đây)
                        </span>
                      </button>
                      <button
                        onClick={() => {
                          navigate("/cart");
                        }}
                        className="add w-full p-2 flex flex-col justify-center items-center bg-[#ff7000] hover:bg-[#ff9300] transition-all rounded-xl  "
                      >
                        <span className="font-semibold text-white">
                          Mua Ngay
                        </span>
                        <span className="text-sm text-white">
                          (Giao tận nơi )
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* product right */}
              <div className="main-product-right w-[calc(100%-390px-490px)] bg-white rounded-2xl">
                <div className="product-warranty">
                  <h3 className="product-title">Thông tin bảo hành</h3>
                  <div className="content">
                    <p>✅Bảo hành 12 tháng chính hãng - Xem chính sách</p>
                    <p>✔️Tùy chọn:</p>
                    <p>
                      - Gói BẢO HÀNH VÀNG : gia tăng thêm 12 tháng bảo hành{" "}
                    </p>
                    <p>
                      - Gói BẢO HÀNH KIM CƯƠNG : : gia tăng thêm 24 tháng bảo
                      hành
                    </p>
                    <p>✅ Giá ở trên đã bao gồm 10% VAT</p>
                    <p>✅ MIỄN PHÍ GIAO HÀNG TẬN NHÀ</p>
                    <p>
                      - Với đơn hàng từ 4.000.000 đồng: Miễn phí giao hàng cho
                      đơn hàng 5km tính từ cửa hàng Laptop88 gần nhất
                    </p>
                    <p>
                      - Với đơn hàng trên 4.000.000 đồng: Miễn phí giao hàng
                      (khách hàng chịu phí bảo hiểm hàng hóa nếu có)
                    </p>
                  </div>
                </div>
                <div className="product-yentammuahang">
                  <h3 className="title">Yên tâm mua hàng</h3>
                  <div className="content">
                    <p>- Hệ thống cửa hàng toàn quốc</p>
                    <p>- Đại lý phân phối chính hãng </p>
                    <p>- Giá luôn tốt nhất</p>
                    <p>- Hỗ trợ trả góp lãi suất thấp</p>
                    <p>- Bảo hành dài, hậu mãi chu đáo</p>
                    <p>- Bảo hành dài, hậu mãi chu đáo</p>
                  </div>
                </div>
                <div className="banner-sale-detail">
                  <img
                    src="https://laptop88.vn/template/giaodien_2022/images/banner-right-detail.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <FooterTop />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
