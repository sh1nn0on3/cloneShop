import { useState } from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {};

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
              value={emailInput}
              type="text"
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
            />
            <input
              className="h-8 p-5 w-full border border-gray-400 rounded-2xl outline-none bg-gray-50 "
              placeholder="Mật khẩu của bạn ..."
              type="password"
              value={passwordInput}
              onChange={(e) => {
                setPasswordInput(e.target.value);
              }}
            />
          </div>
          <div className="w-full flex gap-2 justify-center items-center mt-4 max-w-2xl ">
            <button
              className="w-full border border-red-500 bg-red-500 text-white font-bold p-4 rounded-full"
              onClick={handleLogin}
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
