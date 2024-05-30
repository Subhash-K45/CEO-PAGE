import React from 'react';
import './CEO.css'
const CEO = ({ image, name, link, description }) => {
  return (
    <>
      <img src={image} alt={name} className="ceo-image"/>
      <div className="ceo-description">
        <h2 className="ceo-name"><a href={link} target='_blank' rel='noopener noreferrer'>{name}</a></h2>
        <p className="ceo-info">{description}</p>
      </div>
    </>
  );
};

export default CEO;
