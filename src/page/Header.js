import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function OHLCVChart({ data }) {
  const options = {
    title: {
      text: "Transaction Chart",
    },
    series: [
      {
        name: "Transaction Chart",
        data: data.map(({ time, open, high, low, close, volume }) => [
          time,
          open,
          high,
          low,
          close,
        ]),
        dataGrouping: {
          units: [["day", [1, 2, 3, 4, 5, 6]]],
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default OHLCVChart;
