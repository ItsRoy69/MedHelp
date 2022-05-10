import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

import { useDispatch } from "react-redux";
import { updatePEM } from "../../actions/pem";
export default function UpdatePEM({ pemDetails }) {
  // console.log(shopDetails);
  const [pem, setPem] = useState(pemDetails);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(pem);
    dispatch(updatePEM(pem._id, pem));
    alert("updated");
  };
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />

      <form onSubmit={submitHandler}>
        <div className="container-lg">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="contact-form">
                <h1>Join Us</h1>
                <p className="hint-text">Join with us for getting work!!!</p>

                {/* ---------------------------------------------name, phone, email--------------------------------------------- */}

                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="inputName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        required
                        value={pem.name}
                        onChange={(e) =>
                          setPem({
                            ...pem,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="inputEmail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        required
                        value={pem.email}
                        onChange={(e) =>
                          setPem({
                            ...pem,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="inputPhone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                        required
                        value={pem.phoneNo}
                        onChange={(e) =>
                          setPem({
                            ...pem,
                            phoneNo: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <br />
                {/* --------------------------------------------------userName, passWord----------------------------------------------------- */}

                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="userName">userName</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        required
                        value={pem.userName}
                        onChange={(e) =>
                          setPem({
                            ...pem,
                            userName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="passWord">password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        required
                        value={pem.passWord}
                        onChange={(e) =>
                          setPem({
                            ...pem,
                            passWord: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="city">city</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        required
                        value={pem.city}
                        onChange={(e) =>
                          setPem({
                            ...pem,
                            city: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                {/* ------------------------------------------------Shop type, address ------------------------------------------------------- */}

                {/* <div className="col-sm-4"> */}
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Address</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    value={pem.address}
                    onChange={(e) =>
                      setPem({
                        ...pem,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <br />
                {/* ------------------------------------------------pem type------------------------------------------------------ */}
                <div>
                  <label htmlFor="Occupation">Occupation:</label>
                  <select
                    name="Occupation"
                    id="Occupation"
                    onChange={(e) =>
                      setPem({
                        ...pem,
                        occupation: e.target.value,
                      })
                    }
                  >
                    <option value="Plumber">Plumber</option>
                    <option value="Electrician">Electrician</option>
                    <option value="Mechanic">Mechanic</option>
                  </select>
                </div>
                <br />

                {/* ----------------------------------------------------submit------------------------------------------------------------ */}
                <br />
                <button type="submit" className="btn btn-primary">
                  <i className="fa" /> Update Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
