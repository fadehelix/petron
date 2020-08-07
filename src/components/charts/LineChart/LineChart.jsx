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
import { ErrorMessage } from '../../ErrorMessage';

import { ChartLoader } from '..';

const LineChart = ({ dataSource }) => {
  const { isLoading, data, error } = useFetch(dataSource);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setChartData(data);
  }, [data]);

  if (error) {
    return <ErrorMessage>Cannot receive data :(</ErrorMessage>;
  }
  return (
    <>
      {isLoading ? (
        <ChartLoader containerHeight={300} />
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
