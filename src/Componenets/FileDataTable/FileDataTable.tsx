import React from "react";
import "./FileDataTable.css";
import { useTable, Column } from "react-table";

function FileDataTable() {

    // const dat = useMemo(() => data, []);
    // const cols = useMemo(() => columns, []);

    type Data = {
        file_name: string;
        file_size: number;
        date: string;
    };
    
    // Define your data
    const data: Data[] = React.useMemo(() => [
        {
            file_name: "10",
            file_size: 15,
            date: "test"
        },
        {
            file_name: "10",
            file_size: 15,
            date: "test"
        },
        {
            file_name: "10",
            file_size: 15,
            date: "test"
        }
    ], []);
    
    // Define your columns
    const columns: Column<Data>[] = React.useMemo(() => [
        {
            Header: 'File Name',
            accessor: 'file_name'
        },
        {
            Header: 'File Size(KB)',
            accessor: 'file_size'
        },
        {
            Header: 'Date',
            accessor: 'date'
        }
    ], []);
    
    // Use the useTable hook
    const table = useTable<Data>({ columns, data });

    return(
        <>
            <div className="table-container">
                <table  {... table.getTableProps()}>
                    <thead>
                        {table.headerGroups.map(( hg ) => (
                            <tr {...hg.getHeaderGroupProps()}>
                                {hg.headers.map((col) => (
                                    <th {...col.getHeaderProps()}>
                                        {col.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))} 
                    </thead>
                    <tbody {...table.getTableBodyProps()}>
                        {table.rows.map((row) => {
                            table.prepareRow(row)
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
        </>
    )
}

export default FileDataTable;