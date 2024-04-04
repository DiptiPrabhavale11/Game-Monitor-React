import {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import GameSession from './GameSession';
import Localization from "../utility/Localization";

const DisplayLogs = ({data,type}) => {
    const [gameSessions, setGameSessions] = useState([]);
    const isValid = type === "Valid";
    useEffect(() => {
        setGameSessions(data)
    }, [data])
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
            <h2 style={{textAlign: 'center'}}>Logs</h2>
        </Row>
        <Row>
            <Col>
                <p className='serachLabel'>Search:</p>
                <input
                    type="text"
                    className='serachBox'
                    placeholder={Localization.SEARCH_BY_ID}
                />
            </Col>
        </Row>
        {gameSessions && gameSessions.length > 0 && gameSessions.map((game) => (
            <GameSession key={game.gameSessionId} game={game}
                         gameClick={gameClick} isValid={isValid}></GameSession>))}
    </Container>)
}
export default DisplayLogs;