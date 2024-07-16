import React, { useState } from "react";
import "./TransactionDataTable.css";
import { useTable, Column, usePagination } from "react-table";

type Transaction = {
    name: string;
    amount: string;
    location: string;
    date: string;
    category: string;
  };

function TransactionDataTable(data : any) {
    const memoizedMappedData = React.useMemo(() => {
        if (Array.isArray(data.data)) {
          return data.data.map((item: Transaction) => ({ ...item }));
        } else {
          return [];
        }
      }, [data]);

    const columns: Column<Transaction>[] = React.useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Amount',
            accessor: 'amount'
        },
        {
            Header: 'Location',
            accessor: 'location'
        },
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Category',
            accessor: 'category'
        }
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns : columns,
            data : memoizedMappedData,
        }
    )

    return(
        <>
            <div className="table-container-transactions">
                <table className="transactions-table"  {...getTableProps()}>
                    <thead>
                        {headerGroups.map(( hg ) => (
                            <tr {...hg.getHeaderGroupProps()}>
                                {hg.headers.map((col) => (
                                    <th className="transactions-table-th" {...col.getHeaderProps()}>
                                        {col.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td className="transactions-table-td" {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TransactionDataTable;