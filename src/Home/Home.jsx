
import HomeBrands from "../BRands/HomeBrands";
import Banner from "./Banner";
import ExtraSec from "./ExtraSec";
import Footer from "./Footer";



const Home = () => {
    return (
        <div className="p-4">
            <Banner></Banner>
            <HomeBrands></HomeBrands>
            <ExtraSec></ExtraSec>
            
            <Footer></Footer>
        
        </div>
    );
};

export default Home;