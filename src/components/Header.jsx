import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes, FaMicrophone, FaCamera, FaTh, FaMoon, FaSun, FaIndustry, FaChartLine } from 'react-icons/fa';
import { profileData } from '../data/profile';
import './Header.css';

const tabs = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

const Header = ({ activeTab, setActiveTab, searchQuery, setSearchQuery }) => {
    // const [searchValue, setSearchValue] = useState(profileData.name); // Using props now
    const [theme, setTheme] = useState('light');
    const [showProfile, setShowProfile] = useState(false);
    const profileRef = useRef(null);

    // Close profile popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfile(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <header className="google-header">
            <div className="header-top">
                <div className="logo-area">
                    <span className="google-logo">
                        <span className="g-blue">G</span>
                        <span className="g-red">o</span>
                        <span className="g-yellow">o</span>
                        <span className="g-blue">g</span>
                        <span className="g-green">l</span>
                        <span className="g-red">e</span>
                    </span>
                </div>
                <div className="search-bar-container">
                    <div className="search-bar">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="search-icons">
                            <FaTimes className="icon-clear" />
                            <span className="divider"></span>
                            <FaMicrophone className="icon-mic" />
                            <FaCamera className="icon-lens" />
                            <FaSearch className="icon-search-blue" />
                        </div>
                    </div>
                </div>

                <div className="header-actions">
                    <button className="icon-btn" onClick={toggleTheme} title="Toggle Dark Mode">
                        {theme === 'light' ? <FaMoon /> : <FaSun />}
                    </button>
                    <button className="icon-btn" title="Google Apps">
                        <FaTh />
                    </button>
                    <div className="user-avatar-container" ref={profileRef}>
                        <div
                            className="user-avatar"
                            onClick={() => setShowProfile(!showProfile)}
                        >
                            RY
                        </div>

                        <div className="custom-tooltip">
                            <div className="tooltip-header">Google Account</div>
                            <div className="tooltip-name">{profileData.name}</div>
                            <div className="tooltip-email">{profileData.email}</div>
                        </div>

                        {showProfile && (
                            <div className="google-profile-popover">
                                <div className="popover-header">
                                    <div className="popover-email">{profileData.email}</div>
                                    <div className="popover-avatar">R</div>
                                    <div className="popover-name">Hi, {profileData.name}!</div>
                                    <button className="manage-account-btn">Senior Frontend Developer (Engineer)</button>
                                </div>
                                <div className="popover-actions">
                                    <div className="action-item">
                                        <FaIndustry className="action-icon" />
                                        <span>WMS Expert</span>
                                    </div>
                                    <div className="action-item">
                                        <FaChartLine className="action-icon" />
                                        <span>Fintech Exposure</span>
                                    </div>
                                </div>
                                <div className="popover-footer">
                                    WMS Expert • Fintech Exposure
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="header-bottom">
                <nav className="tabs-nav">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
