import React, { useState } from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';

import AddressCard from '../components/AddressCard';

const DetailsCardTwo = ({ hostel }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const baseStyle = {
        cursor: 'pointer',
        width: '90%',
        height: '450px',
        background: '#f8f9fa',
        borderRadius: '5px',
        border: 'none',
        transition: 'all .2s',
        boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)',
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif',
        margin: '40px',
    };

    const hoverStyle = {
        boxShadow: '-12px 12px 2px -1px rgba(0, 0, 255, .2)',
    };

    const cardStyle = isHovered ? { ...baseStyle, ...hoverStyle } : baseStyle;

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AddressCard hostel={hostel} />
        </div>
    );
};

export default DetailsCardTwo;
