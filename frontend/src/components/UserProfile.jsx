import React from 'react';

const UserProfile = () => {
    const cardStyle = {
        width: '100%',
        maxWidth: '75vw',
        height: 'auto', 
        background: 'transparent', 
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        backdropFilter: 'blur(10px)',
        transition: '0.5s ease-in-out',
        padding: '10px',
        margin: '20px'
    };

    const imgStyle = {
        width: '60px', 
        height: '60px',
        marginRight: '15px',
        borderRadius: '10px',
        background: 'linear-gradient(#d7cfcf, #9198e5)',
    };

    const textBoxStyle = {
        width: 'calc(100% - 80px)', 
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
        width: '100%', 
    };

    const spanStyle = {
        fontSize: '12px', 
        color: '#ccc', 
    };

    const h1Style = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '5px',
        color: '#fff', 
    };

    const pStyle = {
        fontSize: '14px', 
        fontWeight: 'lighter',
        color: '#000000', 
    };

    return (
        <div style={cardStyle}>
            <div style={imgStyle}></div>
            <div style={textBoxStyle}>
                <div style={textContentStyle}>
                    <p style={pStyle} className='fs-5'>Person Name</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
