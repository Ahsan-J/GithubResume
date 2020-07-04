import React from 'react';
import styles from './Button.style.css';

interface propType {
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.SFC<propType> =  React.memo((props: React.PropsWithChildren<propType>) => {
    
    return (
        <button onClick={props.onClick} className={`${styles.button} ${props.className}`}>
            {props.children}
        </button>
    )
});

Button.defaultProps = {
    className: "",
};


export default Button;
