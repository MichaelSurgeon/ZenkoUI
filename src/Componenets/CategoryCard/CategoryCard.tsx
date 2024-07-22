import "./CategoryCard.css";

function CategoryCard(data: any) {
    const dat = data.data;
    const category: string = data.data.category;

    const colours: Record<string, string> = {
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

    let bgColor: string = "";

    if(category in colours) {
        bgColor = colours[category];
    } else {
        bgColor = "black";
    }


    return (
        <>
            <div className="category-card-wrapper">
                <div className="category-card-header" style={{ backgroundColor: bgColor}}>
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