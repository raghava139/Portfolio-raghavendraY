import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaShareAlt, FaGlobe, FaTimes, FaWhatsapp, FaTwitter, FaInstagram, FaCopy, FaCheck } from 'react-icons/fa';
import { profileData } from '../data/profile';
import './KnowledgePanel.css';

const KnowledgePanel = () => {
    const { name, role, experience, summary, social, skills, photo } = profileData;
    const [showShareModal, setShowShareModal] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);
    const shareModalRef = useRef(null);

    // Explicitly requested share URL
    const shareUrl = "https://raghavendra-y-portfolio.netlify.app/";

    const handleShare = (platform) => {
        let url = "";
        const text = `Check out ${name}'s portfolio: `;

        switch (platform) {
            case 'whatsapp':
                url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + shareUrl)}`;
                break;
            case 'twitter':
                url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
                break;
            case 'email':
                url = `mailto:?subject=${encodeURIComponent("Portfolio: " + name)}&body=${encodeURIComponent(text + shareUrl)}`;
                break;
            case 'instagram':
                // Instagram doesn't support direct link sharing. Opening profile.
                // Assuming standard profile sharing behavior requested.
                // If profileData doesn't have it, we just open instagram home or the specific one if user provides.
                // For now, redirecting to generic instagram or user's if available (it wasn't in provided file, but robust code implies checking).
                url = "https://www.instagram.com/";
                break;
            default:
                return;
        }
        window.open(url, '_blank');
        setShowShareModal(false);
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    // Close modal on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (shareModalRef.current && !shareModalRef.current.contains(event.target)) {
                setShowShareModal(false);
            }
        };

        if (showShareModal) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showShareModal]);

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
                    <button className="action-btn" onClick={() => setShowShareModal(true)}><FaShareAlt /> Share</button>

                    {/* Share Modal */}
                    {showShareModal && (
                        <div className="share-overlay">
                            <div className="share-modal" ref={shareModalRef}>
                                <div className="share-header">
                                    <h3>Share</h3>
                                    <button className="close-share-btn" onClick={() => setShowShareModal(false)}>
                                        <FaTimes />
                                    </button>
                                </div>
                                <div className="share-options">
                                    <button className="share-option" onClick={() => handleShare('whatsapp')}>
                                        <div className="share-icon-circle whatsapp"><FaWhatsapp /></div>
                                        <span>WhatsApp</span>
                                    </button>
                                    <button className="share-option" onClick={() => handleShare('instagram')}>
                                        <div className="share-icon-circle instagram"><FaInstagram /></div>
                                        <span>Instagram</span>
                                    </button>
                                    <button className="share-option" onClick={() => handleShare('twitter')}>
                                        <div className="share-icon-circle twitter"><FaTwitter /></div>
                                        <span>Twitter</span>
                                    </button>
                                    <button className="share-option" onClick={() => handleShare('email')}>
                                        <div className="share-icon-circle email"><FaEnvelope /></div>
                                        <span>Email</span>
                                    </button>
                                </div>
                                <div className="copy-link-section">
                                    <div className="link-box">{shareUrl}</div>
                                    <button className="copy-btn" onClick={handleCopyLink}>
                                        {copySuccess ? <span className="copied-text"><FaCheck /> Copied</span> : <><FaCopy /> Copy</>}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
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
