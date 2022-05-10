import React from "react";
import { Link } from "react-router-dom";

export default function Mshop({ MshopsObj }) {
  return (
    <>
      {MshopsObj.length === 0 ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <section id="header" className="jumbotron text-center">
            <h1 className="display-3">Mechanic Shops</h1>
            <p className="lead">Find The best Mechanic Shop you need!!!</p>
          </section>
          <section id="gallery">
            <div className="container">
              <div className="row">
                {MshopsObj.map((Mshop, key) => (
                  <>
                    <div className="col-lg-4 mb-4">
                      <div className="card">
                        <img
                          src="https://st4.depositphotos.com/1203257/20641/i/600/depositphotos_206411656-stock-photo-winter-season-tire-tread-brand.jpg"
                          alt=""
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h2 className="card-title">
                            <b>{Mshop.shopName}</b>
                          </h2>
                          <p className="card-text">{Mshop.description}</p>
                          <p>
                            City : <b>{Mshop.city}</b>
                          </p>
                          <p>
                            Address : <b>{Mshop.address}</b>
                          </p>
                          <br /> <br /> <br />
                          <i className="fas fa-user"></i> Owner :{" "}
                          {Mshop.ownerName} <br />
                          <i className="fas fa-phone-square"></i> {"     "}
                          {Mshop.phoneNo} <br />
                          <i className="fas fa-envelope-square"></i>{" "}
                          {Mshop.email} <br /> <br />
                          <Link
                            to={{
                              pathname: `/Items?${Mshop._id}`,
                              state: {
                                shopprop: true,
                              },
                            }}
                          >
                            <a href className="btn btn-outline-success btn-sm">
                              Items
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
