import React from 'react';
import './button.css';

function Button({ 
    children, 
    href, 
    download, 
    target, 
    className = '', 
    icon, 
    onClick 
}) {
    const buttonClass = `button button--flex ${className}`;
    
    return (
        <a 
            href={href} 
            download={download}
            target={target}
            className={buttonClass}
            onClick={onClick}
        >
            {children}
            {icon && (
                <svg
                    className="button__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    {icon}
                </svg>
            )}
        </a>
    );
}

export default Button; 