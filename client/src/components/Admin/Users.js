import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { deleteCustomer } from "../../actions/customer";
export default function Users({ users }) {
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
                    Manage <b>Users</b>
                  </h2>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Password</th>
                  <th>latitude</th>
                  <th>longitude</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <>
                    <tr>
                      <td>{user.userName}</td>
                      <td>{user.passWord}</td>
                      <td>{user.latitude}</td>
                      <td>{user.longitude}</td>

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
                            console.log("clicked");
                            dispatch(deleteCustomer(user._id));
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
