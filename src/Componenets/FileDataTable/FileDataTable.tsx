import React, { useState } from "react";
import "./FileDataTable.css";
import { useTable, Column, usePagination } from "react-table";

type Data = {
    fileName: string;
    fileSize: string;
    fileDate: string;
  };

function FileDataTable(data : any) {
    const [pageNo, setPageNo] = useState(1);
    const memoizedMappedData = React.useMemo(() => {
        if (Array.isArray(data.data)) {
          return data.data.map((item: Data) => ({ ...item }));
        } else {
          return [];
        }
      }, [data]);

    const columns: Column<Data>[] = React.useMemo(() => [
        {
            Header: 'File Name',
            accessor: 'fileName'
        },
        {
            Header: 'File Size(KB)',
            accessor: 'fileSize'
        },
        {
            Header: 'Date',
            accessor: 'fileDate'
        }
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage
    } = useTable(
        {
            columns : columns,
            data : memoizedMappedData,
            initialState: { pageSize: 5 }
        },
        usePagination
    )

    return(
        <>
            <div className="table-container">
                <table  {...getTableProps()}>
                    <thead>
                        {headerGroups.map(( hg ) => (
                            <tr {...hg.getHeaderGroupProps()}>
                                {hg.headers.map((col) => (
                                    <th {...col.getHeaderProps()}>
                                        {col.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="filedata-pagination-wrapper">
        <div className="filedata-currentpage">
          <p>{"Page: " + pageNo}</p>
        </div>
        <button
          className="filedata-nextpage"
          onClick={() => {
            nextPage();
            setPageNo(pageNo + 1);
          }}
          disabled={!canNextPage}
        >
          Next
        </button>
        <button
          className="filedata-previous"
          onClick={() => {
            previousPage();
            setPageNo(pageNo - 1);
          }}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
      </div>
        </>
    )
}

export default FileDataTable;