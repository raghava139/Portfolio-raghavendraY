import React from 'react';
import { profileData } from '../../data/profile';
import './TabContent.css';

const Experience = () => {
    return (
        <div className="search-result-item">
            <div className="result-url">
                https://portfolio.google.com › experience
            </div>
            <h2 className="result-title">Work Experience</h2>
            <div className="result-snippet">
                <div style={{ marginTop: '20px' }}>

                    {/* M2P Solutions */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="exp-role">Solution Engineer</div>
                        <div className="exp-company">M2P Solutions • July 2025 - Present</div>
                        <p>
                            Specializing in FinTech user interfaces, optimizing React.js architectures, and collaborating with backend teams on payment APIs and security integrations.
                            Focused on building reusable components and enhancing accessibility.
                        </p>
                    </div>

                    {/* eArbor */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="exp-role">Senior Frontend Developer</div>
                        <div className="exp-company">eArbor • Jan 2022 - July 2025</div>
                        <p>
                            Led a team of 5 developers for Warehouse Management Systems (WMS). Improved page loads by 30% through performance optimization.
                            Stack: React.js, Redux, Ant Design, .NET APIs.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Experience;
