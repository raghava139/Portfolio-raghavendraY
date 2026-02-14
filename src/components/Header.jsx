import React, { useState, useEffect, useRef } from 'react';
import {
    FaSearch, FaTimes, FaMicrophone, FaCamera, FaTh, FaMoon, FaSun, FaIndustry, FaChartLine,
    FaReact, FaHtml5, FaCss3, FaGitAlt, FaCode, FaGithub, FaDatabase, FaAtom
} from 'react-icons/fa';
import {
    SiRedux, SiTypescript, SiJavascript, SiTailwindcss, SiBootstrap,
    SiAntdesign, SiMui, SiDotnet, SiNestjs, SiPostgresql, SiWebpack,
    SiJquery, SiVite, SiGithub
} from 'react-icons/si';
import { TbBrandVite } from 'react-icons/tb';
import { profileData } from '../data/profile';
import './Header.css';

const tabs = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

const Header = ({ activeTab, setActiveTab, searchQuery, setSearchQuery }) => {
    // const [searchValue, setSearchValue] = useState(profileData.name); // Using props now
    const [theme, setTheme] = useState('light');
    const [showProfile, setShowProfile] = useState(false);
    const [showApps, setShowApps] = useState(false);

    const profileRef = useRef(null);
    const appsRef = useRef(null);

    // Skill Icon Mapping
    const skillIcons = {
        "HTML": <FaHtml5 style={{ color: '#E34F26' }} />,
        "CSS3": <FaCss3 style={{ color: '#1572B6' }} />,
        "JavaScript": <SiJavascript style={{ color: '#F7DF1E' }} />,
        "TypeScript": <SiTypescript style={{ color: '#3178C6' }} />,
        "React.js": <FaReact style={{ color: '#61DAFB' }} />,
        "jQuery": <SiJquery style={{ color: '#0769AD' }} />,
        "Redux": <SiRedux style={{ color: '#764ABC' }} />,
        "Redux Toolkit": <SiRedux style={{ color: '#764ABC' }} />,
        "Jotai": <FaAtom style={{ color: '#6B46C1' }} />,
        "Webpack": <SiWebpack style={{ color: '#8DD6F9' }} />,
        "Parcel": <FaCode style={{ color: '#E7A13D' }} />,
        "Vite": <TbBrandVite style={{ color: '#646CFF' }} />,
        "Bootstrap": <SiBootstrap style={{ color: '#7952B3' }} />,
        "Ant Design": <SiAntdesign style={{ color: '#0170FE' }} />,
        "Tailwind CSS": <SiTailwindcss style={{ color: '#06B6D4' }} />,
        "PostgreSQL": <SiPostgresql style={{ color: '#4169E1' }} />,
        "Git": <FaGitAlt style={{ color: '#F05032' }} />,
        "GitHub": <SiGithub style={{ color: '#181717' }} />,
        "DSA": <FaCode style={{ color: '#4CAF50' }} />,
        "System Design": <FaDatabase style={{ color: '#FF6B6B' }} />
    };

    // Flatten all skills for the grid
    const allSkills = [
        ...profileData.skills.frontend,
        ...profileData.skills.stateManagement,
        ...profileData.skills.buildTools,
        ...profileData.skills.uiFrameworks,
        ...profileData.skills.backend,
        ...profileData.skills.tools
    ];

    // Close popups when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfile(false);
            }
            if (appsRef.current && !appsRef.current.contains(event.target)) {
                setShowApps(false);
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
                <a href="https://raghavendra-y-portfolio.netlify.app/" target='_blank'>
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
                </a>
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

                    <div className="apps-container" ref={appsRef}>
                        <button
                            className={`icon-btn ${showApps ? 'active' : ''}`}
                            title="Skills (Google Apps)"
                            onClick={() => setShowApps(!showApps)}
                        >
                            <FaTh />
                        </button>

                        {showApps && (
                            <div className="apps-popover">
                                <div className="apps-header">My Skills</div>
                                <div className="apps-scroll-content">
                                    <div className="apps-grid">
                                        {allSkills?.map((skill, index) => (
                                            <div key={index} className="app-item" title={skill}>
                                                <div className="app-icon">
                                                    {skillIcons[skill] || <FaCode />}
                                                </div>
                                                <div className="app-name">{skill}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="apps-footer">
                                        <button className="more-btn">More from Portfolio</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

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
