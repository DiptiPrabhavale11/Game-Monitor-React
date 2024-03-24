import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Container, Row, Col } from 'react-bootstrap';
import Filter from '../../utility/filters';
import Services from '../../Services/api';
const InvalidPostRequestsMetric = () => {
    const [errorLogsData, setErrorLogsData] = useState([]);
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            Services.setToken(user.token)
        }
        Services.getAll('/api/logs/errors/').then(data => {
            console.log(data)
            const lastDay = Filter.lastNDaysData(data, 'startTime', 1);
            const lastSevenDays = Filter.lastNDaysData(data, 'startTime', 7);
            const lastMonth = Filter.lastNDaysData(data, 'startTime', 30);
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
                labels: ['Last 24 hours', 'Last 7 Days', 'Last month'],
                datasets: [{
                    label: 'Invalid Logs',
                    data: chartData,
                    backgroundColor: ['rgba(255, 99, 132, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 205, 86, 0.2)',],
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgb(75, 192, 192)',
                        'rgb(255, 205, 86)'],
                    borderWidth: 1,
                    maxBarThickness: 50
                }]
            },
            options: {
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
