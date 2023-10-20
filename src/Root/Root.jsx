import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


const Root = () => {
    return (
        <div className="p-4">
             <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Root;