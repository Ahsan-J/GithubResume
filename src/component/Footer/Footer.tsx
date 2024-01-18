import React from 'react';
import styles from './Footer.style.css';
import moment from 'moment';

interface propType {
    className?: string;
}

const Footer: React.FC<propType> =  React.memo((props: React.PropsWithChildren<propType>) => {
    
    return (
        <footer className={`${styles.footer} ${props.className}`}>
            &copy; <a href='https://github.com/Ahsan-J' target='__blank'>Ahsan-J</a> {moment().format("YYYY")}
        </footer>
    )
});

Footer.defaultProps = {
    className: "",
};


export default Footer;
