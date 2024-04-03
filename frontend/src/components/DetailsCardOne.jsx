import React, { useState } from 'react';

const DetailsCardOne = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const amenities = ['Free Wi-Fi', 'Air Conditioning', '24-hour Security', 'Laundry Service', 'Gyser', 'Two Wheeler Parking'];

    const baseStyle = {
        cursor: 'pointer',
        width: '90%',
        height: '450px',
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

    const titleStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    };

    const amenitiesListStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        listStyleType: 'none',
        padding: 0,
    };

    const amenityItemStyle = {
        padding: '10px 0',
        flexBasis: 'calc(33.333% - 10px)', 
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', 
        borderRadius: '5px', 
        marginBottom: '10px',
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2 style={titleStyle}>Amenities Provided </h2>
            <ul style={amenitiesListStyle}>
                {amenities.map((amenity, index) => (
                    <li key={index} style={amenityItemStyle}>
                        <div style={{ padding: '20px' }}>{amenity}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DetailsCardOne;
