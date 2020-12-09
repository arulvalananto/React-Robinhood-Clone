import React from "react";
import "./StatsRow.css";
import Stock from "../../../stock.svg";
import { db } from "../../../firebase";

const StatsRow = (props) => {
  const percentage = ((props?.price - props?.openPrice) / props?.price) * 100;

  const buyStock = () => {
    db.collection("myStocks")
      .where("ticker", "==", props?.name)
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          snapshot.docs.map((doc) => {
            db.collection("myStocks")
              .doc(doc.id)
              .update({
                shares: +(doc.data().shares) + 1,
              });
          });
        } else {
          db.collection('myStocks').add({
            ticker: props?.name,
            shares: 1
          })
        }
      });
  };

  return (
    <div className="statsRow" onClick={buyStock}>
      <div className="statsRow__intro">
        <h5>{props?.name}</h5>
        {props.shares ? <p>{props?.shares} shares</p> : null}
      </div>
      <div className="statsRow__chart">
        <img src={Stock} alt="" height={16} />
      </div>
      <div className="statsRow__numbers">
        <div className="statsRow__price">${props?.price}</div>
        <div
          className={`statsRow__percentage ${
            percentage > 0
              ? "statsRow__percentage--green"
              : "statsRow__percentage--red"
          }`}
        >
          {percentage > 0 && "+"}
          {+percentage.toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

export default StatsRow;
