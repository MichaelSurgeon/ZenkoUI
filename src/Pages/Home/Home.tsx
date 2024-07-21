import { useEffect, useState } from "react";
import KpiCard from "../../Componenets/KpiCard/KpiCard";
import NavBar from "../../Componenets/NavBar/NavBar";
import { getAgregattedTransactions, getTransactionData } from "../../Componenets/Services/CalculationService.js"
import "./Home.css"
import TransactionDataTable from "../../Componenets/TransactionDataTable/TransactionDataTable";

type AggregatedData = {
    totalSpend: number
    transactionCount: number
    mostCommonCategory: string
}

type TransactionResponse = {
    totalPages: number
    transactions: any
};

const userId = localStorage.getItem("UserId");

function Home() {
    const [aggregatedData, setAggregatedData] = useState<AggregatedData>();
    const [transactionData, setTransactionData] = useState<TransactionResponse>();

    useEffect(() => {
        fetchAggregatedData();
        fetchTransactionData();
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
            console.log(response.totalPages);
            console.log(transactionData?.totalPages)
        } catch (error) {
            console.log(error);
            alert("error fetching file information");
        }
    }

    return (
        <>
            <div className="wrapper">
                <NavBar/>
            </div>
            <div className="kpi-home-card-container">
                <KpiCard header="Total Spend" data={aggregatedData?.totalSpend != null ? "£" + aggregatedData?.totalSpend : "N/A"}/>
                <KpiCard header="Transactions" data={aggregatedData?.transactionCount}/>
                <KpiCard header="Most Common" data={aggregatedData?.mostCommonCategory}/>
                <KpiCard header="Rating"/>
            </div>
            <div className="transaction-home-data-table-container">
                <h2 className="transaction-home-data-table-header">Transactions</h2>
                <TransactionDataTable data={transactionData?.transactions} pageCount={transactionData?.totalPages} />
            </div>
        </>
    )
}

export default Home;