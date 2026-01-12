import React from 'react';
import { profileData } from '../../data/profile';
import './TabContent.css';

const About = () => {
    return (
        <div className="search-result-item">
            <div className="result-url">
                https://portfolio.google.com › about › {profileData.name.toLowerCase().replace(' ', '-')}
            </div>
            <h2 className="result-title">About {profileData.name} - {profileData.role}</h2>
            <div className="result-snippet">
                <p className="about-text">{profileData.summary}</p>
                <p>
                    I have over {profileData.experience} of experience, currently working at <strong>{profileData.companies[0].name}</strong>.
                    My expertise lies in building FinTech and Warehouse Management solutions using modern web technologies.
                </p>
                <p>
                    I am passionate about determining the best technical approach for scalable applications and mentoring junior developers to maintain high coding standards.
                </p>
            </div>
        </div>
    );
};

export default About;
