import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../FirebaseConfig/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      await signIn(email, password);
      console.log("Login successful");
      setLoginError(null); // Clear any previous login errors
      navigate(location?.state ? location.state.from : "/");
    } catch (error) {
      console.error(error);

      if (error.code === "auth/wrong-password") {
        setLoginError("Password doesn't match. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        setLoginError("Email doesn't match. Please try again.");
      } else {
        setLoginError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-4xl lg:text-6xl border p-4 mx-4 text-center
      lg:mx-80 rounded-xl bg-gray-800 text-white font-bold my-10">
          Please Login
        </h2>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              Email
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              Password
            </label>
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
          </div>
          {loginError && <p className="text-red-500">{loginError}</p>}
          <div className="form-control mt-6 border-2 rounded-xl">
            <button className="btn bg-red-800">Login</button>
          </div>
          <div className="form-control mt-6  border-2 rounded-xl ">
            <button onClick={signInWithGoogle} className="btn bg-red-800 ">
              Sign In with Google
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Do not have an account{" "}
          <Link className="text-red-800 font-bold" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;