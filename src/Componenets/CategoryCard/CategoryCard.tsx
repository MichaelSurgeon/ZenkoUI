import "./CategoryCard.css";

function CategoryCard(data: any) {
    const dat = data.data;
    return (
        <>
            <div className="category-card-wrapper">
                <div className="category-card-header">
                    <h2 className="category-header-text">{dat.category || "N/A"}</h2>
                </div>
                <div className="category-card-content">
                    <div className="category-card-content-left">
                        <p>Amount Spent: </p>
                        <p>Transactions Count: </p>
                        <p>Percentage of Income: </p>
                    </div>
                    <div className="category-card-content-right">
                        <p>£{dat.amountSpent || "N/A"} </p>
                        <p>{dat.transactionCount || "N/A"} </p>
                        <p>{dat.percentOfIncome + "%" || "N/A"}</p>
                    </div>
                </div>
                <div className="category-card-status">
                    <p>{dat.status || "N/A"}</p>
                </div>
            </div>
        </>
    )
}

export default CategoryCard;