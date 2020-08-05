import React, { useEffect, useState } from 'react';
import {
  LineChart as Chart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from 'recharts';
import useFetch from 'react-fetch-hook';

import Faker from 'faker';

const LineChart = ({ dataSource }) => {
  const { isLoading, data, error } = useFetch(dataSource);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setChartData(data);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            height: 300,
            width: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Loading....
        </div>
      ) : (
        <Chart width={600} height={300} data={chartData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <Legend verticalAlign="top" height={36} />
          <Tooltip />
          <YAxis />
          {!!chartData &&
            chartData[0].keys.map((key, index) => (
              <Line
                dataKey={key}
                stroke={Faker.internet.color()}
                type="monotone"
                key={`line-${index}`}
              />
            ))}
        </Chart>
      )}
    </>
  );
};

export default LineChart;
