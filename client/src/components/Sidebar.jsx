import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaMoneyCheckAlt, FaStore, FaExchangeAlt, FaChartBar, FaUsers } from 'react-icons/fa';

const Sidebar = () => {
    const sidebarStyles = {
        padding: '4px',
        backgroundColor: 'rgb(12, 13, 16)',
        fontFamily: 'var(--bs-font-sans-serif)',
        fontSize: 'var(--bs-body-font-size)',
        fontWeight: 'var(--bs-body-font-weight)',
        lineHeight: 'var(--bs-body-line-height)',
        color: 'var(--bs-body-color)',
        textAlign: 'left',
        height: '100vh',
        position: 'fixed',
    };

    const linkStyles = {
        color: 'white',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px',
        margin: '4px 0',
        fontSize: '16px',
        fontWeight: 'bold'
    };

    const iconStyles = {
        marginRight: '8px',
    };

    const profileStyles = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '12px',
        borderLeft: '4px solid #00BFA6',
        backgroundColor: '#1F2937',
        borderRadius: '8px',
    };

    const profileTextStyles = {
        color: '#FFFFFF',
        marginLeft: '12px',
        fontSize: '16px',
        fontWeight: 'bold',
    };

    return (
        <div className="w-64 h-screen p-4 bg-rgb(12, 13, 16) font-sans" style={sidebarStyles}>
            <div style={profileStyles}>
                <img src="https://via.placeholder.com/50" alt="Profile" className="w-12 h-12 rounded-full mr-3 object-cover" />
                <div style={profileTextStyles}>
                    <div>$23,435</div>
                    <div>John Doe</div>
                </div>
            </div>
            <nav>
                <ul className="space-y-4">
                    <li><NavLink to="/" exact activeClassName="font-bold" style={linkStyles} className="text-white"><FaHome style={iconStyles} />Dashboard</NavLink></li>
                    <li><NavLink to="/investments" activeClassName="font-bold" style={linkStyles} className="text-white"><FaMoneyCheckAlt style={iconStyles} />Investments</NavLink></li>
                    <li><NavLink to="/marketplace" activeClassName="font-bold" style={linkStyles} className="text-white"><FaStore style={iconStyles} />Marketplace</NavLink></li>
                    <li><NavLink to="/transactions" activeClassName="font-bold" style={linkStyles} className="text-white"><FaExchangeAlt style={iconStyles} />Transactions</NavLink></li>
                    <li><NavLink to="/analytics" activeClassName="font-bold" style={linkStyles} className="text-white"><FaChartBar style={iconStyles} />Analytics</NavLink></li>
                    <li><NavLink to="/community" activeClassName="font-bold" style={linkStyles} className="text-white"><FaUsers style={iconStyles} />Community</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
