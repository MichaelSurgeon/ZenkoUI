import './KpiCard.css'

const KpiCard = (props : any) => {
    return (
        <>
            <div className='kpi-card'>
                <div className='kpi-card-header-container'>
                    <h1 className='kpi-card-header'>{props.header || "N/A"}</h1>
                </div>
                <div className="kpi-card-container">
                    <h2>{props.data ?? "N/A"}</h2>
                </div>
            </div>
        </>
    )
}

export default KpiCard;