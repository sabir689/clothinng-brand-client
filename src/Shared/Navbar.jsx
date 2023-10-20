import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
import { AuthContext } from "../FirebaseConfig/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
      logOut()
          .then()
          .catch();
  };




  const NavLinks = (
    <>
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/addProduct"}>Add Product</NavLink></li>
      <li><NavLink to={"/myCart"}>My Cart</NavLink></li>
      <li><NavLink to={"/login"}>Login</NavLink></li>
      
    
      
    </>

  );
  return (
    <div className="navbar  bg-base-100 border-2 border-gray-800 rounded-2xl shadow-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                    <a href><img className="lg:h-24   rounded-full" src="https://i.ibb.co/gMT0wwB/attachment-48749214.jpg" alt="" /></a>
                </div>

                <h1 className="text-2xl text-bold">OR-MEN</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <p className="text-bold border lg:p-4   hover:bg-pink-800 rounded-full">{user?.email}</p>
            <img src={user?.photoURL} alt="" />
            <div className="navbar-end">
                {user ? (
                    <button onClick={handleSignOut} className="border-2 border-pink-800 hover:bg-gray-500 lg:p-4 rounded-2xl">Sign Out</button>
                ) : (
                    <Link to="/login">
                        <button className="border-2 border-gray-800 hover:bg-gray-500 p-4 rounded-2xl">Sign In</button>
                    </Link>
                )}
            </div>
        </div>


  );
};

export default Navbar;