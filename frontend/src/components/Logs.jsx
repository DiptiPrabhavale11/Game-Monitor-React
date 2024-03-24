import { useEffect, useState } from 'react';
import Services from '../Services/api';
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import GameSession from './GameSession';

const Logs = () => {
    const [gameSessions, setGameSessions] = useState([]);
    useEffect(() => {
            const loggedUserJSON = window.localStorage.getItem('loggedUser')
            if (loggedUserJSON) {
                const user = JSON.parse(loggedUserJSON)
                Services.setToken(user.token)
            }
        Services.getAll('/api/logs')
            .then(response => { setGameSessions(response) })
    }, []);

    const gameClick = (game) => {
        const sessions = gameSessions.map(g => {
            if (g.gameSessionId === game.gameSessionId) {
                g.selected = !g.selected;
            } else {
                g.selected = false;
            }
            return g;
        })
        setGameSessions(sessions);
    }
    return (<Container fluid>
        <Row>
            <h2 style={{ textAlign: 'center' }}>Logs</h2>
        </Row>
        <Row>
            <Col md="7" style={{ fontSize: '20px' }}>Game session logs:</Col>
            <Col md="5">
                <p style={{ marginRight: '5px', display: 'inline-block' }}>Search:</p>
                <input
                    type="text"
                    style={{ border: 'solid 1px black', textAlign: 'left', margin: '10px', height: '20px', width: '400px', display: 'inline-block' }}
                    placeholder="Search game session by Id"
                />
            </Col>
        </Row>
        { gameSessions && gameSessions.length>0 && gameSessions.map((game) => (<GameSession key={game.gameSessionId} game={game} gameClick={gameClick}></GameSession>))}
    </Container>)
}
export default Logs;