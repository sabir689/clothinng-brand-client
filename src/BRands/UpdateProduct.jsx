import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const product = useLoaderData();
    const { img, name, brand,_id, type, price,description ,rating} = product;
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const img = form.img.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const updatedProduct = { img, name, brand, type, price, description, rating }

        console.log(updatedProduct);

        // server data
        
        fetch( ` https://clothing-brand-server.vercel.app/product/${_id}`, {
            method: 'PUT',       
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }



    return (
        <div>
            
            <div className="bg-[#F4F3F0] p-24 rounded-xl m-5">
            <h2 className="text-3xl text-center mb-10 font-extrabold">Update Product:{name}</h2>
            <form onSubmit={handleAddProduct}  >
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="img" defaultValue={img} placeholder="img" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name"defaultValue={name}  placeholder="Add product name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" defaultValue={brand}  placeholder="BrandName" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type"defaultValue={type}  placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price}  placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description} placeholder="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="text-center mb-8">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <div className="rating">
                        <input type="radio" defaultValue={rating}  name="rating" id="rating-1" className="mask mask-star-2 bg-green-500" />
                        <label htmlFor="rating-1"></label>

                        <input type="radio" name="rating" id="rating-2" className="mask mask-star-2 bg-green-500" />
                        <label htmlFor="rating-2"></label>

                        <input type="radio" name="rating" id="rating-3" className="mask mask-star-2 bg-green-500" />
                        <label htmlFor="rating-3"></label>

                        <input type="radio" name="rating" id="rating-4" className="mask mask-star-2 bg-green-500" />
                        <label htmlFor="rating-4"></label>

                        <input type="radio" name="rating" id="rating-5" className="mask mask-star-2 bg-green-500" />
                        <label htmlFor="rating-5"></label>
                    </div>
                </div>



                <input type="submit" value="Update product" className="btn btn-block" />

            </form>
        </div>
        </div>
    );
};

export default UpdateProduct;
