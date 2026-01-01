import React from 'react';
import AnimatedGrid from '../grid/AnimatedGrid';

const AuthLayout = ({ children }) => {
    return (
        <div className="auth-layout">
            {/* Left Panel - Grid Animation */}
            <div className="left-panel">
                <div className="left-panel-gradient" />
                <div className="left-panel-content" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <AnimatedGrid />
                </div>
            </div>

            {/* Right Panel - Auth Form */}
            <div className="right-panel">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
