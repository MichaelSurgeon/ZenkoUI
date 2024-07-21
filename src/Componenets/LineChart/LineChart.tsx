import './LineChart.css';
import { Line } from 'react-chartjs-2';
import { 
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

ChartJS.defaults.font.weight = 'bold';
ChartJS.defaults.font.size = 12;
ChartJS.defaults.color = "black";

const LineChart = (data : any) => {
    const [mappedData, setMappedData] = useState([]);
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        if (data.data) {
            setMappedData(data.data.map((x: any) => x.amount));
            setLabels(data.data.map((x: any) => new Date(x.date).toDateString()));
        }
    }, [data]);

    const dat = {
        labels: labels,
        datasets: [{
            label: 'Daily Spend',  // Added label for the dataset
            data: mappedData,
            backgroundColor: 'rgba(24, 160, 251, 0.2)', // Changed to rgba for visibility
            borderColor: '#18A0FB',
            borderWidth: 3,
            pointRadius: 8,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 4,
            pointBackgroundColor: 'white',
            pointBorderColor: '#18A0FB',
        }]
    };

    const options = {
        maintainAspectRatio: false,
        aspectRatio: 1,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function(tooltipItem: any) {
                        return `Total Spent: £${tooltipItem.raw}`;
                    }
                }
            }
        }
    };

    return (
        <>
            <div className='line-graph-container'>
                <Line
                    className='line-graph'
                    data={dat}
                    options={options}
                />
            </div>
        </>
    );
};

export default LineChart;
