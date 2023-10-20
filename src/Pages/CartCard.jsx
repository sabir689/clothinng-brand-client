/* eslint-disable react/prop-types */


import Swal from "sweetalert2";


const CartCard = ({ cart }) => {

    const { img, name, brand, _id, type, price, rating } = cart;
  

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(` https://clothing-brand-server.vercel.app/cart/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                        }
                      
                    });
            }
        });
    };

    return (
        <div className="card lg:w-96 sm:w-64  bg-gray-600  rounded-2xl shadow-xl m-4 p-4">
            <img src={img} alt={name} className="card-image h-96" />
            <div className="card-body p-4">
                <h2 className="card-title text-xl font-semibold">{name}</h2>
                <p className="text-sm text-gray-500">{brand}</p>
                <p className="text-sm text-gray-500">Type: {type}</p>
                <p className="text-lg font-semibold text-primary">${price}</p>
                <p className="text-sm text-gray-500">Rating: {rating}</p>
                <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete From My cart</button>
            </div>
            <div className="card-actions p-4">






            </div>
        </div>
    );
};

export default CartCard;