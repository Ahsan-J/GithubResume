import React from 'react';
import styles from './Header.style.css';
import logo from '@/assets/ba9a7cbd.jpg';
import { Button, Image } from 'forging-react';

type propType  = {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
}

const Header = React.memo<propType>((props) => {

    return (
        <header style={props.style} id={props.id} className={`${styles.header} ${props.className || ""}`}>
            <Button className={styles.linkWrapper} link='https://ahsan-j.github.io/'>
                <Image src={logo} />
            </Button>
        </header>
    )
});

export default Header;
