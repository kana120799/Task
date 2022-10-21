import React, { useState } from "react";
import styled from "./CSS/Home.module.css";
import Chart from "react-apexcharts";
import { data } from "../data";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   LineElement,
//   Legend,
//   LinearScale,
//   CategoryScale,
//   PointElement,
// } from "chart.js";

// ChartJS.register(
//   Title,
//   Tooltip,
//   LineElement,
//   Legend,
//   LinearScale,
//   CategoryScale,
//   PointElement
// );
const pdata = [
  {
    name: "Jan",
    Products: 19,
    views: 15,
  },
  {
    name: "Feb",
    Products: 7,
    views: 10,
  },
  {
    name: "Mar",
    Products: 16,
    views: 15,
  },
  {
    name: "Apr",
    Products: 13,
    views: 18,
  },
  {
    name: "May",
    Products: 17,
    views: 15,
  },
  {
    name: "Jun",
    Products: 24,
    views: 10,
  },
];
const ddata = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
function Home() {
  const [data, setData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First Datset",
        data: [5, 10, 15, 20, 25],
        backgroundColor: "yellow",
      },
    ],
  });
  return (
    <>
      <div className={styled.HomeGrid}>
        <div
          style={{
            height: 250,
            width: 250,
            backgroundColor: "#fff",
            borderRadius: "15px",
            gridRowStart: 1,
            gridRowEnd: 1,
            gridColumnStart: 1,
            gridColumnEnd: 2,
            margin: 15,
            paddingLeft: 0,
          }}
        >
          <AreaChart
            width={250}
            height={150}
            data={pdata}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" interval={"preserveStartEnd"} />
            <YAxis
              type="number"
              tickFormatter={(value) => "$" + value}
              domain={[5, 25]}
              unit={"k"}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Products"
              stroke="#8884d8"
              fillOpacity={3}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="views"
              stroke="#82ca9d"
              fillOpacity={1}
              activeDot={{ r: 3 }}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
        <div
          style={{
            height: 250,
            width: 250,
            backgroundColor: "#fff",
            borderRadius: "15px",
            gridRowStart: 1,
            gridRowEnd: 1,
            gridColumnStart: 2,
            gridColumnEnd: 3,
            margin: 15,
          }}
        >
          <Chart
            type="donut"
            width={300}
            height={300}
            series={[4260, 3970, 4260, 3970]}
            options={{
              labels: ["France", "Italy", "Japan", "Canada"],

              plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show: true,
                      Totals: {
                        show: true,
                        fontSize: 25,
                        color: "red",
                      },
                    },
                  },
                },
              },
              dataLabels: {
                enabled: false,
              },
            }}
          ></Chart>
        </div>
        <div
          style={{
            height: 400,
            width: 250,
            backgroundColor: "#fff",
            borderRadius: "15px",
            gridRowStart: 1,
            gridRowEnd: 3,
            gridColumnStart: 3,
            gridColumnEnd: 4,
            margin: 15,
          }}
        ></div>
        <div
          style={{
            height: 250,
            width: 500,
            backgroundColor: "#fff",
            borderRadius: "15px",
            gridRowStart: 2,
            gridRowEnd: 3,
            gridColumnStart: 1,
            gridColumnEnd: 3,
            margin: 15,
          }}
        ></div>
        <div
          style={{
            height: 250,
            width: 250,
            backgroundColor: "#fff",
            borderRadius: "15px",
            gridRowStart: 2,
            gridRowEnd: 3,
            gridColumnStart: 3,
            gridColumnEnd: 4,
            marginTop: 15,
          }}
        ></div>
      </div>
      {/* <div>
        <Line data={data}>Hello</Line>
      </div> */}

      <div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "50px",
              paddingLeft: "0px",
              paddingBottom: "25px",
            }}
            data={pdata}

            //   margin={{ top: 5, right: 300, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" interval={"preserveStartEnd"} />
            <YAxis
              type="number"
              tickFormatter={(value) => "$" + value}
              domain={[5, 25]}
              unit={"k"}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="Products"
              stroke="pink"
              activeDot={{ r: 8 }}
              style={{ width: "150px" }}
            />
            <Line
              type="monotone"
              dataKey="views"
              stroke="green"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Home;
