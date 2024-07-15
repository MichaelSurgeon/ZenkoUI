import { useEffect, useState } from "react";
import KpiCard from "../../Componenets/KpiCard/KpiCard";
import NavBar from "../../Componenets/NavBar/NavBar";
import { getAgregattedTransactions } from "../../Componenets/Services/CalculationService.js"
import "./Home.css"

type AggregatedData = {
    totalSpend: number
    transactionCount: number
    mostCommonCategory: string
  }

function Home() {
    const userId = localStorage.getItem("UserId");
    const [aggregatedData, setAggregatedData] = useState<AggregatedData>();

    useEffect(() => {
        async function fetchAggregatedData() {
            try {
                const response = await getAgregattedTransactions(userId) as AggregatedData;
                setAggregatedData(response)
            } catch (error) {
                console.log(error);
                alert("error fetching file information");
            }
        }


        fetchAggregatedData();
    }, [])

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
        </>
    )
}

export default Home;