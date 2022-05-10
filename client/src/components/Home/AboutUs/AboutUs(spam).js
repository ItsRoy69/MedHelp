import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./style(spam).css";
export default function AboutUs() {
  return (
    <>
      <Navbar />
      <br />
      <br />

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <div className="our-services settings">
                <div className="icon">
                  {" "}
                  <img
                    className="make-circle"
                    src="https://p.kindpng.com/picc/s/261-2612352_blue-lightning-bolt-hd-png-download.png"
                    alt="Electrical Shops"
                    width="80"
                    height="80"
                  />{" "}
                </div>
                <h4>Electrical Shops</h4>
                <p>
                  We provide many local Electrical shops for purchasing
                  electronic items.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="our-services speedup">
                <div className="icon">
                  {" "}
                  <img
                    className="make-circle"
                    src="https://thumbs.dreamstime.com/b/service-tools-red-icon-white-background-gear-wheel-hammer-flat-style-vector-illustration-171175251.jpg"
                    alt="Mechanic shops"
                    width="80"
                    height="80"
                  />{" "}
                </div>
                <h4>Mechanic shops</h4>
                <p>
                  We provide many local Mechanic shops for purchasing mechanic
                  items.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="our-services privacy">
                <div className="icon">
                  {" "}
                  <img
                    className="make-circle"
                    src="https://cdn1.vectorstock.com/i/1000x1000/48/35/blue-plumbing-service-icon-vector-8324835.jpg"
                    alt="Plumbing"
                    width="80"
                    height="80"
                  />{" "}
                </div>
                <h4>Plumbing shops </h4>
                <p>
                  We provide many local Plumbing shops for purchasing Plumbing
                  items.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <div className="our-services backups">
                <div className="icon">
                  {" "}
                  <img
                    className="make-circle"
                    src="https://cdn.imgbin.com/14/22/19/imgbin-construction-worker-laborer-architectural-engineering-construction-foreman-others-YpGXeZ1LNHsLDKc3AUjNGuaTB.jpg"
                    alt="Workers"
                    width="80"
                    height="80"
                  />{" "}
                </div>
                <h4>Find Workers</h4>
                <p>
                  We provide Plumbers, Electricians, Mechanics. You can contact
                  these workers for your work purpose.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="our-services ssl">
                <div className="icon">
                  {" "}
                  <img
                    className="make-circle"
                    src="https://images.all-free-download.com/images/graphiclarge/blue_shopping_cart_icon_vector_280786.jpg"
                    alt="Shop Join"
                    width="80"
                    height="80"
                  />{" "}
                </div>
                <h4>Shop Join</h4>
                <p>Shops can join us and sell there products in our website.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="our-services database">
                <div className="icon">
                  {" "}
                  <img
                    className="make-circle"
                    src="https://www.iconbunny.com/icons/media/catalog/product/3/7/370.12-construction-worker-icon-iconbunny.jpg"
                    alt="Workers Join"
                    width="80"
                    height="80"
                  />{" "}
                </div>
                <h4>Workers Join</h4>
                <p>
                  Workers like Plumbers, Electricians, mechanics can join our
                  website and can get work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
