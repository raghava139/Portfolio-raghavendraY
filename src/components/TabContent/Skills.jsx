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
                        <h3 className="skill-cat-title">State Management</h3>
                        <div className="skill-items">
                            {skills.stateManagement.map(s => <span key={s} className="skill-badge">{s}</span>)}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3 className="skill-cat-title">Build Tools</h3>
                        <div className="skill-items">
                            {skills.buildTools.map(s => <span key={s} className="skill-badge">{s}</span>)}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3 className="skill-cat-title">UI Frameworks</h3>
                        <div className="skill-items">
                            {skills.uiFrameworks.map(s => <span key={s} className="skill-badge">{s}</span>)}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3 className="skill-cat-title">Backend & Database</h3>
                        <div className="skill-items">
                            {skills.backend.map(s => <span key={s} className="skill-badge">{s}</span>)}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3 className="skill-cat-title">Tools & Computer Science</h3>
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
