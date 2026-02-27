import React from 'react';
import { profileData } from '../../data/profile';
import { Chip } from '../Chips';
import './TabContent.css';

const Projects = () => {
    return (
        <div className="search-result-item">
            <div className="result-url">
                https://raghavendra-y-portfolio.netlify.app › projects
            </div>
            <h2 className="result-title">Featured Projects</h2>
            <div className="result-snippet">
                <div style={{ marginTop: '15px' }}>
                    {profileData.projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <h3 style={{ margin: 0, color: 'var(--google-blue)', fontSize: '18px' }}>{project.title}</h3>
                            </div>
                            <p style={{ fontSize: '14px', color: 'var(--google-text-secondary)', margin: '5px 0 10px' }}>{project.description}</p>
                            <div className="project-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {project.tech.map(t => <Chip key={t} skill={t} variant="tonal" size="small" showIcon={true} />)}
                            </div>
                            <div className="project-links" style={{ marginTop: '10px' }}>
                                {/* Links are placeholders based on plan */}
                                <a href={project.link} className="disabled-link">View Details</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
