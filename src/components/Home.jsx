import React from 'react';
import Sidebar from './Sidebar';
import MobileNavbar from './MobileNavbar';
import { Search, Bell, Calendar, CreditCard, ArrowRightLeft, Landmark, FileText, MoreHorizontal, MoreVertical } from 'lucide-react';
import './Home.css';

const Home = ({ theme, toggleTheme, user, onLogout }) => {

    return (
        <div className="home-container">
            <MobileNavbar onLogout={onLogout} user={user} />
            <Sidebar onLogout={onLogout} theme={theme} toggleTheme={toggleTheme} />
            <main className="home-main">
                <div className="dashboard-content">
                    {/* Main Section */}
                    <div className="dashboard-center">
                        <header className="dashboard-header">
                            <div className="header-title">
                                <h1>Dashboard</h1>
                                <p>Payments updates</p>
                            </div>
                            <div className="header-search">
                                <Search size={18} />
                                <input type="text" placeholder="Search" />
                            </div>
                        </header>

                        <div className="quick-actions">
                            <div className="action-card">
                                <div className="card-header">
                                    <div className="icon-circle yellow">
                                        <ArrowRightLeft size={20} />
                                    </div>
                                    <MoreHorizontal size={20} />
                                </div>
                                <h2>Transfer via Card number</h2>
                                <p>$1200</p>
                            </div>

                            <div className="action-card">
                                <div className="card-header">
                                    <div className="icon-circle purple">
                                        <Landmark size={20} />
                                    </div>
                                    <MoreHorizontal size={20} />
                                </div>
                                <h2>Transfer to other banks</h2>
                                <p>$150</p>
                            </div>

                            <div className="action-card">
                                <div className="card-header">
                                    <div className="icon-circle white">
                                        <FileText size={20} />
                                    </div>
                                    <MoreHorizontal size={20} />
                                </div>
                                <h2>Instant loan</h2>
                                <p>$1200</p>
                            </div>

                            <div className="action-card">
                                <div className="card-header">
                                    <div className="icon-circle black">
                                        <MoreHorizontal size={20} />
                                    </div>
                                    <MoreHorizontal size={20} />
                                </div>
                                <h2>Other services</h2>
                                <p>$150</p>
                            </div>
                        </div>

                        <div className="balance-section">
                            <div className="balance-header">
                                <div className="balance-title">
                                    <span>Balance</span>
                                    <h1>$1500</h1>
                                </div>
                                <div className="past-days">
                                    Past 30 days <ArrowRightLeft size={16} />
                                </div>
                            </div>
                            <div className="chart-area">
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '60%' }}></div>
                                    <span>Aug</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '80%' }}></div>
                                    <span>Sep</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar active" style={{ height: '100%' }}></div>
                                    <span>Oct</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '70%' }}></div>
                                    <span>Nov</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '50%' }}></div>
                                    <span>Dec</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '90%' }}></div>
                                    <span>Jan</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '40%' }}></div>
                                    <span>Feb</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '65%' }}></div>
                                    <span>Mar</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '85%' }}></div>
                                    <span>Apr</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '75%' }}></div>
                                    <span>May</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '55%' }}></div>
                                    <span>Jun</span>
                                </div>
                            </div>
                        </div>

                        <div className="history-section">
                            <div className="history-header">
                                <h2>History</h2>
                                <button className="select-date">
                                    <Calendar size={16} />
                                    Select date
                                </button>
                            </div>
                            <div className="history-list">
                                <div className="history-item">
                                    <div className="history-user">
                                        <div className="avatar-small">S</div>
                                        <span>Sammi Mukhtar</span>
                                    </div>
                                    <span className="history-time">10:00 AM</span>
                                    <span className="history-amount">+$150</span>
                                    <span className="history-status pending">Pending</span>
                                </div>
                                <div className="history-item">
                                    <div className="history-user">
                                        <div className="avatar-small">A</div>
                                        <span>Azaz AI</span>
                                    </div>
                                    <span className="history-time">09:12 AM</span>
                                    <span className="history-amount">-$1200</span>
                                    <span className="history-status complete">Complete</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <aside className="dashboard-right">
                        <div className="profile-section">
                            <div className="premium-card">
                                <div className="card-top">
                                    <div className="chip"></div>
                                    <span className="card-type">VISA</span>
                                </div>
                                <div className="card-number">4582 1234 5678 9012</div>
                                <div className="card-footer">
                                    <div className="card-holder">
                                        <p>CARD HOLDER</p>
                                        <span>SAMMI MUKHTAR</span>
                                    </div>
                                    <div className="card-expiry">
                                        <p>EXPIRES</p>
                                        <span>12/26</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-actions">
                            <div className="action-item">
                                <div className="icon-circle"><Bell size={20} /></div>
                                <span>Notification</span>
                            </div>
                            <div className="action-item">
                                <div className="icon-circle"><Search size={20} /></div>
                                <span>Search</span>
                            </div>
                            <div className="action-item">
                                <div className="icon-circle"><MoreVertical size={20} /></div>
                                <span>More</span>
                            </div>
                        </div>

                        <div className="side-list-section">
                            <div className="section-header">
                                <h3>Recent Activities</h3>
                                <button className="view-all">View all</button>
                            </div>
                            <div className="activity-list">
                                <div className="activity-item">
                                    <div className="activity-icon blue"><ArrowRightLeft size={16} /></div>
                                    <div className="activity-info">
                                        <h4>Transfer Success</h4>
                                        <span>Yesterday</span>
                                    </div>
                                    <span className="amount">$120.00</span>
                                </div>
                                <div className="activity-item">
                                    <div className="activity-icon green"><FileText size={16} /></div>
                                    <div className="activity-info">
                                        <h4>Invoice Paid</h4>
                                        <span>2 days ago</span>
                                    </div>
                                    <span className="amount">$450.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="side-list-section">
                            <div className="section-header">
                                <h3>Upcoming Payments</h3>
                                <button className="view-all">View all</button>
                            </div>
                            <div className="payment-list">
                                <div className="activity-item">
                                    <div className="activity-icon yellow"><Calendar size={16} /></div>
                                    <div className="activity-info">
                                        <h4>Rent Payment</h4>
                                        <span>In 3 days</span>
                                    </div>
                                    <span className="amount">$1,200.00</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default Home;
