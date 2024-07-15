import { useEffect } from "react";
import KpiCard from "../../Componenets/KpiCard/KpiCard";
import NavBar from "../../Componenets/NavBar/NavBar";
import "./Home.css"

function Home() {

    useEffect(() => {
        //get all data required
    })

    return (
        <>
        <div className="wrapper">
            <NavBar/>
        </div>
        <div className="kpi-home-card-container">
            <KpiCard/>
            <KpiCard/>
            <KpiCard/>
            <KpiCard/>
        </div>
        </>
    )
}

export default Home;