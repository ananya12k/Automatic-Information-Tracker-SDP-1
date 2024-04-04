import React from 'react';

const UserInput = ({ styles, onChange }) => {
 return (
    <textarea
      style={{
        width: '100%', 
        height: '20vh',
        padding: '1em',
        boxSizing: 'border-box',
        ...styles,
      }}
      placeholder='Share details of your own experience at this place'
      onChange={onChange} 
    />
 );
};

export default UserInput;
