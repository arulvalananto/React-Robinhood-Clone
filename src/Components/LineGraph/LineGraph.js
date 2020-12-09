import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./LineGraph.css";

const LineGraph = ({ year }) => {
  const [graphData, setGraphData] = useState([]);

  const createMockData = () => {
    let data = [];
    let value = 50;
    for (let i = 0; i < year; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10) - Math.round(Math.random() * 5);
      data.push({ x: date, y: value });
    }
    setGraphData(data);
  };

  useEffect(() => {
    createMockData();
  }, [year]);

  return (
    <div className="lineGraph">
      <Line
        data={{
          datasets: [
            {
              type: "line",
              data: graphData,
              backgroundColor: "black",
              borderColor: "#5AC53B",
              borderWidth: 2,
              pointBorderColor: "rgba(0, 0, 0, 0)",
              pointBackgroundColor: "rgba(0, 0, 0, 0)",
              pointHoverBorderColor: "#00000",
              pointHoverBackgroundColor: "#5AC53B",
              pointHoverBorderWidth: 4,
              pointHoverRadius: 6,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          scales: {
            xAxes: [
              {
                type: "time",
                time: {
                  displayFormats: "DD/MM/YY",
                  tooltipFormat: "ll",
                },
                ticks: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default LineGraph;
