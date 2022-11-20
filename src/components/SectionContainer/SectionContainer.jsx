import React from 'react';
import './SectionContainer.scss';

const SectionContainer = ({ children, backgroundColor, className, ...props }) => {

    return (
        <div className={`section section--${backgroundColor} ${className}`}>
            <div className="align-items-center justify-content-center section-row">
                {children}
            </div> 
        </div>
    )
}

export default SectionContainer;