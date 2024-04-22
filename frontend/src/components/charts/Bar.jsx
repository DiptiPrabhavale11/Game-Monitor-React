import { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Row, Col, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// import DisplayLogs from "../DisplayLogs.jsx";

const Bar = ({ chartData, chartTitle, labels, datasets, legendDisplay,
    showModal, menuList, clickCallback, closeModalCallback, menuChangeCallback, modalComponent }) => {
    const [myChart, setMyChart] = useState(null);
    useEffect(() => {
        // console.log("chartData", myChart, chartData, chartTitle, labels, datasets)
        if (chartData && chartData.length) {
            if (myChart) {
                setMyChart(null);
                myChart.destroy();
            }
            renderChart(chartData);
        }
    }, [chartData]);

    const renderChart = () => {
        const ctx = document.getElementById(chartTitle);
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets,
            }, options: {
                plugins: {
                    legend: {
                        display: legendDisplay ? legendDisplay : false
                    },
                    title: {
                        display: true,
                        text: chartTitle,
                        padding: {
                            top: 10,
                            bottom: 10
                        },
                        font: {
                            size: 24,
                            style: 'normal'
                        }
                    }
                },
                onClick: (e, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        clickCallback(index);
                        setShow(true)
                    }
                }, scales: {
                    x: {
                        beginAtZero: true, grid: {
                            display: false
                        }
                    }
                },
            }
        });
        setMyChart(chart);
    };

    const handleClose = (e) => {
        closeModalCallback(e);
    }
    const menuChange = (event) => {
        if (myChart) {
            myChart.destroy();
        }
        menuChangeCallback(event.target.value)
    }
    return (<Row>
        <Row>
            <Col md='6'>

                {
                    menuList && menuList.length &&
                    <Form.Select aria-label="Default select example" size="sm" onChange={menuChange}>
                        {menuList.map((menu) => (
                            <option key={menu.LABEL} value={menu.VALUE}>{menu.LABEL}</option>)
                        )}
                    </Form.Select>
                }

            </Col>
        </Row>
        {chartTitle && <canvas id={chartTitle} width="400" height="200"></canvas>}
        {showModal && modalComponent && <Modal size="xl"
            show={showModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{chartLabels[index]} {chartTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <modalComponent data={filteredLogs[index]} type={type}></modalComponent>
            </Modal.Body>
        </Modal>}
    </Row>);
};

export default Bar;