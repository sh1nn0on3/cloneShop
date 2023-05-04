import { useState } from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import axios from "axios";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  // console.log("🚀 ~ file: Login.jsx:13 ~ Login ~ input:", input);
  const [validateMsg, setValidateMsg] = useState({});

  const navigate = useNavigate();

  const validateAll = () => {
    const msg = {};
    if (isEmpty(input.email)) {
      msg.email = "Vui lòng nhập Email";
    } else if (!isEmail(input.email)) {
      msg.email = "Có phải email đâu ??";
    }

    if (isEmpty(input.password)) {
      msg.password = "Vui lòng nhập Password";
    }
    setValidateMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;
    try {
      await axios
        .post("http://localhost:8000/sign-in", input)
        .then((res) => {
          if(res.data === 1){
            navigate("/");
          }else{
            alert("Tài khoản sai rồi , nhập lại đi !!!");
          }
        })
        .catch((err) => console.log(err));
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
              placeholder="Email của bạn ..."
              name="email"
              type="text"
              onChange={handleChange}
            />
            <input
              className="h-8 p-5 w-full border border-gray-400 rounded-2xl outline-none bg-gray-50 "
              placeholder="Mật khẩu của bạn ..."
              type="password"
              name="password"
              onChange={handleChange}
            />
            <p className="pl-5 text-red-500 text-center">{`${
              validateMsg.email || validateMsg.password || ""
            }`}</p>
          </div>
          <div className="w-full flex gap-2 justify-center items-center mt-4 max-w-2xl ">
            <button
              className="w-full border border-red-500 bg-red-500 text-white font-bold p-4 rounded-full"
              onClick={handleLogin}
              type="submit"
            >
              Đăng nhập
            </button>
            <button
              className="w-full border border-red-500 text-red-500 font-bold p-4 rounded-full"
              onClick={() => {
                navigate("/register");
              }}
            >
              Đăng ký
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
      </Form>
    </>
  );
};

export default Login;
