import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Title from "../../shared/components/Title";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

export default class Example extends PureComponent {
  //   static jsfiddleUrl = "https://jsfiddle.net/alidingling/9xopwa9v/";

  render() {
    return (
      <React.Fragment>
        <Title>Chart 1 Title - Comparison</Title>
        <ResponsiveContainer>
          <ComposedChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              bottom: 10,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="pv" barSize={20} fill="#413ea0" />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="uv"
              stroke="#ff7300"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}
