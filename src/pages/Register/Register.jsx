import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const {createUser} =useContext(AuthContext)

    const handleRegister =(e)=>{
        e.preventDefault()
        const form =new FormData(e.currentTarget)
        const name=form.get('name')
        const photo=form.get('photo')
        const email =form.get('email')
        const password =form.get('password')
        console.log(name,photo,email, password)

        // create user
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=> console.error(error))
    }


    return (
        <div>
        <Navbar></Navbar>
      <h2 className="text-3xl my-10 text-center">Please Register</h2>
      <form onSubmit={handleRegister} className=" mx-auto md:w-3/4 lg:w-1/2">
      <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="your name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
      <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo url"
                    className="input input-bordered"
                    name="photo"
                    required
                  />
                </div>
      <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent">Register</button>
                </div>
      </form>
      <p className="text-center mt-4">Alreday have an account ?<Link className="text-blue-700 font-bold" to='/login'>Please Login</Link></p>
  
  
      </div>
    );
};

export default Register;