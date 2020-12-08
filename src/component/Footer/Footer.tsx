import React from 'react';
import styles from './Footer.style.css';
import moment from 'moment';

interface propType {
    className?: string;
}

const Footer: React.FC<propType> =  React.memo((props: React.PropsWithChildren<propType>) => {
    
    return (
        <footer className={`${styles.footer} ${props.className}`}>
            &copy; Github {moment().format("YYYY")}
        </footer>
    )
});

Footer.defaultProps = {
    className: "",
};


export default Footer;
