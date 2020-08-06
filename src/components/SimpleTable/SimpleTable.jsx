import React, { useEffect, useState, useContext } from 'react';
import useFetch from 'react-fetch-hook';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import Context from '../../contexts/StationContext';

const TableDataAPI = ({ dataSource, render, tableHeaders }) => {
  const { isLoading, data } = useFetch(dataSource);

  return <>{isLoading ? <CircularProgress /> : render(data, tableHeaders)}</>;
};

const SimpleTable = ({ data, tableHeaders }) => {
  const [rows, setRows] = useState([]);
  const [context, setContext] = useContext(Context);

  const mapRowByHeaders = (row, headers) => {
    const output = [];
    for (let i = 0; i < headers.length; i++) {
      output.push(row[headers[i]]);
    }
    return output;
  };

  useEffect(() => {
    const tableRows = data.map((tr) => mapRowByHeaders(tr, tableHeaders));
    setRows(tableRows);
  }, [data, tableHeaders]);
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          {tableHeaders.map((tHead, index) => (
            <TableCell key={`${tHead}-${index}`}>{tHead}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow
            key={'row' + rowIndex}
            hover={true}
            component={Link}
            to={`/station/${rowIndex + 1}`}
            onClick={() => setContext(data[row[0]])}
          >
            {row.map((cell, cellIndex) => (
              <TableCell key={`cell-${cellIndex}`}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export { TableDataAPI, SimpleTable };
