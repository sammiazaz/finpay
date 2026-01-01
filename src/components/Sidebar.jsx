import React from 'react';
import { LayoutDashboard, Target, MessageSquare, LogOut, Sun, Moon } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ onLogout, theme, toggleTheme }) => {
    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
        { icon: <Target size={20} />, label: 'Reality Lens' },
        { icon: <MessageSquare size={20} />, label: 'Chat bot' },
    ];

    return (
        <div className="sidebar">
            <nav className="sidebar-nav">
                {menuItems.map((item, index) => (
                    <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                ))}

                <div className="nav-item" onClick={toggleTheme}>
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </div>
            </nav>

            <div className="sidebar-footer">
                <button className="logout-btn" onClick={onLogout}>
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
