import React, { useState, useEffect } from "react";
import axios from "axios";
import Offre from "../Components/Offre";
import { Link } from "react-router-dom";

function Offers() {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);

  //   je fais un useEffect pour recupere les informations de mon api

  useEffect(() => {
    const fecthData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/offer/with-count"
      );
      setData(response.data.offers);
      setIsloading(false);
    };
    fecthData();
  }, []);
  console.log(data);

  return (
    <div>
      {isLoading === true ? (
        <h1>Chargement ...</h1>
      ) : (
        <div>
          {data.map((offer, i) => {
            return (
              <Link to={"/offer/" + offer._id}>
                <Offre
                  image={offer.picture}
                  title={offer.title}
                  price={offer.price}
                  created={offer.picture.created_at}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Offers;
