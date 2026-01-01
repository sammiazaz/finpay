import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Components
import AuthLayout from './components/layout/AuthLayout';
import AuthForm from './components/auth/AuthForm';
import Home from './components/Home';

// Login Page Component
function LoginPage() {
    return (
        <AuthLayout>
            <AuthForm />
        </AuthLayout>
    );
}

// Dashboard Page Component
function DashboardPage() {
    const navigate = useNavigate();
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(curr => curr === 'dark' ? 'light' : 'dark');
    };

    const handleLogout = () => {
        navigate('/');
    };

    // Dummy user data
    const user = {
        firstName: "Sammi",
        lastName: "Mukhtar",
        email: "sammi@example.com"
    };

    return (
        <Home
            theme={theme}
            toggleTheme={toggleTheme}
            user={user}
            onLogout={handleLogout}
        />
    );
}

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
