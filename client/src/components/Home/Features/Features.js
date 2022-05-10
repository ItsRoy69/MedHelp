import React from 'react';
import "./Features.css";

export default function Features() {
  return (
    <>
      {/* ------------------------------------------------SLIDER------------------------------------------------------------- */}

      <div
        id="carouselExampleCaptions"
        interval="100"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              height="700"
              width="100"
              src="https://peakbusinessvaluation.com/wp-content/uploads/Valuation-multiples-for-an-electrical-company.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                <b>Find the worker you need</b>{" "}
              </h1>
              <p>
                <b>
                  Pem-joy is a wonderful service for the people who are in need
                  of plumbers, electricens and mechanice. It also provides good
                  oppurtinaty for workers to earn money here shops also register
                  and sell there items so it helps in finding local shop which
                  contain your need.
                </b>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              height="700"
              width="100"
              src="https://auto.edu/wp-content/uploads/ATI-76.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                <b>Save Time and Money</b>
              </h1>
              <p>
                <b>
                  We provide many plumbers, Electricians, mechanics so you can
                  find the correct worker and the nearest worker who will finish
                  the repair work this is extreamly healphful when you are stuck
                  on road due to some repair in car then you can use our app and
                  find the nearest mechanic. Like whise you can contact the
                  reqired worker for repairs which saves lots of time and money.
                </b>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              height="700"
              width="100"
              src="https://st2.depositphotos.com/1001414/5651/i/950/depositphotos_56512865-stock-photo-plumbing-and-tools.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                <b>Buy products Online</b>
              </h1>
              <p className="textColor">
                <b>
                  In Pem-joy we also provide shops for you to pruchase the
                  things required for the repair. we mainly provide plumbing,
                  electrical, and mechinical things so that you dont need to
                  find for shops and buy through our website
                </b>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>     
    </>
  );
}
