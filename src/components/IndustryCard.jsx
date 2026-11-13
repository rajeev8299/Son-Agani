import React from 'react';
import { Link } from 'react-router-dom';

const IndustryCard = ({ industry }) => {
  return (
    <div 
      className="industry-card"
      data-industry={industry.id}
    >
      <img 
        src={industry.image} 
        alt={industry.name} 
        className="industry-card-img" 
        loading="lazy"
      />
      <div className="industry-card-overlay">
        <h3 className="industry-card-title">{industry.name}</h3>
        <p className="industry-card-desc">{industry.desc}</p>
      </div>
    </div>
  );
};

export default IndustryCard;

