import React from 'react';
import './card.css';

function Card({ 
    icon, 
    title, 
    subtitle, 
    description, 
    link, 
    linkText, 
    className = '' 
}) {
    return (
        <div className={`card ${className}`}>
            {icon && <i className={`${icon} card__icon`}></i>}
            {title && <h3 className="card__title">{title}</h3>}
            {subtitle && <span className="card__subtitle">{subtitle}</span>}
            {description && <p className="card__description">{description}</p>}
            {link && (
                <a href={link} className="card__link">
                    {linkText} <i className="bx bx-right-arrow-alt card__link-icon"></i>
                </a>
            )}
        </div>
    );
}

export default Card; 