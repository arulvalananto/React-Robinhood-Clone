import React, { useEffect, useState } from "react";
import "./Stats.css";
import axios from "axios";
import StatsRow from "./StatsRow/StatsRow";
import { db } from "../../firebase";
import { MoreHoriz } from "@material-ui/icons";

const TOKEN = "bv7k4tf48v6o0i4jj5kg";
const BASE_URL = "https://finnhub.io/api/v1/quote";

const Stats = () => {
  const [stockData, setStockData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  const getStocksData = (stock) => {
    return axios.get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`);
  };
  useEffect(() => {
    db.collection("myStocks").onSnapshot((snapshot) => {
      let promises = [];
      let tempData = [];
      snapshot.docs.map((doc) => {
        promises.push(
          getStocksData(doc.data().ticker).then((res) => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data,
            });
          })
        );
      });
      Promise.all(promises).then(() => {
        setMyStocks(tempData);
      });
    });
  }, []);
  useEffect(() => {
    let tempStockData = [];
    const stocksList = [
      "AAPL",
      "MSFT",
      "TSLA",
      "BIS",
      "SBUX",
      "UBER",
      "BABA",
      "FB",
    ];
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          tempStockData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setStockData(tempStockData);
    });
  }, []);
  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
          <MoreHoriz />
        </div>
        <div className="status__content">
          {myStocks.map(({ id, data, info }) => (
            <StatsRow
              key={id}
              name={data?.ticker}
              price={info?.c}
              openPrice={info?.o}
              shares={data?.shares}
            />
          ))}
        </div>
        <div className="stats__header">
          <p>Lists</p>
          <MoreHoriz />
        </div>
        <div className="stats__content">
          {stockData.map((stock) => (
            <StatsRow
              key={stock.name}
              name={stock.name}
              openPrice={stock.o}
              price={stock.c}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
