import React from 'react';
import styles from './Footer.style.css';
import { format } from 'date-fns';

type propType = {
    id?: string;
    style?: React.CSSProperties;
    className?: string;
}

const Footer =  React.memo<propType>((props) => {
    
    return (
        <footer id={props.id} style={props.style} className={`${styles.footer} ${props.className || ""}`}>
            &copy; <a href='https://github.com/Ahsan-J' target='__blank'>Ahsan-J</a> {format(new Date(), "yyyy")}
        </footer>
    )
});

export default Footer;
