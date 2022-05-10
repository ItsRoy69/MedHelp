import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "../../actions/customer";
import PEMs from "../PEMs/PEMs";
import "./style.css";

export default function CustomerSignin() {
  // -----------------------------SIGN UP -------------------------------------------------
  const [details, setDetails] = useState({
    userName: "",
    passWord: "",
    latitude: "",
    longitude: "",
  });
  const dispatch = useDispatch();

  var signUpHandler = (e) => {
    e.preventDefault();
    if (details.passWord === "" || details.email === "") {
      alert("Invalide details!!!");
    } else {
      setDetails({
        userName: "",
        passWord: "",
        latitude: 0,
        longitude: 0,
      });
      dispatch(createCustomer(details));

      alert("SignUp Successfully!!!");
    }
  };
  // -----------------------------LOG IN -------------------------------------------------

  // useSelector((state) => console.log(state));
  const customers = useSelector((state) => state.customer);
  console.log("customers : ", customers);

  const [mainInfo, setMainInfo] = useState({
    mainUserName: "",
    mainPassWord: "",
  });

  const [info, setInfo] = useState({
    userName: "",
    passWord: "",
  });

  const Login = () => {
    if (info.userName === "" || info.passWord === "") {
      alert("Invalide details!!!");
    } else {
      if (
        customers.filter(
          (customer) =>
            customer.userName === info.userName &&
            customer.passWord === info.passWord
        ).length === 1
      ) {
        setMainInfo({
          mainUserName: info.userName,
          mainPassWord: info.passWord,
        });
      } else {
        alert("Incorrect details!!!");
      }
    }
  };
  // ---------------------------------------LOG OUT-------------------------------------------------

  return (
    <>
      {mainInfo.mainUserName !== "" ? (
        <>
          <PEMs
            customer={
              customers.filter(
                (customer) =>
                  customer.userName === info.userName &&
                  customer.passWord === info.passWord
              )[0]
            }
          />
        </>
      ) : (
        <>
          <div className="signinBody">
            <div className="sectionStyle">
              <div className="container">
                <div className="row full-heightStyle justify-content-center">
                  <div className="col-12 text-center align-self-center py-5">
                    <center className="centerStyle">WELCOME TO PEM JOY</center>
                    <div className="sectionStyle pb-5 pt-5 pt-sm-2 text-center">
                      <h6 className="mb-0 pb-3 h6Style">
                        <span>Log In </span>
                        <span>Sign Up</span>
                      </h6>
                      <input
                        className="checkbox"
                        type="checkbox"
                        id="reg-log"
                        name="reg-log"
                      />
                      <label htmlFor="reg-log" />
                      {/* --------------------------------------------------LOG IN------------------------------------------------- */}
                      <div className="card-3d-wrap mx-auto">
                        <div className="card-3d-wrapper">
                          <div className="card-front">
                            <div className="center-wrap">
                              <div className="sectionStyle text-center">
                                <h4 className="mb-4 pb-3 h4Style signColor">
                                  Log In
                                </h4>
                                <div className="form-group mt-2">
                                  <input
                                    type="text"
                                    id="userName"
                                    required
                                    className="form-style"
                                    placeholder="User Name"
                                    value={info.userName}
                                    onChange={(e) =>
                                      setInfo({
                                        ...info,
                                        userName: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="form-group mt-2">
                                  <input
                                    type="password"
                                    id="passWord"
                                    required
                                    value={info.passWord}
                                    className="form-style"
                                    placeholder="Password"
                                    onChange={(e) =>
                                      setInfo({
                                        ...info,
                                        passWord: e.target.value,
                                      })
                                    }
                                  />
                                </div>

                                <br />
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                  onClick={Login}
                                >
                                  LOG IN
                                </button>
                                <p className="mb-0 mt-4 text-center pStyle">
                                  <a
                                    href="#0"
                                    className="link buttonStyle linkStyle"
                                  >
                                    Forgot your password?
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* --------------------------------------------------SIGN UP------------------------------------------------- */}
                          <div className="card-back">
                            <div className="center-wrap">
                              <div className="sectionStyle text-center">
                                <h4 className="mb-4 pb-3 signColor">Sign Up</h4>

                                <div className="form-group mt-2">
                                  <input
                                    type="text"
                                    id="userName"
                                    required
                                    className="form-style"
                                    placeholder="User Name"
                                    value={details.userName}
                                    onChange={(e) =>
                                      setDetails({
                                        ...details,
                                        userName: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="form-group mt-2">
                                  <input
                                    type="password"
                                    id="passWord"
                                    required
                                    className="form-style"
                                    placeholder="Password"
                                    value={details.passWord}
                                    onChange={(e) =>
                                      setDetails({
                                        ...details,
                                        passWord: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <a
                                     href="https://gps-coordinates.org/"
                                      className="btn btn-primary"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                     height="10px"
                                      >
                                    GetLocation
                                   </a>
                                <div className="form-group mt-2">
                                  <input
                                    type="number"
                                    id="latitude"
                                    required
                                    className="form-style"
                                    placeholder="Latitude"
                                    value={details.latitude}
                                    onChange={(e) =>
                                      setDetails({
                                        ...details,
                                        latitude: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="form-group mt-2">
                                  <input
                                    type="number"
                                    id="longitude"
                                    required
                                    className="form-style"
                                    placeholder="Longitude"
                                    value={details.longitude}
                                    onChange={(e) =>
                                      setDetails({
                                        ...details,
                                        longitude: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <br />
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                  onClick={signUpHandler}
                                >
                                  Sign Up
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </>
      )}
    </>
  );
}
