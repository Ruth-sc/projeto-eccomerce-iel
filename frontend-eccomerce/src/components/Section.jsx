import React from 'react';
import PropTypes from 'prop-types';
import '../css/Section.css'; // Adicione um arquivo CSS para estilização

const Section = ({ title, titleAlign = 'left', discount, buttonText, children }) => {
  return (
    <div className="section-container">
      {discount && <div className="discount-badge">{discount}</div>}
      <div className="content-container">
        <h2 className="title">{title}</h2>
        {children}
        {buttonText && <button className="action-button">{buttonText}</button>}
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
