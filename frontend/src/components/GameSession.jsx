import moment from "moment/moment";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import LevelSession from "./LevelSession";

const GameSession = ({ game, gameClick }) => {
    const gameSessionClick = (game) => {
        gameClick(game);
    }
    const startAndEndTime = (game) => {
        return (
            <Row className="mx-3">
                <Col md="3">Started At:<b> {game.startTime} </b></Col>
                <Col md="3">Ended At:<b> {game.endTime} </b> </Col>
            </Row>);
    };
    const totalDuration = (game) => {
        const startMoment = moment(game.startTime);
        const endMoment = moment(game.endTime);
        return endMoment.diff(startMoment, 'minutes');
    }
    const levelsAttempted = (game) => {
        return (
            game && game.levelSessions.length
        )
    }
    const displayDetails = (game) => {
        return (<>
            {startAndEndTime(game)}
            {game.levelSessions && game.levelSessions.map(level => <LevelSession level={level} key={level.levelSessionId}></LevelSession>)}
        </>);
    };
    return (<Container fluid>
        <Row key={game.gameSessionId} className="playthrough mx-1"
            onClick={() => {
                gameSessionClick(game);
            }}>
            <Col md="4">Game session Id: <b>{game.gameSessionId} </b></Col>
            <Col md="2">Levels Attempted: <b>{levelsAttempted(game)}</b></Col>
            <Col md="4">Total
                Duration: <b>{totalDuration(game)}</b> {totalDuration(game) > 1 ? 'minutes' : 'minute'}
            </Col>        </Row>
        <Row style={{ marginBottom: '10px' }} className="json mx-1">{game.selected && displayDetails(game)}</Row>
    </Container>)
}
export default GameSession;