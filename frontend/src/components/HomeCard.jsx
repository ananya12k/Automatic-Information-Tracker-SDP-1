import React, { useState } from 'react';

const HomeCard = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const baseStyle = {
        cursor: 'pointer',
        width: '90%',
        height: '550px',
        background: 'rgb(255, 255, 255)',
        borderRadius: '5px',
        border: '1px solid rgba(0, 0, 255, .2)',
        transition: 'all .2s',
        boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)',
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif',
        margin: '40px',
        backgroundColor: '#f8f9fa', 
    };

    const hoverStyle = {
        boxShadow: '-12px 12px 2px -1px rgba(0, 0, 255, .2)',
    };

    const cardStyle = isHovered ? { ...baseStyle, ...hoverStyle } : baseStyle;

    const buttonStyle = {
        lineHeight: '1',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '.75rem',
        backgroundColor: isButtonHovered ? '#5C6BC0' : '#3F51B5', // Change color on hover
        color: '#fff',
        borderRadius: '10rem',
        fontWeight: '600',
        padding: '.75rem 1.5rem',
        margin:"20px",
        paddingLeft: '20px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        transition: 'background-color .3s',
        boxShadow: '0 4px 8px 0 rgba(63, 81, 181, 0.2), 0 6px 20px 0 rgba(63, 81, 181, 0.19)', // Apply #3F51B5 color as box shadow
    };

    const iconWrapperStyle = {
        flexShrink: '0',
        width: '25px',
        height: '25px',
        position: 'relative',
        color: isButtonHovered ? '#000' : '#7808d0', 
        backgroundColor: '#fff',
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden',
    };

    const iconStyle = {
        position: 'absolute',
        transform: isButtonHovered ? 'translate(150%, -150%)' : 'translate(-150%, 150%)', 
        transition: 'transform .3s ease-in-out',
    };

    const iconCopyStyle = {
        position: 'absolute',
        transform: isButtonHovered ? 'translate(0)' : 'translate(-150%, 150%)', 
        transition: 'transform .3s ease-in-out .1s',
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2 style={{ marginBottom: '20px', fontSize: '33px', fontWeight: 'bold', margin:"30px" }}>
                Your Gateway to Comprehensive Accommodation and Tiffin Services
            </h2>
            <p style={{ fontSize: '18px', fontWeight: 'bold', margin:"30px" }}>
                A one-stop solution designed to simplify the search for suitable hostel and PG accommodation, as well as tiffin services within Nadiad.

                <p style={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold' }}>
                    Explore our platform today and find your perfect accommodation and services, designed to enhance your student life in Nadiad.
                </p>
                <a
                    style={buttonStyle}
                    href="#"
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                >
                    <span style={iconWrapperStyle}>
                        <svg style={iconStyle} width="10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                        </svg>
                        <svg style={iconCopyStyle} className="button__icon-svg button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                        </svg>
                    </span>
                    Explore Our Services
                </a>
                </p>
        </div>
    );
};

export default HomeCard;
