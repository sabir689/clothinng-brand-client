

import HomeBrands from "../BRands/HomeBrands";
import Banner from "./Banner";
import ExtraSec from "./ExtraSec";
import Footer from "./Footer";
import Lastsec from "./Lastsec";



const Home = () => {
    
    
    return (
        <div className="p-4 ">
           
            <Banner></Banner>
            <HomeBrands></HomeBrands>
            <ExtraSec></ExtraSec>
            <Lastsec></Lastsec>
            
            <Footer></Footer>
        
        </div>
    );
};

export default Home;