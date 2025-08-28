import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: '#222',
            color: '#fff',
            textAlign: 'center',
            padding: '1rem 0',
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
        }}>
            <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </footer>
    );
};

export default Footer;