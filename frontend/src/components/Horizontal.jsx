import React from 'react';

const Horizontal = () => {
    const cardStyle = {
        width: '210px',
        height: '254px',
        borderRadius: '4px',
        background: '#212121',
        display: 'flex',
        flexDirection: 'column', // Align items horizontally
        gap: '5px',
        padding: '.4em',
    };

    const paragraphStyle = {
        height: '100%',
        flex: 1,
        overflow: 'hidden',
        cursor: 'pointer',
        borderRadius: '2px',
        transition: 'all .5s',
        background: '#212121',
        border: '1px solid #ff5a91',
        display: 'flex',

        justifyContent: 'center',
        alignItems: 'center',
    };

    const paragraphHoverStyle = {
        flex: 4,
    };

    const spanStyle = {
        minWidth: '14em',
        padding: '.5em',
        textAlign: 'center',
        transform: 'rotate(-90deg)',
        transition: 'all .5s',
        textTransform: 'uppercase',
        color: '#ff568e',
        letterSpacing: '.1em',
    };

    const spanHoverStyle = {
        transform: 'rotate(0)',
    };

    return (
        <div style={cardStyle}>
            <p style={paragraphStyle} onMouseEnter={(e) => e.currentTarget.style.flex = paragraphHoverStyle.flex} onMouseLeave={(e) => e.currentTarget.style.flex = paragraphStyle.flex}>
                <span style={spanStyle} onMouseEnter={(e) => e.currentTarget.style.transform = spanHoverStyle.transform} onMouseLeave={(e) => e.currentTarget.style.transform = spanStyle.transform}>ADDRESS</span>
            </p>
            <p style={paragraphStyle} onMouseEnter={(e) => e.currentTarget.style.flex = paragraphHoverStyle.flex} onMouseLeave={(e) => e.currentTarget.style.flex = paragraphStyle.flex}>
                <span style={spanStyle} onMouseEnter={(e) => e.currentTarget.style.transform = spanHoverStyle.transform} onMouseLeave={(e) => e.currentTarget.style.transform = spanStyle.transform}>PHONE</span>
            </p>

        </div>
    );
};

export default Horizontal;
