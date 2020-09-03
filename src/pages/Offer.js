import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./offer.css";
function Offer() {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://leboncoin-api.herokuapp.com/offer/" + id
      );
      setData(res.data);
      setIsloading(false);
    };
    fetchData();
  }, [id]);
  // console.log("offer info", data.picture.secure_url);
  return (
    <div>
      {isLoading === true ? (
        <h1>your offer come </h1>
      ) : (
        <>
          <div className="offer__container">
            <img
              className="offer__picrure"
              src={data.picture.secure_url}
              alt={data.title}
            />

            <div className="offer__textInfo">
              <h3>{data.title}</h3>
              <h3>{data.price}</h3>
            </div>
          </div>
          <p>{data.description}</p>
        </>
      )}
    </div>
  );
}

export default Offer;
