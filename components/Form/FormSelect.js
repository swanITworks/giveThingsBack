import React from 'react';
import chroma from 'chroma-js';


import {colourOptions} from './data/data';
import Select from 'react-select';

const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',
});

const colourStyles = {
    control: styles => ({
        ...styles,
        backgroundColor: '#F0F1F1',
        width: '200px',
        border: '1px solid black',
        borderRadius: '0px',
    }),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: '#F0F1F1',
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',
            borderRadius: '0px',
            border: '1px solid black',
            textAlign:'right',
            width:'15px',

            ':active': {
                ...styles[':active'],
                backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
            },
        };
    },
    input: styles => ({...styles, ...dot()}),
    placeholder: styles => ({...styles, ...dot()}),
    singleValue: (styles, {data}) => ({...styles, ...dot(data.color)}),
};

export default () => (
    <Select
        defaultValue={colourOptions[0]}
        label="Single select"
        options={colourOptions}
        styles={colourStyles}

    />
);