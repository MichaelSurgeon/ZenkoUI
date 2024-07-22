import { useEffect, useState } from "react";
import KpiCard from "../../Componenets/KpiCard/KpiCard";
import NavBar from "../../Componenets/NavBar/NavBar";
import { getAgregattedTransactions, getAllTransactionByDateData, getBudgetSplitData, getTransactionData } from "../../Componenets/Services/CalculationService.js"
import "./Home.css"
import TransactionDataTable from "../../Componenets/TransactionDataTable/TransactionDataTable";
import LineChart from "../../Componenets/LineChart/LineChart";
import React from "react";

type AggregatedData = {
    totalSpend: number
    transactionCount: number
    mostCommonCategory: string
}

type TransactionResponse = {
    totalPages: number
    transactions: any
};

type TransactionByDateResponse = {
    name: string
    amount: string,
    location: string,
    date: string,
    category: string
};


function Home() {

    const userId = React.useMemo(() => {
        localStorage.getItem("UserId");
    }, []);

    const [aggregatedData, setAggregatedData] = useState<AggregatedData>();
    const [transactionData, setTransactionData] = useState<TransactionResponse>();
    const [transactionByDateData, setTransactionByDateData] = useState<TransactionByDateResponse>();
    const [isBusy, setBusyState] = useState(true);

    useEffect(() => {
        async function getData() {
            await fetchOrderedTransactionData();
            await fetchAggregatedData();
            await fetchTransactionData();
            setBusyState(false);
        }
        getData();
    }, []);

    async function fetchAggregatedData() {
        try {
            const response = await getAgregattedTransactions(userId) as AggregatedData;
            setAggregatedData(response)
        } catch (error) {
            console.log(error);
            alert("error fetching file information");
        }
    }

    async function fetchTransactionData() {
        try {
            const response = await getTransactionData(userId, null) as TransactionResponse;
            setTransactionData(response)
        } catch (error) {
            console.log(error);
            alert("error fetching transaction information");
        }
    }

    async function fetchOrderedTransactionData() {
        try {
            const response = await getAllTransactionByDateData(userId) as TransactionByDateResponse;
            setTransactionByDateData(response)
        } catch (error) {
            console.log(error);
            alert("error fetching transaction information");
        }
    }

    return (
        <>
            <div className="home-nav-bar">
                <NavBar/>
            </div>
            {isBusy ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="wrapper">
                    <div className="kpi-home-card-container">
                        <KpiCard header="Total Spend" data={aggregatedData?.totalSpend != null ? "£" + aggregatedData?.totalSpend : "N/A"}/>
                        <KpiCard header="Transactions" data={aggregatedData?.transactionCount}/>
                        <KpiCard header="Most Common" data={aggregatedData?.mostCommonCategory}/>
                        <KpiCard header="Rating"/>
                    </div>
                    {Array.isArray(transactionByDateData) &&
                    <>
                        <div className="home-line-graph">
                            <h2 className="transaction-home-data-table-header">Spend Per Day (Month) </h2>
                            <LineChart data={transactionByDateData}/>
                        </div>
                    </>
                    }
                    {transactionData &&
                        <>
                            <div className="transaction-home-data-table-container">
                                <h2 className="transaction-home-data-table-header">Transactions</h2>
                                <TransactionDataTable data={transactionData}/>
                            </div>
                        </>
                    }
                </div>
            )}
        </>
    )
}

export default Home;