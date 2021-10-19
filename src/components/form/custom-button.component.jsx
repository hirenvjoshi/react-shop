import React from 'react';

const CustomButton = ({children, ...otherButtonProps}) => (
    <button {...otherButtonProps}>
        {children}
    </button>
)

export default CustomButton;