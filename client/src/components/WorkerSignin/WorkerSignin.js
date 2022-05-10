import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UpdatePEM from "../UpdatePEM/UpdatePEM";

export default function WorkerSignin() {
  const [info, setInfo] = useState({
    userName: "",
    passWord: "",
  });

  const [mainInfo, setMainInfo] = useState({
    mainUserName: "",
    mainPassWord: "",
  });
  const pems = useSelector((state) => state.pem);
  const Login = () => {
    if (
      pems.filter(
        (pem) =>
          pem.userName === info.userName && pem.passWord === info.passWord
      ).length === 1
    ) {
      setMainInfo({
        mainUserName: info.userName,
        mainPassWord: info.passWord,
      });
    } else {
      alert("Incorrect details!!!");
    }
  };

  return (
    <>
      {mainInfo.mainUserName === "" ? (
        <>
          <section
            className="h-100 gradient-form"
            style={{ backgroundColor: "#eee" }}
          >
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                  <div className="card rounded-3 text-black">
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="card-body p-md-5 mx-md-4">
                          <div className="text-center">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                              style={{ width: "185px" }}
                              alt="logo"
                            />
                            <h4 className="mt-1 mb-5 pb-1">
                              We are The PEM Joy Team
                            </h4>
                          </div>
                          <form>
                            <p>Please login to your Profile</p>

                            <div className="form-outline mb-4">
                              <input
                                type="text"
                                id="userName"
                                required
                                className="form-control"
                                placeholder="User Name"
                                onChange={(e) =>
                                  setInfo({
                                    ...info,
                                    userName: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                id="password"
                                required
                                className="form-control"
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

                            <div className="text-center pt-1 mb-5 pb-1">
                              <button
                                className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                type="button"
                                // onClick={handleSubmit}
                                onClick={Login}
                              >
                                Log in
                              </button>

                              <a className="text-muted" href="#!">
                                Forgot password?
                              </a>
                            </div>
                            <div className="d-flex align-items-center justify-content-center pb-4">
                              <p className="mb-0 me-2">Don't Join yet?</p>
                              <div className="d-block mt-3">
                                {" "}
                                <Link to="/workerJoin">
                                  <button
                                    className=" btn btn-danger btn-sm btn-block"
                                    data-inline="true"
                                  >
                                    Join
                                  </button>
                                </Link>{" "}
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                          <h4 className="mb-4">
                            We are more than just a company
                          </h4>
                          <p className="small mb-0">
                            Pem-joy is a wonderful service for the people who
                            are in need of plumbers, electricens and mechanice.
                            It also provides good oppurtinaty for workers to
                            earn money. here shops also register and sell there
                            items so it helps in finding local shop which
                            contain your need.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
        </>
      ) : (
        <UpdatePEM
          pemDetails={
            pems.filter(
              (pem) =>
                pem.userName === info.userName && pem.passWord === info.passWord
            )[0]
          }
        />
      )}
    </>
  );
}
