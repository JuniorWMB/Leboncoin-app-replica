import React, { useState, useEffect } from "react";
import axios from "axios";

function Offers() {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(false);

  //   je fais un useEffect pour recupere les informations de mon api

  useEffect(() => {
    const fecthData = async () => {
      const response = await axios.get();
    };
  }, []);

  return <div></div>;
}

export default Offers;
