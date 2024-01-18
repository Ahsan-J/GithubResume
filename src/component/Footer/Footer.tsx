import React from 'react';
import styles from './Footer.style.css';
import moment from 'moment';

type propType = {
    id?: string;
    style?: React.CSSProperties;
    className?: string;
}

const Footer =  React.memo<propType>((props) => {
    
    return (
        <footer className={`${styles.footer} ${props.className}`}>
            &copy; <a href='https://github.com/Ahsan-J' target='__blank'>Ahsan-J</a> {moment().format("YYYY")}
        </footer>
    )
});

export default Footer;
