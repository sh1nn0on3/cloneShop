import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import isEmpty from "validator/lib/isEmpty"
import isEmail from "validator/lib/isEmail"


const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [validateMsg, setValidateMsg] = useState({})

  const validateAll = () =>{
    const msg = {}
    if(isEmpty(inputs.name)){
      msg.name = "Vui lòng nhập Tên"
    }
    if(isEmpty(inputs.email)){
      msg.email = "Vui lòng nhập Email"
    }else if(!isEmail(inputs.email)){
      msg.email = "Có phải email đâu ??"
    }
    if(isEmpty(inputs.phone)){
      msg.phone = "Vui lòng nhập Phone"
    }
    if(isEmpty(inputs.password)){
      msg.password = "Vui lòng nhập Password"
    }
    setValidateMsg(msg)
    if(Object.keys(msg).length > 0) return false
    return true
  }

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateAll()
    if(!isValid) return 
    try {
      await axios.post("http://localhost:8000/sign-up", inputs);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Đăng nhập vào SateShop</title>
        <meta
          name="description"
          content="Shop SateShop với giao diện được thiết kế theo phong cách tối giản"
        />
      </Helmet>
      <Form>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <p className="text-center text-sm">
            Hoặc đăng nhập với email và mật khẩu của bạn:
          </p>
          <div className="w-full flex flex-col gap-4 max-w-4xl">
            <input
              className="h-8 p-5 mt-4 w-full border border-gray-400 rounded-2xl outline-none bg-gray-50 "
              placeholder="Họ và tên của bạn ..."
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
            />
            <input
              className="h-8 p-5 w-full border border-gray-400 rounded-2xl outline-none bg-gray-50 "
              placeholder="Email của bạn ..."
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
            />
            <input
              className="h-8 p-5 w-full border border-gray-400 rounded-2xl outline-none bg-gray-50 "
              placeholder="Số điện thoại của bạn ..."
              type="text"
              name="phone"
              id="phone"
              onChange={handleChange}
            />
            <input
              className="h-8 p-5 w-full border border-gray-400 rounded-2xl outline-none  bg-gray-50"
              placeholder="Mật khẩu của bạn ..."
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            />
            <p className="pl-5 text-red-500 text-center">{`${validateMsg.name || validateMsg.email || validateMsg.phone || validateMsg.password || "" }`}</p>
          </div>
          <div className="w-full flex gap-2 justify-center items-center mt-4 max-w-2xl ">
            <button
              className="w-full border border-red-500 bg-red-500 text-white font-bold p-4 rounded-full"
              onClick={handleSubmit}
              type="submit"
            >
              Đăng ký
            </button>
            <button
              className="w-full border border-red-500 text-red-500 font-bold p-4 rounded-full"
              onClick={() => {
                navigate("/login");
              }}
            >
              Đăng nhập
            </button>
          </div>
          <button className="text-center mt-5 font-bold text-red-500 hover:underline">
            Quên mật khẩu ?
          </button>
          <p className="text-center font-mono text-sm">
            Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{" "}
            <span className="text-red-500">Điều khoản sử dụng</span> của chúng
            tôi.
          </p>
        </div>
      </Form>{" "}
    </>
  );
};

export default Register;
