import "./TransactionDataTable.css";
import React, { useEffect, useState } from "react";
import { useTable, Column, usePagination, CellProps } from "react-table";
import { getTransactionData } from "../../Componenets/Services/CalculationService.js";

type Transaction = {
    name: string;
    amount: string;
    location: string;
    category: string;
    date: string;
  };

const userId = localStorage.getItem("UserId");

function TransactionDataTable(data : any) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageData, setPageData] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    let totalPageCount = data.data.totalPages;

    React.useEffect(() => {
        if (Array.isArray(data.data.transactions)) {
          setPageData(data.data.transactions.map((transaction: Transaction) => ({ ...transaction })));
        } else {
          setPageData([]);
        }
      }, [data]);

    const columns: Column<Transaction>[] = React.useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Amount',
            accessor: 'amount',
            Cell: ({ value }: CellProps<Transaction, string>) => <span>{formatMoney(value)}</span>
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
            accessor: 'category',
            Cell: ({ value }: CellProps<Transaction, string>) => <div className="category-cell-style" style={{backgroundColor: getCategoryColor({value})}}><p>{value}</p></div>
        }
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
    } = useTable(
        {
            columns : columns,
            data : pageData,
            manualPagination: true,
            initialState: {
                pageSize: 10
            }
        },
        usePagination
    )

    useEffect(() => {
        const fetchData = async (page: number) => {
            const response = await getTransactionData(userId, currentPage)
            setPageData(response.transactions);
        }

        fetchData(currentPage);
    }, [currentPage])

    const formatMoney = (value: any) => {
        if (value) {
          return `£` + value;
        }
    };

    const categoryColours: Record<string, string> = {
        "Eating Out": "#EDAE49",
        "Bills": "#AAB2FF",
        "Entertainment": "#427AA1",
        "Transport": "#264653",
        "Shopping": "#E04084",
        "Groceries": "#3DABFA",
        "General": "#8ECE3D",
        "Subscriptions": "#DF4A4A",
        "Debt": "#597BD3",
    }

    const getCategoryColor = (value: any) => {
        return categoryColours[value.value] || "black";
    };

    const canPrevious = currentPage > 1;
    const canNext = currentPage < totalPageCount;

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
                        {page.map((row) => {
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
            <div className="transaction-table-pagination-container">
                    <div className="transaction-table-pagination-currentpage">
                        <p>{'Page: ' + pageNo}</p>
                    </div>
                    <button className="transaction-table-pagination-next" onClick={() => {setCurrentPage(currentPage + 1); setPageNo(pageNo + 1)}} disabled={!canNext}>Next Page</button>
                    <button className="transaction-table-pagination-previous" onClick={() => {setCurrentPage(currentPage - 1); setPageNo(pageNo - 1)}} disabled={!canPrevious}>Previous Page</button>
            </div>
        </>
    )
}

export default TransactionDataTable;