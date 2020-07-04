import React from 'react';
import styles from './Input.style.css';

interface propType {
    id?: string;
    placeholder?: string;
    className?: string;
    value?: string | number;
    onChange? : (event: React.ChangeEvent<HTMLInputElement>) => void
    onKeyDown? : (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const Input: React.SFC<propType> =  React.memo((props: React.PropsWithChildren<propType>) => {
    
    return (
        <input
            id={props.id}
            onKeyDown={props.onKeyDown}
            onChange={props.onChange} 
            value={props.value} 
            placeholder={props.placeholder} 
            className={`${styles.input} ${props.className}`} />
    )
});

Input.defaultProps = {
    className: '',
}

export default Input;
