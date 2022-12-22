import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "./AuthProvider";

//Registration
const Register = () => {
  useTitle("Register");
  const { register, userProfileUpdate, setLoading } = useContext(AuthContext);


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const role = form.select.value;

    const user = {
      email,
      name,
      photoURL,
      role,
    };
    console.log(user);

    register(email, password)
      .then((temp) => {
        const userTemp = temp.user;
        console.log(userTemp);
        handleUserProfile(name, photoURL);
        form.reset();

        fetch(`https://buy-lap-server-afk247.vercel.app/user`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((newData) => {
            if (newData.acknowledged){
                toast("Registration completed");
                getUserToken(email);
            } 

          })
          .catch((er) => console.error(er));
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const getUserToken=(email)=>{
    fetch(`https://buy-lap-server-afk247.vercel.app/jwt?email=${email}`)
    .then(res => res.json())
    .then(data => {
        if (data.accessToken) {
            localStorage.setItem('accessToken', data.accessToken);
        }
    });
  }

  const handleUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    userProfileUpdate(profile)
      .then(() => {})
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <form onSubmit={handleSubmit} className="mb-md-2 mt-md-2 ">
                    <h2 className="fw-bold mb-2 text-uppercase">
                      Registration
                    </h2>
                    <p className="text-white-50 mb-5">
                      Please enter your Name, Photo URL, Email and Password!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <label>Select your account type</label>
                      <select
                        name="select"
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="buyer">
                          Buyer
                        </option>
                        <option selected value="seller">Seller</option>
                      </select>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        placeholder="Full Name"
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        placeholder="Photo URL"
                        type="text"
                        name="photo"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      Already Registered? Go to{" "}
                      <Link className="text-white-50" to="/login">
                        Log In Page
                      </Link>
                    </p>

                    <button
                      className="btn btn-outline-warning px-4"
                      type="submit"
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
