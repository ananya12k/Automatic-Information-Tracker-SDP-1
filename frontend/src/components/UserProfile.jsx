import React from 'react';

const UserProfile = () => {
 // Define the styles for the component
 const cardStyle = {
    width: '100%',
    maxWidth: '75vw', // Increased maxWidth for better responsiveness
    height: 'auto', // Changed to auto to accommodate content
    background: '#353535',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    backdropFilter: 'blur(10px)',
    transition: '0.5s ease-in-out',
    padding: '10px', // Added padding for better spacing
    margin:'20px'
 };

 const imgStyle = {
    width: '60px', // Increased size for better visibility
    height: '60px',
    marginRight: '15px', // Increased margin for better spacing
    borderRadius: '10px',
    background: 'linear-gradient(#d7cfcf, #9198e5)',
 };

 const textBoxStyle = {
    width: 'calc(100% - 80px)', // Adjusted width to accommodate image size
    color: 'white',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
 };

 const textContentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%', // Ensure it takes full width
 };

 const spanStyle = {
    fontSize: '12px', // Increased font size for better readability
    color: '#ccc', // Lightened color for better contrast
 };

 const h1Style = {
    fontSize: '18px', // Increased font size for better readability
    fontWeight: 'bold',
    marginBottom: '5px', // Added margin for spacing
 };

 const pStyle = {
    fontSize: '14px', // Increased font size for better readability
    fontWeight: 'lighter',
    color: '#ccc', // Lightened color for better contrast
 };

 return (
    <div style={cardStyle}>
      <div style={imgStyle}></div>
      <div style={textBoxStyle}>
        <div style={textContentStyle}>
          <p style={h1Style}>Person Name</p>
          <span style={spanStyle}>12 min ago</span>
        </div>
        <p style={pStyle}>Comment or Review to be displayedddddddddddddddddddddddd</p>
      </div>
    </div>
 );
};

export default UserProfile;
