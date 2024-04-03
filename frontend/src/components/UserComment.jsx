import React from 'react';

const UserComment = () => {

 const cardStyle = {
    width: '100%',
    maxWidth: '65vw',
    height: 'auto', 
    background: '#f5f5f5', 
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    backdropFilter: 'blur(10px)',
    transition: '0.5s ease-in-out',
    padding: '10px', 
    marginLeft:'30px'
 };

 const imgStyle = {
    width: '60px',
    height: '60px',
    marginRight: '15px',
    borderRadius: '10px',
    background: 'linear-gradient(#e0e0e0, #d7cfcf)', // Light gradient
 };

 const textBoxStyle = {
    width: 'calc(100% - 80px)', 
    color: '#333', 
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
 };

 const textContentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
 };

 const spanStyle = {
    fontSize: '12px', 
    color: '#666', 
 };

 const h1Style = {
    fontSize: '18px', 
    fontWeight: 'bold',
    marginBottom: '5px', 
 };

 const pStyle = {
    fontSize: '14px', 
    fontWeight: 'lighter',
    color: '#666',
 };

 return (
    <div style={cardStyle}>
      <div style={imgStyle}></div>
      <div style={textBoxStyle}>
        <div style={textContentStyle}>
          <p style={h1Style}>Person Name</p>
          <span style={spanStyle}>12 min ago</span>
        </div>
        <p style={pStyle}>Comment or Review to be displayed</p>
      </div>
    </div>
 );
};

export default UserComment;
