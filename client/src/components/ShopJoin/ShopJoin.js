import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./style.css";
import { useDispatch } from "react-redux";
import { createShop } from "../../actions/shop";

export default function ShopJoin() {
  const dispatch = useDispatch();
  const [shop, setShop] = useState({
    ownerName: "",
    phoneNo: "",
    email: "",
    userName: "",
    passWord: "",
    city: "",
    shopName: "",
    address: "",
    latitude: 0,
    longitude: 0,
    description: "",
    shopType: "plumbing",
    image1: "",
    item1: "",
    price1: 0,
    image2: "",
    item2: "",
    price2: 0,
    image3: "",
    item3: "",
    price3: 0,
    image4: "",
    item4: "",
    price4: 0,
    image5: "",
    item5: "",
    price5: 0,
    image6: "",
    item6: "",
    price6: 0,
    image7: "",
    item7: "",
    price7: 0,
    image8: "",
    item8: "",
    price8: 0,
    image9: "",
    item9: "",
    price9: 0,
    image10: "",
    item10: "",
    price10: 0,
  });
  var pemitems = {
    item1: "tap",
    item2: "Showers",
    item3: "Valves",
    item4: "CPVC Pipes & Fittings",
    item5: "Metal Fittings",
    item6: "Sinks",
    item7: "Toilet Pot",
    item8: "Flush Valve",
    item9: "Water Storage Solution",
    item10: "water geyser",
  };
  var electricItems = {
    item1: "LED Bulb",
    item2: "WIRE",
    item3: "MCB",
    item4: "Extension Box",
    item5: "Switch",
    item6: "Socket",
    item7: "Switch Board",
    item8: "Bulb Holder",
    item9: "Tube Light",
    item10: "Choke",
  };
  var mechanicItems = {
    item1: "Wheel",
    item2: "Gear",
    item3: "Electric Wrench",
    item4: "Mechanic ToolSet",
    item5: "Adjustable spanner",
    item6: "Wire Stripper",
    item7: "Screw Driver",
    item8: "Springs",
    item9: "Clamp",
    item10: "Mechanical Clutches",
  };

  var plumbImages = {
    image1:
      "https://images.all-free-download.com/images/graphiclarge/water_tap_185413.jpg",
    image2:
      "https://www.pngall.com/wp-content/uploads/2017/01/Shower-PNG-HD.png",
    image3: "link-http://sc04.alicdn.com/kf/HTB1cdX8djfguuRjSspkq6xchpXar.jpg",
    image4:
      "https://5.imimg.com/data5/EL/WJ/GZ/SELLER-4166175/cpvc-fittings-500x500.jpg",
    image5:
      "https://www.pngitem.com/pimgs/m/202-2022437_metal-gasket-face-seal-fittings-hd-png-download.png",
    image6:
      "https://www.kindpng.com/picc/m/754-7541611_stainless-steel-kitchen-sinks-and-taps-hd-png.png",
    image7: "https://m.media-amazon.com/images/I/71632zcfnkL._AC_SL1500_.jpg",
    image8:
      "https://5.imimg.com/data5/XH/MR/PD/SELLER-16591170/jaquar-40-mm-complete-flush-valve-500x500.jpg",
    image9:
      "https://media.istockphoto.com/photos/group-of-water-tanks-picture-id514226506?k=20&m=514226506&s=612x612&w=0&h=ak7p4yEwRiYM-hO2NRAaihvkejgSJbXFTcPY43l45Kc=",
    image10: "https://m.media-amazon.com/images/I/81wuI-GQH6L._SL1500_.jpg",
  };

  var electImages = {
    image1:
      "https://www.assets.signify.com/is/image/PhilipsLighting/35ffa81abb31491296a2abf900e58b4b?wid=494&hei=435&$pnglarge$",
    image2:
      "https://5.imimg.com/data5/SELLER/Default/2020/8/TJ/KE/CI/35340405/electrical-cable-500x500.png",
    image3:
      "https://image.made-in-china.com/202f0j00ceSQCqHzkJWN/Original-Integrated-Circuit-DIN-Rail-Miniature-Circuit-Breaker-DIN-Rail-100A-MCB-DIN-Mini-Circuit-Breaker.webp",
    image4:
      "https://cdn.shopify.com/s/files/1/0100/5898/9604/products/ORBIT2PINFLEXBOX5Mtr._580x.jpg?v=1598908668",
    image5:
      "https://5.imimg.com/data5/SELLER/Default/2020/10/OX/KO/JO/43448572/electric-switch-button-500x500.jpg",
    image6:
      "https://www.bestofelectricals.com/images/thumbs/0024716_cona-status-6a-2-in-1-socket_600.jpeg",
    image7:
      "https://static.connect2india.com/c2icd/product_resources/images/main-switch-board.jpg",
    image8: "https://m.media-amazon.com/images/I/61x77KVcr3L._SL1500_.jpg",
    image9:
      "https://n4.sdlcdn.com/imgs/f/v/w/Philips-20W-LED-Tube-Light-SDL732356256-1-048df.jpg",
    image10:
      "https://1.bp.blogspot.com/-hYBfbIbgDjE/WLHPPjwJg-I/AAAAAAAAA_0/F_3sd2AixowJhPp9GTsnXlaWhCI8vdPYwCEw/s1600/TP913702241400-RTP-global-001.jpg",
  };

  var mechanicImages = {
    image1:
      "https://d3tye5etyupvvn.cloudfront.net/img/alloys-wheels-rims-tsw-aileron-5-lug-metallic-gunmetal-22x11-std-700.jpg",
    image2:
      "https://5.imimg.com/data5/CI/GR/MY-15645688/spur-helical-gear-500x500.jpg",
    image3:
      "https://5.imimg.com/data5/EI/JI/HI/SELLER-6224735/electric-impact-wrench-1-2-sq-dr-1050watts-torque-550nm-ingco-500x500.jpg",
    image4: "https://m.media-amazon.com/",
    image5:
      "https://5.imimg.com/data5/NV/TL/MY-8389882/carbide-tips-500x500.jpg",
    image6: "https://m.media-amazon.com/images/I/715aMP3f2IL._SL1500_.jpg",
    image7: "https://m.media-amazon.com/images/I/81SCxojVGnL._SL1500_.jpg",
    image8:
      "https://2l2cay2y05fl2aba9x29f5xj-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/springs-image06.png",
    image9:
      "https://cdn.mechanicaljungle.com/wp-content/uploads/2021/06/18.-F-Clamp-1024x618.jpg",
    image10:
      "https://5.imimg.com/data5/MJ/XM/MY-364420/mechanical-clutch-500x500.jpg",
  };

  var collapseTitle;
  var collapseItems = {};
  var collapseImage = {};
  if (shop.shopType === "plumbing") {
    collapseTitle = "Plumbing Items";
    collapseItems = pemitems;
    collapseImage = plumbImages;
  } else if (shop.shopType === "electric") {
    collapseTitle = "Electric Items";
    collapseItems = electricItems;
    collapseImage = electImages;
  } else {
    collapseTitle = "Mechanic Items";
    collapseItems = mechanicItems;
    collapseImage = mechanicImages;
  }
  shop.item1 = collapseItems.item1;
  shop.item2 = collapseItems.item2;
  shop.item3 = collapseItems.item3;
  shop.item4 = collapseItems.item4;
  shop.item5 = collapseItems.item5;
  shop.item6 = collapseItems.item6;
  shop.item7 = collapseItems.item7;
  shop.item8 = collapseItems.item8;
  shop.item9 = collapseItems.item9;
  shop.item10 = collapseItems.item10;

  shop.image1 = collapseImage.image1;
  shop.image2 = collapseImage.image2;
  shop.image3 = collapseImage.image3;
  shop.image4 = collapseImage.image4;
  shop.image5 = collapseImage.image5;
  shop.image6 = collapseImage.image6;
  shop.image7 = collapseImage.image7;
  shop.image8 = collapseImage.image8;
  shop.image9 = collapseImage.image9;
  shop.image10 = collapseImage.image10;
  // console.log(shop);
  var submitHandler = (e) => {
    e.preventDefault();
    console.log(shop);
    dispatch(createShop(shop));
    alert("Shop Joined Successfully!!!");
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <form onSubmit={submitHandler}>
        <div className="container-lg">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="contact-form">
                <h1>Join Us</h1>
                <p className="hint-text">
                  Join your shop with us for selling your items online!!!
                </p>

                {/* ---------------------------------------------name, phone, email--------------------------------------------- */}

                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="inputName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        required
                        value={shop.ownerName}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            ownerName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="inputEmail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        required
                        value={shop.email}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="inputPhone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                        required
                        value={shop.phoneNo}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            phoneNo: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <br />

                {/* --------------------------------------------------city, shop name, ------------------------------------------------------- */}
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="shopName">Shop Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        required
                        value={shop.shopName}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            shopName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="city">city</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        required
                        value={shop.city}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            city: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlFile1">
                        Choose Shop Photo
                      </label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                      />
                    </div>
                  </div> */}
                </div>
                <br />
                {/* ------------------------------------------------userName, password-------------------------------------------------------- */}
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="userName">userName</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        required
                        value={shop.userName}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            userName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="passWord">password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        required
                        value={shop.passWord}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            passWord: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <br />
                {/* ------------------------------------------------Lat, Long----------------------------------------------------------------- */}

                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="Latitude">Latitude</label>
                      <input
                        type="text"
                        className="form-control"
                        id="latitude"
                        required
                        value={shop.latitude}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            latitude: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="longitude">Longitude</label>
                      <input
                        type="text"
                        className="form-control"
                        id="longitude"
                        required
                        value={shop.longitude}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            longitude: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <a
                    href="https://www.latlong.net/convert-address-to-lat-long.html"
                    className="col-sm-4 btn btn-primary buttionSize"
                    target="_blank"
                    rel="noopener noreferrer"
                    height="10px"
                  >
                    Get Location
                  </a>
                </div>
                <br />
                {/* ------------------------------------------------Shop type, address ------------------------------------------------------- */}

                {/* <div className="col-sm-4"> */}
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Shop Address
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    value={shop.address}
                    onChange={(e) =>
                      setShop({
                        ...shop,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <br />
                {/* ------------------------------------------------shop type------------------------------------------------------ */}
                <div>
                  <label htmlFor="ShopType">ShopType:</label>
                  <select
                    name="ShopType"
                    id="ShopType"
                    onChange={(e) =>
                      setShop({
                        ...shop,
                        shopType: e.target.value,
                      })
                    }
                  >
                    <option value="plumbing">Plumbing</option>
                    <option value="electric">Electric</option>
                    <option value="mechanic">Mechanic</option>
                  </select>
                </div>
                <br />
                {/* -------------------------------------------------Items ----------------------------------------------------- */}
                <div>
                  <p>
                    <a
                      className="btn btn-primary"
                      data-bs-toggle="collapse"
                      href="#pemitems"
                      role="button"
                      aria-expanded="false"
                      aria-controls="pemitems"
                    >
                      {collapseTitle}
                    </a>
                  </p>

                  <div className="row" id="pemitems" height="">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="price1">{collapseItems.item1}</label>
                        <input
                          type="number"
                          className="form-control"
                          id="price1"
                          required
                          value={shop.price1}
                          onChange={(e) =>
                            setShop({
                              ...shop,
                              price1: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="price2">{collapseItems.item2}</label>
                        <input
                          type="number"
                          className="form-control"
                          id="price2"
                          required
                          value={shop.price2}
                          onChange={(e) =>
                            setShop({
                              ...shop,
                              price2: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="inputPhone">
                          {collapseItems.item3}
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="inputPhone"
                          required
                          value={shop.price3}
                          onChange={(e) =>
                            setShop({
                              ...shop,
                              price3: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="inputName">{collapseItems.item4}</label>
                        <input
                          type="number"
                          className="form-control"
                          id="inputName"
                          required
                          value={shop.price4}
                          onChange={(e) =>
                            setShop({
                              ...shop,
                              price4: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="inputName">{collapseItems.item5}</label>
                        <input
                          type="number"
                          className="form-control"
                          id="inputName"
                          required
                          value={shop.price5}
                          onChange={(e) =>
                            setShop({
                              ...shop,
                              price5: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="inputName">{collapseItems.item6}</label>
                        <input
                          type="number"
                          className="form-control"
                          id="inputName"
                          required
                          value={shop.price6}
                          onChange={(e) =>
                            setShop({
                              ...shop,
                              price6: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="inputName">{collapseItems.item7}</label>
                        <input
                          type="number"
                          className="form-control"
                          id="inputName"
                          required
                          value={shop.price7}
                          onChange={(e) =>
                            setShop({
                              ...shop,
                              price7: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="inputName">{collapseItems.item8}</label>
                        <input
                          type="number"
                          className="form-control"
                          id="inputName"
                          required
                          value={shop.price8}
                          onChange={(e) =>
                            setShop({
                              ...shop,
                              price8: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="inputName">{collapseItems.item9}</label>
                        <input
                          type="number"
                          className="form-control"
                          id="inputName"
                          required
                          value={shop.price9}
                          onChange={(e) =>
                            setShop({
                              ...shop,
                              price9: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="inputName">
                          {collapseItems.item10}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputName"
                          required
                          value={shop.price10}
                          onChange={(e) =>
                            setShop({
                              ...shop,
                              price10: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                {/* ------------------------------------------------description------------------------------------------------------- */}

                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    value={shop.description}
                    onChange={(e) =>
                      setShop({
                        ...shop,
                        description: e.target.value,
                      })
                    }
                  />
                </div>

                {/* ----------------------------------------------------submit------------------------------------------------------------ */}
                <br />
                <button type="submit" className="btn btn-primary">
                  <i className="fa fa-paper-plane" /> Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </form>
    </>
  );
}
