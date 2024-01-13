import { ohlcData } from "./data";

//proposed interface for ChartData Structure
interface DataPointStructure {
  x: Date;
  y: number[];
}

interface SeriesStructure {
  data: DataPointStructure[];
}

interface ChartDataStructure {
  series: SeriesStructure[];
}

//  proposed interface for c Structure
type ChartDataPoint = number[];
type ChartData = ChartDataPoint[];

const ChartDataOHLC: ChartData = ohlcData;

const ForgedChartData: ChartDataStructure = {
  series: [
    {
      data: [],
    },
  ],
};

const CoingeckoChartData: ChartDataStructure = {
  series: [
    {
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
      ],
    },
  ],
};

// const revampedData = ohlcData.forEach((item, idx) => {
//   console.log(item[0]);

//   ForgedChartData.series[0].data.push({
//     x: new Date(12333),
//     y: [12],
//   });
// });

for (let i = 0; i < ohlcData.length; i++) {
  ForgedChartData.series[0].data.push({
    x: new Date(ohlcData[i][0]),
    y: ohlcData[i].splice(1),
  });
}

console.log(ForgedChartData.series[0].data);

// console.log(revampedData);

// ForgedChartData.series[0].data.push({
//   x: new Date(item[idx]),
//   y: [item[idx], item[idx], item[idx]],
// });

// console.log(filtered);
