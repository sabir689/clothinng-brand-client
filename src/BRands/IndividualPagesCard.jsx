/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const IndividualPagesCard = ({ product }) => {
    const { img, name, brand, _id, type, price, rating } = product;

    return (
        <div className="card lg:w-96 sm:w-64  bg-gray-600  rounded-2xl shadow-xl m-4 p-4">
            <img src={img} alt={name} className="card-image h-96" />
            <div className="card-body p-4">
                <h2 className="card-title text-xl font-semibold">{name}</h2>
                <p className="text-sm text-gray-500">{brand}</p>
                <p className="text-sm text-gray-500">Type: {type}</p>
                <p className="text-lg font-semibold text-primary">${price}</p>
                <p className="text-sm text-gray-500">Rating: {rating}</p>
            </div>
            <div className="card-actions p-4">
                <Link to={`details/${_id}`}>
                    <button className="btn btn-primary mr-2">Details</button>
                </Link>




                <Link to={`updateProduct/${_id}`}>
                    <button className="btn btn-secondary">Update</button>
                </Link>
            </div>
        </div>
    );
};

export default IndividualPagesCard;