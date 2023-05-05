import Banner from "./Banner";
import FooterTop from "./FooterTop";
import Product from "./Product";

const Home = () => {
    return (
        <div className="bg-slate-50 ">
            <Banner/>
            <Product/>
            <FooterTop/>
        </div>
    );
};

export default Home;