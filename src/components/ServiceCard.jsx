import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-card-media">
        <img 
          src={service.image} 
          alt={service.title} 
          className="service-card-img"
          loading="lazy"
        />
        <div className="service-card-overlay" />
        <div className="service-card-icon">
          <DynamicIcon name={service.icon} size={22} />
        </div>
      </div>
      <div className="service-card-body">
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-desc">{service.shortDesc}</p>
        <Link to={`/services/${service.id}`} className="service-card-link">
          <span>Service Details</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

