import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import AuthUserProvider from "./components/contexts/auth-context";
import ProductProvider from "./components/contexts/product-context";
import CartShop from "./pages/CartShop";
import History from "./pages/History";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product",
          element: <ProductDetail />,
        },
        {
          path: "/cart",
          element: <CartShop />,
        },
        {
          path: "/history",
          element: <History />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <div className="">
        <AuthUserProvider>
          <ProductProvider>
            <RouterProvider router={router} />
          </ProductProvider>
        </AuthUserProvider>
      </div>
    </>
  );
}

export default App;
