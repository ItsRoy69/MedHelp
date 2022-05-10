import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Item from "./Item/Item";

export default function Items() {
  // const [shops, setShops] = useState([]);

  // ----------------GET ITEMS-----------------------

  // const [items, setItems] = useState([]);
  let items = [];
  const location = useLocation();

  var getItemsTogether = (shops) => {
    const shop = shops.filter(
      (shop) => shop._id === location.search.slice(1)
    )[0];

    items = [
      { image: shop.image1, item: shop.item1, price: shop.price1 },
      { image: shop.image2, item: shop.item2, price: shop.price2 },
      { image: shop.image3, item: shop.item3, price: shop.price3 },
      { image: shop.image4, item: shop.item4, price: shop.price4 },
      { image: shop.image5, item: shop.item5, price: shop.price5 },
      { image: shop.image6, item: shop.item6, price: shop.price6 },
      { image: shop.image7, item: shop.item7, price: shop.price7 },
      { image: shop.image8, item: shop.item8, price: shop.price8 },
      { image: shop.image9, item: shop.item9, price: shop.price9 },
      { image: shop.image10, item: shop.item10, price: shop.price10 },
    ];
  };

  let shops = useSelector((state) => state.shop);

  console.log(shops);
  if (shops.length !== 0) {
    getItemsTogether(shops);
  }

  // ------------------------ADD TO CART-------------------------------------------

  const [itemStatus, setItemStatus] = useState([
    { name: "", price: 0, status: "BUY" },
    { name: "", price: 0, status: "BUY" },
    { name: "", price: 0, status: "BUY" },
    { name: "", price: 0, status: "BUY" },
    { name: "", price: 0, status: "BUY" },
    { name: "", price: 0, status: "BUY" },
    { name: "", price: 0, status: "BUY" },
    { name: "", price: 0, status: "BUY" },
    { name: "", price: 0, status: "BUY" },
    { name: "", price: 0, status: "BUY" },
  ]);

  var addItems = (h) => {
    let temp = [...itemStatus];

    if (temp[h].status === "BUY") {
      temp[h].status = "ADDED";
      temp[h].price = items[h].price;
      temp[h].name = items[h].item;
      setItemStatus(temp);
    } else {
      temp[h].status = "BUY";
      temp[h].price = 0;
      setItemStatus(temp);
    }
    setAmount(itemStatus.map(itemPrice).reduce(sum));
  };

  // --------------------------AMOUNT-----------------------------------
  const [amount, setAmount] = useState(0);

  function itemPrice(item) {
    return item.price;
  }

  function sum(prev, next) {
    return prev + next;
  }

  return (
    <>
      <Item
        items={items}
        itemStatus={itemStatus}
        addItems={addItems}
        amount={amount}
      />
    </>
  );
}
