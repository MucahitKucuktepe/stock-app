import React, { useEffect } from "react";
import useStock from "../service/useStock";
import KPI from "../components/KPI";
import Charts from "../components/Charts";

const Home = () => {
  const { getStocks } = useStock();

  useEffect(() => {
    getStocks("sales");
    getStocks("purchases");
  }, []);

  return (
    <>
      <KPI />
      <Charts />
    </>
  );
};

export default Home;
