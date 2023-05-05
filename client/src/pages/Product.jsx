import axios from "axios";
import { useEffect, useState } from "react";

const Product = () => {
  const [data, setData] = useState([]);
  console.log("🚀 ~ file: Product.jsx:6 ~ Product ~ data:", data);
  const apiData = "http://localhost:8001/get-data";
  useEffect(() => {
    axios
      .get(apiData)
      .then((item) => {
        setData(item.data);
      })
      .catch((error) => console.log(error));

    return () => {};
  }, []);

  return (
    <>
      <div className="max-w-[1300px] mx-auto flex gap-5 border-t-2 border-slate-50">
        <div className="list-product grid grid-cols-5 gap-5">
          {data.map((item, index) => (
            <div key={index} className="product bg-white h-[600px] rounded-lg">
              <div className="product-img w-full ">
                <a href="#"></a>
                <img
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="product-info flex flex-col gap-4 w-full h-[300px] ">
                <div className="product-title w-full mt-5 h text-center overflow-hidden text-ellipsis line-clamp-2 px-2 hover:text-[#ff9300] ">
                  <a href="#">
                    {item.name}
                  </a>
                </div>
                <div className="product-promotion px-4">
                  <table>
                    <tbody>
                      <tr className="h-8">
                        <td className="w-20">Cpu</td>
                        <td className="overflow-hidden text-ellipsis line-clamp-2">{item.cpu}</td>
                      </tr>
                      <tr className="h-8">
                        <td>Ổ cứng</td>
                        <td className="overflow-hidden text-ellipsis line-clamp-2">{item.ssd}</td>
                      </tr>
                      <tr className="h-8">
                        <td>Card</td>
                        <td className="overflow-hidden text-ellipsis line-clamp-2">{item.card}</td>
                      </tr>
                      <tr className="h-8">
                        <td>M.Hình</td>
                        <td className="overflow-hidden text-ellipsis line-clamp-2">{item.screen}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
                <div className="product-price w-full flex justify-center items-center ">
                  <span className="py-2 px-8 border bg-[#ff9300] text-[20px] font-semibold text-gray-600 rounded-3xl ">
                    {item.price}
                  </span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
