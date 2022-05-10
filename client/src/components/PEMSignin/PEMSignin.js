import React from "react";
import "./bg.css";

export default function PEMLogin() {
  return (
    <>
      <section className="vh-100 gradient-custom bg">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Sign up</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your details!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="name">
                        Name
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="number"
                        id="phoneNo"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="phoneNo">
                        PhoneNo
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="occupation"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="occupation">
                        Occupation
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="city"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="city">
                        City
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typePasswordX">
                        Password
                      </label>
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Sign up
                    </button>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Do you have an account?{" "}
                      <a href="#!" className="text-white-50 fw-bold">
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
