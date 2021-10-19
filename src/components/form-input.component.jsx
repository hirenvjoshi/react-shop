import React from 'react';

const FormInput = ({ handleChange, ...otherInputProps }) => (
    <input onChange={handleChange} {...otherInputProps} />
)

export default FormInput;