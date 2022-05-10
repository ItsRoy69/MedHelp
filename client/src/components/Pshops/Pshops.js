import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Pshop from "./Pshop/Pshop";

export default function Pshops() {
  const shop = useSelector((state) => state.shop); // bought all the shops from redux store
  let ps = [];
  if (shop.length !== 0) {
    ps = shop.filter((pshop) => pshop.shopType === "plumbing"); // filter plumbing shops
  }

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Pshop PshopsObj={ps} />{" "}
      {/* passed plumbing shops to Pshop component as props */}
    </>
  );
}
