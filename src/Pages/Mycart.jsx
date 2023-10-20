import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";


const Mycart = () => {
    const carts = useLoaderData()
    return (
        <div>
            <h3>cart products:{carts.length}</h3>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 flex">
            {
                carts.map(cart=><CartCard
                key={cart.id}
                cart={cart}></CartCard>)
            }
            </div>
        </div>
    );
};

export default Mycart;