import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPEM } from "../../actions/pem";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function CustomerSignUp() {
  const [details, setDetails] = useState({ name: "", email: "", passWord: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPEM(details));
    setDetails({ name: "", email: "", passWord: "" });
    alert("Registered successfully");
  };

  return (
    <>
      <Navbar />
      <br /> <br /> <br />
      <form className="vh-100 gradient-custom" onSubmit={handleSubmit}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">
                      Customer Sign Up
                    </h2>
                    <p className="text-white-50 mb-5">
                      Please enter your details!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                        required
                        // onChange={(e) =>
                        //   setDetails({ ...details, email: e.target.value })
                        // }
                        // value={details.email}
                      />
                      <label className="form-label" htmlFor="name">
                        Name
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        required
                        onChange={(e) =>
                          setDetails({ ...details, email: e.target.value })
                        }
                        value={details.email}
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        required
                        onChange={(e) =>
                          setDetails({ ...details, passWord: e.target.value })
                        }
                        value={details.passWord}
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        required
                        // onChange={(e) =>
                        //   setDetails({ ...details, passWord: e.target.value })
                        // }
                        // value={details.passWord}
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Re enter Password
                      </label>
                    </div>
                    <br />
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      Do you have an account?{" "}
                      <Link
                        to="/CustomerSignin"
                        className="text-white-50 fw-bold"
                      >
                        SignIn
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
