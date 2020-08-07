import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import useFetch from 'react-fetch-hook';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import Context from '../../contexts/StationContext';

const TableDataAPI = ({ dataSource, render, tableHeaders }) => {
  const { isLoading, data } = useFetch(dataSource);

  return <>{isLoading ? <CircularProgress /> : render(data, tableHeaders)}</>;
};

const SimpleTable = ({ data, tableHeaders, className }) => {
  const [rows, setRows] = useState([]);
  const [context, setContext] = useContext(Context);
  const history = useHistory();

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
    <Table className={className}>
      <TableHead>
        <TableRow>
          {tableHeaders.map((tHead, index) => (
            <TableCell key={`${tHead}-${index}`}>{tHead}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={'row' + rowIndex} hover={true}>
            {row.map((cell, cellIndex) => (
              <TableCell
                key={`cell-${cellIndex}`}
                onClick={() => {
                  setContext(data[row[0] - 1]);
                  history.push(`/station/${rowIndex}`);
                }}
              >
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

SimpleTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  tableHeaders: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export { TableDataAPI, SimpleTable };
