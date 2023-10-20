import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  
  const product = useLoaderData();
  const { img, name, brand, type, price, description } = product;

  const handleAddProduct = (event) => {
    event.preventDefault();
    const cartProduct = { img, name, brand, type, price, description };

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-200 border-2 border-red-800 rounded-lg overflow-hidden shadow-md my-8">
      <img src={img} alt={name} className="w-full" />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">Brand: {brand}</p>
        <p className="text-gray-600 mb-2">Type: {type}</p>
        <p className="text-gray-600 mb-2">Price: ${price}</p>
        <p className="text-gray-600 mb-2">Description: {description}</p>
        <button onClick={handleAddProduct} className="btn btn-primary text-center">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Details;

