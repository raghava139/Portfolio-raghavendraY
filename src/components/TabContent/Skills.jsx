import React from 'react';
import { profileData } from '../../data/profile';
import ChipGroup from '../Chips';
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
                        <h3 className="skill-cat-title">All Skills</h3>
                        <ChipGroup
                            skills={skills.frontend}
                            variant="filled"
                            size="medium"
                            showIcon={true}
                            grouped={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
