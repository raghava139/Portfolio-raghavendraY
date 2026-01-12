import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaShareAlt, FaGlobe, FaPhone } from 'react-icons/fa';
import { profileData } from '../data/profile';
import './KnowledgePanel.css';

const KnowledgePanel = () => {
    const { name, role, experience, summary, social, companies, skills, photo, phone } = profileData;

    return (
        <aside className="knowledge-panel">
            <div className="panel-images">
                <div className="map-placeholder">
                    {/* Abstract background */}
                </div>
                <div className="profile-images-row">
                    <img src={photo} alt={name} className="profile-main-img" />
                </div>
            </div>

            <div className="panel-header">
                <h1 className="panel-title">{name}</h1>
                <div className="panel-subtitle">{role}</div>
                <div className="panel-actions">
                    <a href={social.linkedin} target="_blank" rel="noreferrer" className="action-btn"><FaGlobe /> Website</a>
                    <button className="action-btn"><FaShareAlt /> Share</button>
                </div>
            </div>

            <div className="panel-content">
                <p className="panel-description">
                    {summary}
                </p>

                <div className="panel-info-row">
                    <strong>Experience:</strong> <span>{experience}</span>
                </div>
                <div className="panel-info-row">
                    <strong>Education:</strong> <span>B.Tech - Civil Engineering (JNTUA)</span>
                </div>

                <div className="social-links-section">
                    <h3>Profiles</h3>
                    <div className="social-icons">
                        <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="social-item">
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>
                        <a href={social.github} target="_blank" rel="noopener noreferrer" className="social-item">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a href={social.email} className="social-item">
                            <FaEnvelope />
                            <span>Email</span>
                        </a>
                    </div>
                </div>

                <div className="panel-section">
                    <h3>Skills</h3>
                    <div className="panel-chips">
                        {skills.frontend.slice(0, 5).map(skill => (
                            <span key={skill} className="kp-chip">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default KnowledgePanel;
