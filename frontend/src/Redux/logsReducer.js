export const setLogs = (logs) => {
    return {
      type: 'set_logs',
      payload: logs
    };
  };
  
  const initialState = {
    allLogs: [],
  };
  
  const logsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'set_logs':
        return {
          ...state,
          allLogs: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default logsReducer;
  