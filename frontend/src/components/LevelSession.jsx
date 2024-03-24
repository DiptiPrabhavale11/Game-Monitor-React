import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'
const LevelSession = ({ level }) => {
    return (
        <JsonView className="mx-3" src={level} collapsed={true}/>
    )
}
export default LevelSession;