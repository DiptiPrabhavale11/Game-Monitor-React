const baseUrl = (process.env.NODE_ENV === 'development')? "http://localhost:3001":""
export const LOGS = `${baseUrl}/api/logs`;
export const INVALID_LOGS = `${baseUrl}/api/logs/errors`
export const LOGIN =  `${baseUrl}/api/login`