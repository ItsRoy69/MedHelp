import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { deleteShop } from "../../actions/shop";

export default function Shops({ shops }) {
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
                    Manage <b>Shops</b>
                  </h2>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Shop Name</th>
                  <th>City</th>
                  <th>Shop Type</th>
                  <th>Owner Name</th>
                  <th>User Name</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {shops.map((shop) => (
                  <>
                    <tr>
                      <td>{shop.shopName}</td>
                      <td>{shop.city}</td>
                      <td>{shop.shopType}</td>
                      <td>{shop.ownerName}</td>
                      <td>{shop.userName}</td>
                      <td>{shop.passWord}</td>

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
                            dispatch(deleteShop(shop._id));
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
