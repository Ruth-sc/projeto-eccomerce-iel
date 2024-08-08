import React from 'react';
import PropTypes from 'prop-types';
import '../css/Section.css'; // Adicione um arquivo CSS para estilização

const Section = ({ title, titleAlign = (['center' ,'left']), discount, buttonText, children }) => {
  return (
    <div className="section-wrapper">
      <h1 className="main-title">{title}</h1> {/* Título centralizado */}
      <div className="section-container">
        <div className="content-container">
          {children}
          {buttonText && <button className="action-button">{buttonText}</button>}
        </div>
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.oneOf(['left', 'center']),
  discount: PropTypes.string,
  buttonText: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;