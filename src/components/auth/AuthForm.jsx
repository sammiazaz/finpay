import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigate('/dashboard');
        }, 1000);
    };

    return (
        <div className="auth-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="auth-header">
                    <h2 className="auth-title">{isLogin ? 'Welcome Back' : 'Sign Up'}</h2>
                    <p className="auth-subtitle">
                        {isLogin ? 'Enter your details to access your account' : 'Create an account to get started'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="form-stack">
                    <AnimatePresence mode="wait">
                        {!isLogin && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="form-stack" style={{ paddingTop: '0.8rem' }}>
                                    <div className="input-group">
                                        <label className="input-label">
                                            First Name
                                        </label>
                                        <div className="input-icon-wrapper">
                                            <User size={18} />
                                        </div>
                                        <input
                                            type="text"
                                            className="input-field"
                                            placeholder="Alice"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required={!isLogin}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label className="input-label">
                                            Last Name
                                        </label>
                                        <div className="input-icon-wrapper">
                                            <User size={18} />
                                        </div>
                                        <input
                                            type="text"
                                            className="input-field"
                                            placeholder="Smith"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required={!isLogin}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="input-group">
                        <label className="input-label">
                            Email
                        </label>
                        <div className="input-icon-wrapper">
                            <Mail size={18} />
                        </div>
                        <input
                            type="email"
                            className="input-field"
                            placeholder="alice@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label className="input-label">
                            Password
                        </label>
                        <div className="input-icon-wrapper">
                            <Lock size={18} />
                        </div>
                        <input
                            type="password"
                            className="input-field"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary"
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : (isLogin ? 'Log In' : 'Create Account')}
                        {!loading && <ArrowRight size={18} />}
                    </motion.button>
                </form>

                <div className="divider">
                    <div className="divider-line"></div>
                    <span className="divider-text">Or continue with</span>
                    <div className="divider-line"></div>
                </div>

                <div className="social-buttons">
                    <button
                        type="button"
                        className="btn-social"
                    >
                        Google
                    </button>
                    <button
                        type="button"
                        className="btn-social"
                    >
                        Facebook
                    </button>
                </div>

                <div className="toggle-text">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="btn-link"
                        type="button"
                    >
                        {isLogin ? 'Sign up' : 'Log in'}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default AuthForm;
