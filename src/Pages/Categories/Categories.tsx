import { useEffect, useState } from "react";
import { getBudgetSplitData, getCalcualtedCategoriesData } from "../../Componenets/Services/CalculationService.js"
import CategoryCard from "../../Componenets/CategoryCard/CategoryCard";
import KpiCard from "../../Componenets/KpiCard/KpiCard";
import NavBar from "../../Componenets/NavBar/NavBar";
import "./Categories.css";

const userId = localStorage.getItem("UserId");

type CalculatedCategory = {
    category: string
    amountSpent: number,
    transactionCount: number,
    percentOfIncome: number,
    status: string
};

type BudgetSplitDataResponse = {
    needs: number
    wants: number,
    debtsAndSavings: number,
};

function Categories() {
    const [calculatedCategoriesData, setCalculatedCategoriesData] = useState<CalculatedCategory[]>([]);
    const [budgetSplitData, setbudgetSplitData] = useState<BudgetSplitDataResponse>();

    useEffect(() => {
        async function getData() {
            await fetchCalculatedCategoriesData()
            await fetchBudgetSplitData()
        }
        getData();
    }, []);

    async function fetchCalculatedCategoriesData() {
        try {
            const response = await getCalcualtedCategoriesData(userId) as CalculatedCategory[];
            setCalculatedCategoriesData(response)
        } catch (error) {
            console.log(error);
            alert("error fetching category information information");
        }
    }

    async function fetchBudgetSplitData() {
        try {
            const response = await getBudgetSplitData(userId) as BudgetSplitDataResponse;
            setbudgetSplitData(response)
        } catch (error) {
            console.log(error);
            alert("error fetching budget information");
        }
    }

    const overColour = "#D1495B";
    const underColour = "#7CA982"

    let needsCol = "";
    let wantsCol = "";
    let debtsAndSavingsCol = "";

    if(budgetSplitData) {
        if(budgetSplitData.needs > 50) {
            needsCol = overColour;
        } else {
            needsCol = underColour;
        }

        if(budgetSplitData.wants > 30) {
            wantsCol = overColour;
        } else {
            wantsCol = underColour;
        }

        if(budgetSplitData.debtsAndSavings > 20) {
            debtsAndSavingsCol = overColour;
        } else {
            debtsAndSavingsCol = underColour;
        }
    }

    return (
        <>
            <div className="categories-nav-wrapper">
                    <NavBar />
            </div>
            <h1 className="categories-h1">Budget Split (50/30/20)</h1>
            <div className="categories-kpi-cards">
                {budgetSplitData &&
                <>
                    <KpiCard header="Needs" data={budgetSplitData?.needs + "%"} backgroundColor={needsCol} fontColor={"white"}/>
                    <KpiCard header="Wants" data={budgetSplitData?.wants + "%"} backgroundColor={wantsCol} fontColor={"white"}/>
                    <KpiCard header="Debts/Savings" data={budgetSplitData?.debtsAndSavings + "%"} backgroundColor={debtsAndSavingsCol} fontColor={"white"}/>
                </>
                }
            </div>
            <h1 className="categories-h1">Data Split By Category</h1>
            <div className="categories-cards-container">
                {Array.isArray(calculatedCategoriesData) && calculatedCategoriesData.length > 0 ? (
                    <div className="categories-cards">
                        {calculatedCategoriesData.map((data, index) => (
                            <CategoryCard key={index} data={data} />
                        ))}
                    </div>
                ) : (
                    <p>No categories available.</p>
                )}
            </div>
        </>
    )
}

export default Categories;