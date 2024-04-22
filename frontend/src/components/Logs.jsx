import {useEffect, useState} from 'react';
import Services from '../Services/api';
import DisplayLogs from "./DisplayLogs.jsx";
import UrlEndpoints from "../utility/UrlEndpoints.js";
import { useDispatch } from 'react-redux';
import { setLogs } from '../Redux/logsReducer.js';

const Logs = ({type}) => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        Services.getAll(UrlEndpoints.LOGS)
            .then(response => {
                setData(response);
                dispatch(setLogs(response));
            })
    }, []);

    return (
        <DisplayLogs data={data} type={type}/>)
}
export default Logs;