/* eslint-disable no-unused-vars */
import  { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../FirebaseConfig/AuthProvider';


const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');

   
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})$/;

    if (!passwordRegex.test(password)) {
        setPasswordError(
          'Password must be at least 6 characters long, contain at least one capital letter, and at least one special character.'
        );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    
      <div >
        <h2 className="text-4xl lg:text-6xl border text-center mt-5 p-4 mx-4 lg:mx-80 rounded-xl bg-gray-800 text-white font-bold ">
  Please Register
</h2>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
             
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              
            </label>
            <input
              type="text"
              required
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
             
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
          
            </label>
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
          </div>
          {passwordError && <p className="text-red-500">{passwordError}</p>}

          <div className="form-control mt-6">
            <button className="btn bg-gray-800">Register</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account?{' '}
          <Link className="text-red-800 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
   
  );
};

export default Register;
