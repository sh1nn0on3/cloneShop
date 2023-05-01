import Logo from "../components/img/logo.png";
import FaceBook from "../components/img/fb.png";
import Google from "../components/img/gg.png";

const Form = ({ children }) => {
  return (
    <form>
      <div className="min-h-screen flex flex-col items-center p-12 gap-8">
        <div>
          <img alt="avt" src={Logo} className="w-32" />
        </div>
        <div>
          <h1 className="font-bold text-2xl text-center">
            Đăng nhập vào SateLLite
          </h1>
        </div>
        <div className="flex gap-4">
          <ul className="border-2 border-red-500 p-3 rounded-full cursor-pointer hover:bg-slate-200 transition-all ">
            <li>
              <img alt="" src={Google} className="w-8" />
            </li>
          </ul>
          <ul className="border-2 border-red-500 p-3  rounded-full cursor-pointer hover:bg-slate-200 transition-all ">
            <li>
              <img alt="" src={FaceBook} className="w-8" />
            </li>
          </ul>
        </div>
        {children}
      </div>
    </form>
  );
};

export default Form;
