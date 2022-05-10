import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdminPage from "./AdminPage";
export default function AdminSignUp() {
  const [inputdetails, setInputdetails] = useState({
    userName: "",
    passWord: "",
  });
  const [check, setCheck] = useState(false);
  const [profile, setProfile] = useState("");
  const admins = useSelector((store) => store.admin);
  console.log(admins, "admins done");

  const login = () => {
    if (
      admins.filter(
        (a) =>
          a.userName === inputdetails.userName &&
          a.passWord === inputdetails.passWord
      ).length === 1
    ) {
      setCheck(true);
      setProfile(
        admins.filter(
          (a) =>
            a.userName === inputdetails.userName &&
            a.passWord === inputdetails.passWord
        )[0]
      );
    } else {
      alert("incorrect details!!!");
    }
    console.log(inputdetails, "clicked");
  };

  return (
    <>
      {check === true ? (
        <>
          <AdminPage bio={profile} />
        </>
      ) : (
        <>
          <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                  <div className="card" style={{ borderRadius: "1rem" }}>
                    <div className="row g-0">
                      <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                          alt="login form"
                          className="img-fluid"
                          style={{ borderRadius: "1rem 0 0 1rem" }}
                        />
                      </div>
                      <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                          <form>
                            <div className="d-flex align-items-center mb-3 pb-1">
                              <i
                                className="fas fa-cubes fa-2x me-3"
                                style={{ color: "#ff6219" }}
                              />
                              <span className="h1 fw-bold mb-0">
                                Admin Login
                              </span>
                            </div>
                            <h5
                              className="fw-normal mb-3 pb-3"
                              style={{ letterSpacing: "1px" }}
                            >
                              Sign into your account
                            </h5>
                            <div className="form-outline mb-4">
                              <input
                                type="email"
                                id="form2Example17"
                                className="form-control form-control-lg"
                                onChange={(e) => {
                                  setInputdetails({
                                    ...inputdetails,
                                    userName: e.target.value,
                                  });
                                }}
                              />
                              <label
                                className="form-label"
                                htmlFor="form2Example17"
                              >
                                user name
                              </label>
                            </div>
                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                id="form2Example27"
                                className="form-control form-control-lg"
                                onChange={(e) => {
                                  setInputdetails({
                                    ...inputdetails,
                                    passWord: e.target.value,
                                  });
                                }}
                              />
                              <label
                                className="form-label"
                                htmlFor="form2Example27"
                              >
                                Password
                              </label>
                            </div>
                            <div className="pt-1 mb-4">
                              <button
                                className="btn btn-dark btn-lg btn-block"
                                type="button"
                                onClick={() => {
                                  login();
                                }}
                              >
                                Login
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </section>
        </>
      )}
    </>
  );
}
