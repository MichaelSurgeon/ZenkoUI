import './KpiCard.css'

const KpiCard = (props : any) => {
    return (
        <>
            <div className='kpi-card'>
                <div className='kpi-card-header-container'>
                    <h1 className='kpi-card-header'>{props.header || "N/A"}</h1>
                </div>
                <div className="kpi-card-container"  style={{backgroundColor: props.backgroundColor || "white"}}>
                    <h2 style={{color: props.fontColor}}>{props.data ?? "N/A"}</h2>
                </div>
            </div>
        </>
    )
}

export default KpiCard;