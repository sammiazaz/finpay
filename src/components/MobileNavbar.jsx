import React, { useState } from 'react';
import { User, Settings, CreditCard, UserCircle, LogOut } from 'lucide-react';
import './MobileNavbar.css';

const MobileNavbar = ({ onLogout }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handleMenuClick = (action) => {
        console.log(`Navigating to: ${action}`);
        closeDropdown();
        // TODO: Add navigation logic when pages are created
    };

    return (
        <div className="mobile-navbar">
            <div className="navbar-content">
                <div className="navbar-brand">
                    <div className="brand-icon">S</div>
                    <span>Azaz AI</span>
                </div>

                <div className="navbar-actions">
                    <div className="profile-dropdown">
                        <button
                            className="profile-trigger"
                            onClick={toggleDropdown}
                            aria-label="Profile menu"
                        >
                            <User size={20} />
                        </button>

                        {isDropdownOpen && (
                            <>
                                <div className="dropdown-overlay" onClick={closeDropdown} />
                                <div className="dropdown-menu">
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleMenuClick('settings')}
                                    >
                                        <Settings size={18} />
                                        <span>Settings</span>
                                    </button>

                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleMenuClick('subscriptions')}
                                    >
                                        <CreditCard size={18} />
                                        <span>Subscriptions</span>
                                    </button>

                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleMenuClick('account')}
                                    >
                                        <UserCircle size={18} />
                                        <span>Account</span>
                                    </button>

                                    <div className="dropdown-divider" />

                                    <button
                                        className="dropdown-item danger"
                                        onClick={() => {
                                            closeDropdown();
                                            onLogout();
                                        }}
                                    >
                                        <LogOut size={18} />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;
