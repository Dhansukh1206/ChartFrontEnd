import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function OHLCVChart({ data }) {
  const opneOptions = {
    title: {
      text: "Open Transaction Chart",
    },
    series: [
      {
        name: "Open Chart",
        color: 'grey',
        data: data.map(({ time, open }) => [time, open]),
      },
    ],
  };
  const highOptions = {
    title: {
      text: "High Transaction Chart",
    },
    series: [
      {
        name: "High Chart",
        color: 'green',
        data: data.map(({ time, high }) => [time, high]),
      },
    ],
  };
  const closeOptions = {
    title: {
      text: "Close Transaction Chart",
    },
    series: [
      {
        name: "Close Chart",
        color: 'yellow',
        data: data.map(({ time, close }) => [time, close]),
      },
    ],
  };
  const lowOptions = {
    title: {
      text: "Low Transaction Chart",
    },
    series: [
      {
        name: "Low Chart",
        color: 'red',
        data: data.map(({ time, low }) => [time, low]),
      },
    ],
  };
  const volumeOptions = {
    title: {
      text: "Volume Transaction Chart",
    },
    series: [
      {
        name: "Volume Chart",
        color: 'blue',
        data: data.map(({ time, volume }) => [time, volume]),
      },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={opneOptions} />
      <HighchartsReact highcharts={Highcharts} options={highOptions} />
      <HighchartsReact highcharts={Highcharts} options={closeOptions} />
      <HighchartsReact highcharts={Highcharts} options={lowOptions} />
      <HighchartsReact highcharts={Highcharts} options={volumeOptions} />
    </>
  );
}

export default OHLCVChart;
