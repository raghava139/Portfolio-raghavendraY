import React, { useState } from 'react';
import Header from './components/Header';
import KnowledgePanel from './components/KnowledgePanel';
import About from './components/TabContent/About';
import Skills from './components/TabContent/Skills';
import Experience from './components/TabContent/Experience';
import Projects from './components/TabContent/Projects';
import Contact from './components/TabContent/Contact';
import NoResults from './components/NoResults';
import { profileData } from './data/profile';

function App() {
  const [activeTab, setActiveTab] = useState('About');
  const [searchQuery, setSearchQuery] = useState(profileData.name);

  // Normalize query for comparison
  const normalizedQuery = searchQuery.toLowerCase().trim();
  const validName = profileData.name.toLowerCase().trim();

  // Check if query is valid (empty or matches name)
  // Allowing partial matches might be nice, but user said "only for 'raghavenda yallamanda'"
  // We'll allow case-insensitive match.
  const isValidSearch = normalizedQuery === '' || normalizedQuery === validName;

  const renderContent = () => {
    if (!isValidSearch) {
      return <NoResults query={searchQuery} />;
    }

    switch (activeTab) {
      case 'About': return <About />;
      case 'Skills': return <Skills />;
      case 'Experience': return <Experience />;
      case 'Projects': return <Projects />;
      case 'Contact': return <Contact />;
      default: return <About />;
    }
  };

  return (
    <div className="app-container">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="main-content">
        <div className="left-panel">
          {isValidSearch && (
            <div className="search-stats" style={{ color: '#70757a', fontSize: '14px', marginBottom: '20px' }}>
              About {Math.floor(Math.random() * 1000000)} results (0.{Math.floor(Math.random() * 99)} seconds)
            </div>
          )}
          {renderContent()}
        </div>

        {isValidSearch && (
          <div className="right-panel">
            <KnowledgePanel />
          </div>
        )}
      </main>

      <footer style={{
        background: '#f2f2f2',
        borderTop: '1px solid #dfe1e5',
        marginTop: 'auto',
        padding: '40px 20px',
        color: '#70757a',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <p>India • Based on your past activity - Learn more</p>
      </footer>
    </div>
  );
}

export default App;
