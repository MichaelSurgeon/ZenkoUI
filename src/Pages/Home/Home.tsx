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

type Transaction = {
name: string;
amount: string;
location: string;
date: string;
category: string;
};


const userId = localStorage.getItem("UserId");

function Home() {
    const [aggregatedData, setAggregatedData] = useState<AggregatedData>();
    const [transactionData, setTransactionData] = useState<Transaction>();

    useEffect(() => {
        fetchAggregatedData();
        fetchTransactionData();
    }, [])


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
            const response = await getTransactionData(userId) as Transaction;
            setTransactionData(response)
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
            <h1 className="transaction-home-data-table-header">Transactions</h1>
            <TransactionDataTable />
        </div>
        </>
    )
}



export default Home;