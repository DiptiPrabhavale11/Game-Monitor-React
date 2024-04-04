import { Container, Row, Col } from 'react-bootstrap';
import Bar from './charts/Bar.jsx';
import { useEffect, useState } from "react";
import Services from "../Services/api.js";
import { INVALID_LOGS, LOGS } from "../utility/UrlEndpoints.js";
import { useSelector } from 'react-redux';
const Dashboard = () => {
    const [validLogs, setValidLogs] = useState([]);
    const [invalidLogs, setInvalidLogs] = useState([]);
    const logs = useSelector((state) => state.logs.allLogs);
    useEffect(() => {
        if (logs && logs.length) {
            setValidLogs(logs)
        } else {
            Services.getAll(LOGS)
                .then(response => {
                    setValidLogs(response)
                })
        }

        Services.getAll(INVALID_LOGS)
            .then(response => {
                setInvalidLogs(response)
            })
    }, []);
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Dashboard</h2>
            <Container fluid>
                <h4>Log Metrics</h4>
                <Row className="justify-content-md-center">
                    <Col md='5'>
                        <Bar logs={validLogs}
                            type="Valid"></Bar>
                    </Col>
                    <Col md='5'>
                        <Bar logs={invalidLogs}
                            type="Invalid"></Bar>
                    </Col>
                </Row>
            </Container></>
    )
}
export default Dashboard;