import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const Layout = () => {
    return <></>;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {}
      ]
    },
    {
      path:"/register",
      element: <Register/>
    },
    {
      path:"/login",
      element: <Login/>
    }
  ]);

  return (
    <>
      <div className="">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
