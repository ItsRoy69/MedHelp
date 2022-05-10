import React, { useState } from "react";
import "./style.css";
import Navbar from "../../Navbar/Navbar";
import StripeContainer from "./Payment/StripeContainer";
export default function Item({ items, itemStatus, addItems, amount }) {
  const [pay, setPay] = useState(false);

  return (
    <>
      {items[0] === undefined ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <Navbar />
          <br /> <br />
          <br />
          <center>
            <h1>
              <b>
                <u>This are all the Items in the shop</u>
              </b>
            </h1>
          </center>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-primary"
            disabled
            onClick={() => {
              setPay(true);
            }}
          >
            Total Amount : {amount} <i class="fas fa-sort-amount-up"></i>
          </button>
          {/* <p>total Amount : </p> */}
          <br />
          <div>
            <div className="container">
              <div className="row" id="ads">
                <br />

                {/* ------------------------------------USE MAP HERE--------------------------------------------- */}

                {/* -----------------------------------ITEM 1----------------------------------------------------- */}
                {items[0].price === 0 ? (
                  <></>
                ) : (
                  <>
                    <div className="col-md-4">
                      <br />
                      <div className="card rounded">
                        <div className="card-image">
                          <img
                            width="30%"
                            height="30"
                            className="img-fluid"
                            src={items[0].image}
                            alt={items[0].item}
                          />
                        </div>
                        <div className="card-image-overlay m-auto">
                          <i className="fas fa-rupee-sign"></i>
                          <span className="card-detail-badge">
                            {items[0].price}
                          </span>
                        </div>
                        <div className="card-body text-center">
                          <div className="ad-title m-auto">
                            <h5>{items[0].item}</h5>
                          </div>
                          <button
                            type="button"
                            className="ad-btn"
                            onClick={() => {
                              addItems(0);
                            }}
                          >
                            {itemStatus[0].status}
                          </button>
                        </div>
                      </div>
                      <br />
                    </div>
                  </>
                )}
                {/* -----------------------------------ITEM 2----------------------------------------------------- */}
                {items[1].price === 0 ? (
                  <></>
                ) : (
                  <>
                    <div className="col-md-4">
                      <br />
                      <div className="card rounded">
                        <div className="card-image">
                          <img
                            width="30%"
                            height="30"
                            className="img-fluid"
                            src={items[1].image}
                            alt={items[1].item}
                          />
                        </div>
                        <div className="card-image-overlay m-auto">
                          <i className="fas fa-rupee-sign"></i>
                          <span className="card-detail-badge">
                            {items[1].price}
                          </span>
                        </div>
                        <div className="card-body text-center">
                          <div className="ad-title m-auto">
                            <h5>{items[1].item}</h5>
                          </div>
                          <button
                            type="button"
                            className="ad-btn"
                            onClick={() => {
                              addItems(1);
                            }}
                          >
                            {itemStatus[1].status}
                          </button>
                        </div>
                      </div>
                      <br />
                    </div>
                  </>
                )}
                {/* -----------------------------------ITEM 3----------------------------------------------------- */}
                {items[2].price === 0 ? (
                  <></>
                ) : (
                  <>
                    <div className="col-md-4">
                      <br />
                      <div className="card rounded">
                        <div className="card-image">
                          <img
                            width="30%"
                            height="30"
                            className="img-fluid"
                            src={items[2].image}
                            alt={items[2].item}
                          />
                        </div>
                        <div className="card-image-overlay m-auto">
                          <i className="fas fa-rupee-sign"></i>
                          <span className="card-detail-badge">
                            {items[2].price}
                          </span>
                        </div>
                        <div className="card-body text-center">
                          <div className="ad-title m-auto">
                            <h5>{items[2].item}</h5>
                          </div>
                          <button
                            type="button"
                            className="ad-btn"
                            onClick={() => {
                              addItems(2);
                            }}
                          >
                            {itemStatus[2].status}
                          </button>
                        </div>
                      </div>
                      <br />
                    </div>
                  </>
                )}
                {/* -----------------------------------ITEM 4----------------------------------------------------- */}
                {items[3].price === 0 ? (
                  <></>
                ) : (
                  <>
                    <div className="col-md-4">
                      <br />
                      <div className="card rounded">
                        <div className="card-image">
                          <img
                            width="30%"
                            height="30"
                            className="img-fluid"
                            src={items[3].image}
                            alt={items[3].item}
                          />
                        </div>
                        <div className="card-image-overlay m-auto">
                          <i className="fas fa-rupee-sign"></i>
                          <span className="card-detail-badge">
                            {items[3].price}
                          </span>
                        </div>
                        <div className="card-body text-center">
                          <div className="ad-title m-auto">
                            <h5>{items[3].item}</h5>
                          </div>
                          <button
                            type="button"
                            className="ad-btn"
                            onClick={() => {
                              addItems(3);
                            }}
                          >
                            {itemStatus[3].status}
                          </button>
                        </div>
                      </div>
                      <br />
                    </div>
                  </>
                )}
                {/* -----------------------------------ITEM 5----------------------------------------------------- */}
                {items[4].price === 0 ? (
                  <></>
                ) : (
                  <>
                    <div className="col-md-4">
                      <br />
                      <div className="card rounded">
                        <div className="card-image">
                          <img
                            width="30%"
                            height="30"
                            className="img-fluid"
                            src={items[4].image}
                            alt={items[4].item}
                          />
                        </div>
                        <div className="card-image-overlay m-auto">
                          <i className="fas fa-rupee-sign"></i>
                          <span className="card-detail-badge">
                            {items[4].price}
                          </span>
                        </div>
                        <div className="card-body text-center">
                          <div className="ad-title m-auto">
                            <h5>{items[4].item}</h5>
                          </div>
                          <button
                            type="button"
                            className="ad-btn"
                            onClick={() => {
                              addItems(4);
                            }}
                          >
                            {itemStatus[4].status}
                          </button>
                        </div>
                      </div>
                      <br />
                    </div>
                  </>
                )}
                {/* -----------------------------------ITEM 6----------------------------------------------------- */}
                {items[5].price === 0 ? (
                  <></>
                ) : (
                  <>
                    <div className="col-md-4">
                      <br />
                      <div className="card rounded">
                        <div className="card-image">
                          <img
                            width="30%"
                            height="30"
                            className="img-fluid"
                            src={items[5].image}
                            alt={items[5].item}
                          />
                        </div>
                        <div className="card-image-overlay m-auto">
                          <i className="fas fa-rupee-sign"></i>
                          <span className="card-detail-badge">
                            {items[5].price}
                          </span>
                        </div>
                        <div className="card-body text-center">
                          <div className="ad-title m-auto">
                            <h5>{items[5].item}</h5>
                          </div>
                          <button
                            type="button"
                            className="ad-btn"
                            onClick={() => {
                              addItems(5);
                            }}
                          >
                            {itemStatus[5].status}
                          </button>
                        </div>
                      </div>
                      <br />
                    </div>
                  </>
                )}
                {/* -----------------------------------ITEM 7----------------------------------------------------- */}
                {items[6].price === 0 ? (
                  <></>
                ) : (
                  <>
                    <div className="col-md-4">
                      <br />
                      <div className="card rounded">
                        <div className="card-image">
                          <img
                            width="30%"
                            height="30"
                            className="img-fluid"
                            src={items[6].image}
                            alt={items[6].item}
                          />
                        </div>
                        <div className="card-image-overlay m-auto">
                          <i className="fas fa-rupee-sign"></i>
                          <span className="card-detail-badge">
                            {items[6].price}
                          </span>
                        </div>
                        <div className="card-body text-center">
                          <div className="ad-title m-auto">
                            <h5>{items[6].item}</h5>
                          </div>
                          <button
                            type="button"
                            className="ad-btn"
                            onClick={() => {
                              addItems(6);
                            }}
                          >
                            {itemStatus[6].status}
                          </button>
                        </div>
                      </div>
                      <br />
                    </div>
                  </>
                )}
                {/* -----------------------------------ITEM 8----------------------------------------------------- */}
                {items[7].price === 0 ? (
                  <></>
                ) : (
                  <>
                    <div className="col-md-4">
                      <br />
                      <div className="card rounded">
                        <div className="card-image">
                          <img
                            width="30%"
                            height="30"
                            className="img-fluid"
                            src={items[7].image}
                            alt={items[7].item}
                          />
                        </div>
                        <div className="card-image-overlay m-auto">
                          <i className="fas fa-rupee-sign"></i>
                          <span className="card-detail-badge">
                            {items[7].price}
                          </span>
                        </div>
                        <div className="card-body text-center">
                          <div className="ad-title m-auto">
                            <h5>{items[7].item}</h5>
                          </div>
                          <button
                            type="button"
                            className="ad-btn"
                            onClick={() => {
                              addItems(7);
                            }}
                          >
                            {itemStatus[7].status}
                          </button>
                        </div>
                      </div>
                      <br />
                    </div>
                  </>
                )}
                {/* -----------------------------------ITEM 9----------------------------------------------------- */}
                {items[8].price === 0 ? (
                  <></>
                ) : (
                  <>
                    <div className="col-md-4">
                      <br />
                      <div className="card rounded">
                        <div className="card-image">
                          <img
                            width="30%"
                            height="30"
                            className="img-fluid"
                            src={items[8].image}
                            alt={items[8].item}
                          />
                        </div>
                        <div className="card-image-overlay m-auto">
                          <i className="fas fa-rupee-sign"></i>
                          <span className="card-detail-badge">
                            {items[8].price}
                          </span>
                        </div>
                        <div className="card-body text-center">
                          <div className="ad-title m-auto">
                            <h5>{items[8].item}</h5>
                          </div>
                          <button
                            type="button"
                            className="ad-btn"
                            onClick={() => {
                              addItems(8);
                            }}
                          >
                            {itemStatus[8].status}
                          </button>
                        </div>
                      </div>
                      <br />
                    </div>
                  </>
                )}
                {/* -----------------------------------ITEM 10----------------------------------------------------- */}
                {items[9].price === 0 ? (
                  <></>
                ) : (
                  <>
                    <div className="col-md-4">
                      <br />
                      <div className="card rounded">
                        <div className="card-image">
                          <img
                            width="30%"
                            height="30"
                            className="img-fluid"
                            src={items[9].image}
                            alt={items[9].item}
                          />
                        </div>
                        <div className="card-image-overlay m-auto">
                          <i className="fas fa-rupee-sign"></i>
                          <span className="card-detail-badge">
                            {items[9].price}
                          </span>
                        </div>
                        <div className="card-body text-center">
                          <div className="ad-title m-auto">
                            <h5>{items[9].item}</h5>
                          </div>
                          <button
                            type="button"
                            className="ad-btn"
                            onClick={() => {
                              addItems(9);
                            }}
                          >
                            {itemStatus[9].status}
                          </button>
                        </div>
                      </div>
                      <br />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {pay === false ? (
            <>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setPay(true);
                }}
              >
                Pay <i class="fas fa-rupee-sign"></i> {amount}
              </button>
              <br />
              <br />
              <br />
            </>
          ) : (
            <></>
          )}
        </>
      )}
      {pay === true ? (
        <>
          <StripeContainer amount={amount} itemStatus={itemStatus} />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
