import React from 'react';
import { profileData } from '../../data/profile';
import { FaRobot, FaBrain, FaLightbulb, FaMagic, FaBolt, FaHeart } from 'react-icons/fa';
import { SiOpenai, SiGithub, SiReplit } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import './TabContent.css';

const AiTools = () => {
    const { aiTools } = profileData;

    // AI Tool Icon Mapping
    const aiToolIcons = {
        "Cursor": <VscCode style={{ color: '#007ACC' }} />,
        "GitHub Copilot": <SiGithub style={{ color: '#181717' }} />,
        "ChatGPT": <SiOpenai style={{ color: '#10A37F' }} />,
        "Claude": <FaBrain style={{ color: '#CC9B7A' }} />,
        "Antigravity": <AiOutlineThunderbolt style={{ color: '#4285F4' }} />,
        "Windsurf": <FaMagic style={{ color: '#00D9FF' }} />,
        "Blackbox": <FaRobot style={{ color: '#000000' }} />,
        "Gemini": <FaLightbulb style={{ color: '#5F6368' }} />,
        "Bolt": <FaBolt style={{ color: '#FF6B35' }} />,
        "Lovable": <FaHeart style={{ color: '#FF6B9D' }} />,
        "Replit": <SiReplit style={{ color: '#F26207' }} />
    };

    return (
        <div className="search-result-item">
            <div className="result-url">
                https://raghavendra-y-portfolio.netlify.app › ai-tools
            </div>
            <h2 className="result-title">AI-Powered Development Arsenal</h2>
            <div className="result-snippet">
                <div className="ai-tools-intro">
                    <p className="ai-intro-text">
                        I leverage <strong>{aiTools.length}+ cutting-edge AI tools</strong> to supercharge my development workflow and deliver exceptional results.
                        These intelligent assistants have revolutionized how I code—enabling faster development cycles while maintaining 100% code comprehension.
                    </p>
                    <p className="ai-intro-text">
                        <strong>My AI-Enhanced Approach:</strong> I don't just copy-paste AI-generated code. Every line is thoroughly understood,
                        reviewed, and optimized before deployment. AI tools accelerate my development speed by 3-5x while I maintain complete ownership
                        of the codebase architecture and logic.
                    </p>
                    <p className="ai-intro-text">
                        📚 <strong>Continuous Learning:</strong> I dedicate time daily to DSA problem-solving, mastering JavaScript/React best practices,
                        and staying current with the latest web development trends. AI tools complement my expertise—they don't replace it.
                    </p>
                    <p className="ai-philosophy">
                        💡 <em>Philosophy:</em> "AI tools are force multipliers for developers who understand fundamentals.
                        They help us build faster, not think less."
                    </p>
                </div>

                <div className="ai-tools-grid">
                    <h3 className="ai-tools-subtitle">Tools I Master Daily</h3>
                    <div className="ai-tools-list">
                        {aiTools.map((tool, index) => (
                            <div key={index} className="ai-tool-card">
                                <div className="ai-tool-icon">
                                    {aiToolIcons[tool] || <FaRobot />}
                                </div>
                                <div className="ai-tool-name">{tool}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiTools;
