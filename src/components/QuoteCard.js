import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quote }) => {
    return (
        <div className="quote-card">
            <p>{quote}</p>
        </div>
    );
};

export default QuoteCard;
