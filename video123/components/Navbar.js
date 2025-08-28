import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>MyApp</div>
            <ul style={styles.navLinks}>
                <li><Link href="/" style={styles.link}>Home</Link></li>
                <li><Link href="/about" style={styles.link}>About</Link></li>
                <li><Link href="/contact" style={styles.link}>Contact</Link></li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        background: '#222',
        color: '#fff',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '1rem',
        margin: 0,
        padding: 0,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1rem',
    },
};

export default Navbar;