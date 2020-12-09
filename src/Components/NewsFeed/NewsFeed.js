import React, { useEffect, useState } from "react";
import TimeLine from "../TimeLine/TimeLine";
import LineGraph from "../LineGraph/LineGraph";
import "./NewsFeed.css";
import { Clear } from "@material-ui/icons";
import { Avatar, Chip } from "@material-ui/core";

const NewsFeed = () => {
  const [isClose, setIsClose] = useState(false);
  const popularTopic = [
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Pharma",
  ];
  const sprites = Math.random() > 0.5 ? "male" : "female";
  const [year, setYear] = useState(365);

  const changeYear = (time) => {
    setYear(time);
  };
  return (
    <div className="newsFeed">
      <div className="newsFeed__container">
        <div className="newsFeed__chartSection">
          <div className="newsFeed__portfolio">
            <h1>$114,656</h1>
            <p>+44.63 (0.04%) Today</p>
          </div>
          <div className="newsFeed__chart">
            <LineGraph year={year} />
            <TimeLine changeYear={changeYear} />
          </div>
        </div>
        <div className="newsFeed__buyingSection">
          <h4>Buying Power</h4>
          <h4>$4.11</h4>
        </div>
        <div className={`newsFeed__marketSection ${isClose && "close"}`}>
          <div className="newsFeed__marketBox">
            <h5>Markets Closed</h5>
            <h2>Happy Thanksgiving</h2>
          </div>
          <Clear
            className="newsFeed__marketIcon"
            onClick={() => setIsClose(true)}
          />
        </div>
        <div className="newsFeed__popularitySection">
          <div className="newsFeed__popularityHeader">
            <h2>Popular Lists</h2>
            <p>Show More</p>
          </div>
          <div className="newsFeed__popularityContent">
            {popularTopic.map((topic) => (
              <Chip
                variant="outlined"
                label={topic}
                avatar={
                  <Avatar
                    src={`https://avatars.dicebear.com/api/${sprites}/${Math.round(
                      Math.random() * 1000
                    )}.svg
`}
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
