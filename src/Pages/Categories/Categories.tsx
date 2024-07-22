import { useEffect, useState } from "react";
import { getCalcualtedCategoriesData } from "../../Componenets/Services/CalculationService.js"
import CategoryCard from "../../Componenets/CategoryCard/CategoryCard";
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

function Categories() {
    const [calculatedCategoriesData, setCalculatedCategoriesData] = useState<CalculatedCategory[]>([]);

    useEffect(() => {
        async function getData() {
            await fetchCalculatedCategoriesData()
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

    return (
        <>
            <div className="categories-nav-wrapper">
                <NavBar></NavBar>
            </div>
            <h1 className="categories-h1">Data Split By Category</h1>
            <div className="categories-cards-container">
                <div className="categories-cards">
                    {calculatedCategoriesData?.map((data, index) => (
                            <CategoryCard data={data} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Categories;