import { useParams } from 'react-router-dom';
import { useLoaderData } from "react-router-dom";
import IndividualPagesCard from "./individualPagesCard";

const IndividualPages = () => {

    const { brandName } = useParams();
    const products = useLoaderData();

    const filteredProducts = products.filter(product => product.brand === brandName);

    return (
        <div>

            <h3 className="text-6xl text-center ">Hot New Products ({filteredProducts.length})</h3>
            <div className="carousel w-full relative rounded-2xl mt-5 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/gdPWw8X/158.jpg" className="w-full brightness-50 shadow-2xl  border-4 border-pink-800" />
                    


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/bm6LcVh/photo-1512436991641-6745cdb1723f.jpg" className="w-full shadow-2xl border-4 border-pink-800 brightness-75" />
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/8xLbMK6/2489629.jpg" className="w-full shadow-2xl border-4 border-pink-800 brightness-75" />
                   
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/3vxBPvq/Best-Men-s-Clothing-Stores-in-Udaipur.webp" className="w-full shadow-2xl border-4 border-pink-800 brightness-75" />
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


            <div className='grid lg:grid-cols-3 sm:grid-cols-1 flex gap-6 mt-10 '>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <IndividualPagesCard key={product._id} product={product} />
                    ))
                ) : (
                    <div className='text-center'>
                        <p className='text-center text-6xl text-red-800'>No products available now</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default IndividualPages;