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