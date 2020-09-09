import React, { useState, useEffect } from "react";
import axios from "axios";
import Offre from "../Components/Offre";
import { Link } from "react-router-dom";
import Pagination from "../Components/Pagination";

function Offers() {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(true);
  const limit = 5;

  //   je fais un useEffect pour recupere les informations de mon api

  useEffect(() => {
    const fecthData = async () => {
      const response = await axios.get(
        `https://leboncoin-api.herokuapp.com/offer/with-count?page=${page}&limit=${limit}`
      );
      setData(response.data);
      setIsloading(false);
    };
    fecthData();
  }, [page]);
  // console.log("junior", data);

  return (
    <div>
      {isLoading === true ? (
        <h1>Chargement ...</h1>
      ) : (
        <>
          <div>
            {data.offers.map((offer, i) => {
              return (
                <Link key={i} to={"/offer/" + offer._id}>
                  <Offre
                    image={offer.picture}
                    title={offer.title}
                    price={offer.price}
                    created={offer.picture.created_at}
                  />
                </Link>
              );
            })}
            <Pagination count={data.count} limit={limit} setPage={setPage} />
          </div>
        </>
      )}
    </div>
  );
}

export default Offers;
