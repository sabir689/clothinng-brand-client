

import { Link } from "react-router-dom";



const ProductCard = ({ product }) => {
    const { img, brand, _id } = product
    return (
        <div >
            <div className="card card-compact p-4 border-2 border-red-200 bg-base-100 shadow-xl">
                <figure><img className="h-96 w-112 rounded-2xl" src={img} alt="Shoes" /></figure>
                <div className="p-4 items-center  ">
                    <h2 className="text-center text-2xl text-bold mb-5  ">{brand}</h2>


                    <Link to={`individual/${_id}`}>
                        <div className="card-actions justify-center mb-5">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </Link>
                    <Link to={`updateProduct/${_id}`}>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Update Details</button>
                        </div>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default ProductCard;