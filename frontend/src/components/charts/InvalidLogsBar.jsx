import { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Row } from 'react-bootstrap';
import Filter from '../../utility/filters';
import Services from '../../Services/api';
import ChartConstant from '../../Services/constants/chartConstants';
import { useNavigate } from "react-router-dom";
import {INVALID_LOGS} from "../../utility/UrlEndpoints.js";
const InvalidPostRequestsMetric = () => {
    const [errorLogsData, setErrorLogsData] = useState([]);
    const [chartData, setChartData] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        Services.getAll(INVALID_LOGS).then(data => {
            const lastDay = Filter.lastNDaysData(data, ChartConstant.START_TIME, ChartConstant.LAST_DAY);
            const lastSevenDays = Filter.lastNDaysData(data, ChartConstant.START_TIME, ChartConstant.LAST_WEEK);
            const lastMonth = Filter.lastNDaysData(data, ChartConstant.START_TIME, ChartConstant.LAST_MONTH);
            const chartArr = [lastDay.length, lastSevenDays.length, lastMonth.length];
            setChartData(chartArr);
            setErrorLogsData(data);
        });
    }, []);

    useEffect(() => {
        if (errorLogsData.length > 0) {
            renderChart();
        }
    }, [errorLogsData]);

    const renderChart = () => {
        const ctx = document.getElementById('invalidRequestsChart');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [ChartConstant.LAST_24_HOURS, ChartConstant.LAST_7_DAYS, ChartConstant.LAST_30_DAYS],
                datasets: [{
                    label: ChartConstant.CHART_TITLE,
                    data: chartData,
                    backgroundColor: [
                        ChartConstant.LIGHT_ORANGE,
                        ChartConstant.LIGHT_PINK,
                        ChartConstant.SEA_BLUE,
                    ],
                    borderColor: [
                        ChartConstant.DARK_ORANGE,
                        ChartConstant.DARK_PINK,
                        ChartConstant.DARK_SEA_BLUE,
                    ],
                    borderWidth: 1,
                    maxBarThickness: 50
                }]
            },
            options: {
                onClick: (e) =>{
                    navigate('/logs');
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: {
                            display: false
                        }
                    }
                },
            }
        });
    };

    return (
        <Row>
            <h4>Invalid Logs</h4>
            <canvas id="invalidRequestsChart" width="400" height="200"></canvas>
        </Row>
    );
};

export default InvalidPostRequestsMetric;
