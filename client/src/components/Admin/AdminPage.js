import React, { useState } from "react";
import { useSelector } from "react-redux";
import Users from "./Users";
import Pems from "./Pems";
import Shops from "./Shops";
import Profile from "./Profile";

export default function AdminPage({ bio }) {
  const users = useSelector((store) => store.customer);
  const pems = useSelector((store) => store.pem);
  const shops = useSelector((store) => store.shop);
  const [check, setCheck] = useState("");
  return (
    <>
      {check === "" ? (
        <div className="admindiv">
          <center>
            <h1 style={{ color: "white" }}> Admin Page</h1>
          </center>
          <br />
          <br />
          <div className="adminsetup">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://p4.wallpaperbetter.com/wallpaper/443/615/705/plumber-kitchen-faucet-wallpaper-preview.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Workers</h5>
                <p className="card-text">
                  View all the workers who are registered for the pem joy
                  company
                </p>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    setCheck("PEM");
                  }}
                >
                  PEM
                </button>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://thumbs.dreamstime.com/b/plumber-work-bathroom-plumbing-repair-service-assemble-install-concept-plumber-work-bathroom-plumbing-repair-113995223.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Shops</h5>
                <p className="card-text">
                  View all the Shops who are registered for the pem joy company
                </p>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    setCheck("Shops");
                  }}
                >
                  Shops
                </button>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar-thumbnail.png"
                className="card-img-top"
                alt="..."
                height={200}
              />
              <div className="card-body">
                <h5 className="card-title">Users</h5>
                <p className="card-text">
                  View all the Users who are signed up for the pem joy company
                </p>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    setCheck("Users");
                  }}
                >
                  Users
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />
          <center>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setCheck("Profile");
              }}
            >
              Profile
            </button>
          </center>
        </div>
      ) : (
        <>
          {check === "Shops" ? (
            <>
              <Shops shops={shops} />
            </>
          ) : (
            <>
              {check === "PEM" ? (
                <>
                  <Pems pems={pems} />
                </>
              ) : (
                <>
                  {check === "Profile" ? (
                    <>
                      <Profile bio={bio} />
                    </>
                  ) : (
                    <>
                      <Users users={users} />
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
