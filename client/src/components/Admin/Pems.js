import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { deletePEM } from "../../actions/pem";

export default function Pems({ pems }) {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(true);
  return (
    <div>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>Workers</b>
                  </h2>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>phoneNo</th>
                  <th>email</th>
                  <th>city</th>
                  <th>occupation</th>
                  <th>User Name</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {pems.map((pem) => (
                  <>
                    <tr>
                      <td>{pem.Name}</td>
                      <td>{pem.phoneNo}</td>
                      <td>{pem.email}</td>
                      <td>{pem.city}</td>
                      <td>{pem.occupation}</td>
                      <td>{pem.userName}</td>
                      <td>{pem.passWord}</td>

                      <td>
                        {/* <i
                          class="fas fa-check tick"
                          onClick={() => {
                            console.log("clicked");
                          }}
                        ></i> */}

                        <i
                          class="fas fa-times wronge"
                          onClick={() => {
                            dispatch(deletePEM(pem._id));
                            setCheck(!check);
                          }}
                        ></i>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
