import './App.css'
import AppHeader from "./components/AppHeader";
import AppFooter from './components/AppFooter';
import About from './components/About';
import Logs from './components/Logs';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Routes, Route,
} from "react-router-dom";
import Login from "./components/Login.jsx";
import { useEffect, useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import { TOKEN_AUTH_KEY } from "./utility/Constants.js"
import { useNavigate } from "react-router-dom";
const App = () => {
  const retrieveUser = () => localStorage.getItem(TOKEN_AUTH_KEY) || null;
  const [error, setError] = useState("")
  const [user, setUser] = useState(() => retrieveUser());
  let navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [])

  return (
    <div className="app">
      <AppHeader user={user} setUser={setUser}>
      </AppHeader>
      <div className="spacing">
        {error && <Alert variant={error.variant}> {error.msg}</Alert>}
      </div>
      <div className="spacing">
        <Routes>
          <Route path="/" element={!user ?
            <Login setError={setError} setUser={setUser} /> : <Logs />} />
          <Route path="/login" element={<Login setError={setError} setUser={setUser} />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <AppFooter style={{ position: 'relative' }} />
    </div>
  )
}

export default App
