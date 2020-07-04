import React from 'react';
import styles from './Header.style.css';
import logo from '../../../assets/ba9a7cbd.jpg';

interface propType {
    className?: string;
}

const Header: React.SFC<propType> =  React.memo((props: React.PropsWithChildren<propType>) => {
    
    const onImgClick = () => {
        window.open('https://www.exozet.com/','_blank');
    }

    return (
        <header className={`${styles.header} ${props.className}`}>
            <img onClick={onImgClick} className={`${styles.appBanner}`} src={logo} />
        </header>
    )
});

Header.defaultProps = {
    className: "",
};

export default Header;
