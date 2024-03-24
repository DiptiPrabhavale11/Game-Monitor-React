import './App.css'
import AppHeader from "./components/AppHeader";
import AppFooter from './components/AppFooter';
import About from './components/About';
import Logs from './components/Logs';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Routes, Route,
} from "react-router-dom";
import Login from "./components/Login.jsx";
import { useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";
const App = () => {
  const [error, setError] = useState("")
  const [user, setUser] = useState(null)

  return (
    <div className="app">
      <Router>
        <AppHeader user={user} setUser={setUser}>
        </AppHeader>
        <div style={{ marginTop: '100px' }}>
          {error && <Alert variant={error.variant}> {error.msg}</Alert>}
        </div>
        <div style={{ marginTop: '150px' }}>
          {!user && <Login setError={setError} setUser={setUser} />}
        </div>
        {user &&
          <div style={{ marginTop: '100px' }}>
            <Routes>
              <Route path="/" element={<Logs />} />
              <Route path="/logs" element={<Logs />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>}
        <AppFooter style={{ position: 'relative' }} />
      </Router>
    </div>
  )
}

export default App
