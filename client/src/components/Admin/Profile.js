import React from "react";
import "./style.css";

export default function Profile({ bio }) {
  return (
    <div className="profilediv">
      <br />
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="profileCard card p-3 py-4">
            <div className="text-center">
              {" "}
              <img
                src="https://i.imgur.com/bDLhJiP.jpg"
                width={100}
                className="rounded-circle"
              />{" "}
            </div>
            <div className="text-center mt-3">
              {" "}
              <span className="bg-secondary p-1 px-4 rounded text-white">
                {bio.profession}
              </span>
              <h5 className="mt-2 mb-0">{bio.name}</h5> <span></span>
              <div className="px-4 mt-1">
                <h1 className="fonts">{bio.about} </h1>
              </div>
              <ul className="social-list">
                <li>
                  <i className="fa fa-facebook" />
                </li>
                <li>
                  <i className="fa fa-instagram" />
                </li>
                <li>
                  <i className="fa fa-linkedin" />
                </li>
              </ul>
              <div className="buttons">
                {" "}
                <div className="btn btn-outline-primary px-4">
                  <input type="file" className="form-control" id="customFile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
