import React from "react";
import { Pie } from "react-chartjs-2";
import faker from "faker";

const Chart = ({ books }) => {
  const tally = books.reduce((acc, book) => {
    console.log(book.volumeInfo.categories);
    if (book.volumeInfo.categories) {
      book.volumeInfo.categories.forEach(category => {
        acc[category] = (acc[category] || 0) + 1;
      });
    }
    return acc;
  }, {});
  const labels = Object.keys(tally);
  const chartData = labels.map(label => {
    return tally[label];
  });
  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        backgroundColor: labels.map(label => {
          return faker.commerce.color();
        })
      }
    ]
  };
  return (
    <div className="chart">
      <Pie data={data} />
    </div>
  );
};

export default Chart;
