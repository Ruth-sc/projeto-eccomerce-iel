import React, { useState } from 'react';

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderOption = (option, index) => {
    const isSelected = selectedOption === option;
    const commonStyles = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: isSelected ? '2px solid #007bff' : '1px solid lightgray',
      margin: '5px',
      cursor: 'pointer',
      color: type === 'text' ? 'darkgray' : 'initial',
      fontSize: type === 'text' ? '24px' : 'initial',
      backgroundColor: type === 'color' ? option : 'transparent',
    };

    if (shape === 'square') {
      return (
        <div
          key={index}
          onClick={() => handleOptionClick(option)}
          style={{
            ...commonStyles,
            width: '46px',
            height: '46px',
            borderRadius: radius,
          }}
        >
          {type === 'text' && option}
        </div>
      );
    }

    if (shape === 'circle') {
      return (
        <div
          key={index}
          onClick={() => handleOptionClick(option)}
          style={{
            ...commonStyles,
            width: '31px',
            height: '31px',
            borderRadius: '50%',
          }}
        >
          {type === 'text' && option}
        </div>
      );
    }

    return null;
  };

  return (
    <div style={styles.container}>
      {options.map((option, index) => renderOption(option, index))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

export default ProductOptions;
