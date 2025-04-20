import React from 'react';

const ContinueButton = React.forwardRef(({ onClick, isDisabled }, ref) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
    onClick && onClick(); 
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={`continue-btn  ${isDisabled ? 'disabled' : ''}`}
      style={{
        opacity: isDisabled ? 0.3 : 1,
        pointerEvents: isDisabled ? 'none' : 'auto',
      }}
    >
      Continue &nbsp; &#x276F;&#x276F;
    </button>
  );
});

export default ContinueButton;
