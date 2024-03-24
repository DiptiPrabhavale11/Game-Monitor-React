import { Container, Row, Col } from 'react-bootstrap';
import InvalidLogsBar from './charts/InvalidLogsBar';
const Dashboard = () => (
    <Container>
        <h2 style={{ textAlign: 'center' }}>Dashboard</h2>
        <Row>
            <Col md='5'>
                <InvalidLogsBar></InvalidLogsBar>
            </Col>
        </Row>
    </Container>
)
export default Dashboard;