import React, { useState } from 'react';
import {
    FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaBootstrap
} from 'react-icons/fa';
import {
    SiTypescript, SiJquery, SiRedux, SiAntdesign, SiTailwindcss, SiNestjs, SiExpress,
    SiPostgresql, SiMysql, SiMongodb, SiShadcnui
} from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import { HiOutlineChip } from 'react-icons/hi';
import './Chips.css';

// Map skill names to their icons and colors
const skillMeta = {
    'HTML': { icon: FaHtml5, color: '#E44D26', bgLight: '#FFF3EE', bgDark: '#3D2217' },
    'CSS3': { icon: FaCss3Alt, color: '#2965F1', bgLight: '#EEF3FF', bgDark: '#1A2540' },
    'JavaScript': { icon: FaJsSquare, color: '#F7DF1E', bgLight: '#FFFDE5', bgDark: '#3D3A0F' },
    'TypeScript': { icon: SiTypescript, color: '#3178C6', bgLight: '#EDF4FF', bgDark: '#1A2C45' },
    'React.js': { icon: FaReact, color: '#61DAFB', bgLight: '#E8F9FF', bgDark: '#152D3A' },
    'jQuery': { icon: SiJquery, color: '#0769AD', bgLight: '#E8F4FF', bgDark: '#0D2640' },
    'Redux Toolkit': { icon: SiRedux, color: '#764ABC', bgLight: '#F3EDFF', bgDark: '#251A3D' },
    'Bootstrap': { icon: FaBootstrap, color: '#7952B3', bgLight: '#F2EDFF', bgDark: '#261A40' },
    'Ant Design': { icon: SiAntdesign, color: '#0170FE', bgLight: '#E8F2FF', bgDark: '#0D2545' },
    'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4', bgLight: '#E6FAFE', bgDark: '#0D2F35' },
    'ShadCn': { icon: SiShadcnui, color: '#000000', bgLight: '#F0F0F0', bgDark: '#2A2A2A' },
    'NestJS': { icon: SiNestjs, color: '#E0234E', bgLight: '#FFECF0', bgDark: '#3D1520' },
    'Node.js': { icon: FaNodeJs, color: '#339933', bgLight: '#EDFAED', bgDark: '#142D14' },
    'Express.js': { icon: SiExpress, color: '#000000', bgLight: '#F0F0F0', bgDark: '#2A2A2A' },
    'PostgreSQL': { icon: SiPostgresql, color: '#4169E1', bgLight: '#EDF1FF', bgDark: '#1A2245' },
    'MySQL': { icon: SiMysql, color: '#4479A1', bgLight: '#EAF2FA', bgDark: '#162636' },
    'MongoDB': { icon: SiMongodb, color: '#47A248', bgLight: '#EEFAEE', bgDark: '#152E15' },
    'Git': { icon: FaGitAlt, color: '#F05032', bgLight: '#FFF0ED', bgDark: '#3D1A14' },
    'GitHub': { icon: FaGithub, color: '#181717', bgLight: '#F0F0F0', bgDark: '#2A2A2A' },
    'DSA': { icon: TbBrain, color: '#4285F4', bgLight: '#E8F0FE', bgDark: '#1A2845' },
    'System Design': { icon: HiOutlineChip, color: '#34A853', bgLight: '#EDFAED', bgDark: '#142D14' },
};

// Categorize skills
const skillCategories = {
    'Frontend': ['HTML', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'jQuery', 'Redux Toolkit'],
    'UI Frameworks': ['Bootstrap', 'Ant Design', 'Tailwind CSS', 'ShadCn'],
    'Backend': ['NestJS', 'Node.js', 'Express.js'],
    'Databases': ['PostgreSQL', 'MySQL', 'MongoDB'],
    'Tools & Concepts': ['Git', 'GitHub', 'DSA', 'System Design'],
};

const Chip = ({ skill, variant = 'outlined', size = 'medium', selected, onClick, showIcon = true }) => {
    const meta = skillMeta[skill] || { color: '#5f6368', bgLight: '#f1f3f4', bgDark: '#303134' };
    const IconComponent = meta.icon || HiOutlineChip;

    const chipClass = [
        'google-chip',
        `google-chip--${variant}`,
        `google-chip--${size}`,
        selected ? 'google-chip--selected' : '',
    ].filter(Boolean).join(' ');

    return (
        <button
            className={chipClass}
            onClick={onClick}
            style={{
                '--chip-color': meta.color,
                '--chip-bg-light': meta.bgLight,
                '--chip-bg-dark': meta.bgDark,
            }}
            type="button"
        >
            {showIcon && (
                <span className="google-chip__icon">
                    <IconComponent />
                </span>
            )}
            <span className="google-chip__label">{skill}</span>
            <span className="google-chip__ripple" />
        </button>
    );
};

const ChipGroup = ({ skills, variant = 'outlined', size = 'medium', showIcon = true, grouped = false }) => {
    const [selectedChips, setSelectedChips] = useState(new Set());

    const toggleChip = (skill) => {
        setSelectedChips(prev => {
            const next = new Set(prev);
            if (next.has(skill)) {
                next.delete(skill);
            } else {
                next.add(skill);
            }
            return next;
        });
    };

    if (grouped) {
        return (
            <div className="google-chip-groups">
                {Object.entries(skillCategories).map(([category, categorySkills]) => {
                    const filteredSkills = categorySkills.filter(s => skills.includes(s));
                    if (filteredSkills.length === 0) return null;
                    return (
                        <div key={category} className="google-chip-group">
                            <div className="google-chip-group__label">{category}</div>
                            <div className="google-chip-group__chips">
                                {filteredSkills.map(skill => (
                                    <Chip
                                        key={skill}
                                        skill={skill}
                                        variant={variant}
                                        size={size}
                                        showIcon={showIcon}
                                        selected={selectedChips.has(skill)}
                                        onClick={() => toggleChip(skill)}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="google-chip-container">
            {skills.map(skill => (
                <Chip
                    key={skill}
                    skill={skill}
                    variant={variant}
                    size={size}
                    showIcon={showIcon}
                    selected={selectedChips.has(skill)}
                    onClick={() => toggleChip(skill)}
                />
            ))}
        </div>
    );
};

export { Chip, ChipGroup };
export default ChipGroup;
