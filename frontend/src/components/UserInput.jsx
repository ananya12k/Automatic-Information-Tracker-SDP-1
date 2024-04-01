import React from 'react';

const UserInput = ({ styles }) => {
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
    />
 );
};

export default UserInput;
