const baseUrl = process.env.NODE_ENV === "prod" ? "https://noisrucer.onrender.com/" : "http://localhost:3001"
export const LOGS = `${baseUrl}/api/logs`;
export const INVALID_LOGS = `${baseUrl}/api/logs/errors`
export const LOGIN =  `${baseUrl}/api/login`

