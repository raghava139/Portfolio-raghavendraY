import React from 'react';
import { profileData } from '../../data/profile';
import './TabContent.css';

const Skills = () => {
    const { skills } = profileData;

    return (
        <div className="search-result-item">
            <div className="result-url">
                https://raghavendra-y-portfolio.netlify.app › skills
            </div>
            <h2 className="result-title">Technical Expertise</h2>
            <div className="result-snippet">
                <div className="skills-grid">

                    <div className="skill-category">
                        <h3 className="skill-cat-title">Frontend Development</h3>
                        <div className="skill-items">
                            {skills.frontend.map(s => <span key={s} className="skill-badge">{s}</span>)}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3 className="skill-cat-title">UI & Design</h3>
                        <div className="skill-items">
                            {skills.ui.map(s => <span key={s} className="skill-badge">{s}</span>)}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3 className="skill-cat-title">Backend & APIs</h3>
                        <div className="skill-items">
                            {skills.backend.map(s => <span key={s} className="skill-badge">{s}</span>)}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3 className="skill-cat-title">Tools & Workflow</h3>
                        <div className="skill-items">
                            {skills.tools.map(s => <span key={s} className="skill-badge">{s}</span>)}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;
