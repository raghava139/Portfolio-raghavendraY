import React from 'react';
import './NoResults.css';

const NoResults = ({ query }) => {
    return (
        <div className="no-results-container">
            <div className="no-results-content">
                <p className="no-results-message">
                    Your search - <span className="query-text">{query}</span> - did not match any documents.
                </p>
                <div className="suggestions">
                    <p>Suggestions:</p>
                    <ul>
                        <li>Make sure that all words are spelled correctly.</li>
                        <li>Try different keywords.</li>
                        <li>Try more general keywords.</li>
                        <li>Try searching for <strong>"Raghavendra Yallamanda"</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NoResults;
