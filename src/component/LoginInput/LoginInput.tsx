import React, { useRef } from 'react';
import styles from './LoginInput.style.css';
import { Button, IButtonRef, Input } from 'forging-react';

type propType = {
    id?: string;
    style?: React.CSSProperties;
    className?: string;
}

const LoginInput =  React.memo<propType>((props) => {
    const btnRef = useRef<IButtonRef & HTMLButtonElement>(null);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13 && btnRef.current) {
            e.currentTarget.blur();
            btnRef.current.click();
        }
    };

    return (
        <div id={props.id} style={props.style} className={`${styles.loginInputContainer} ${props.className || ""}`}>
            <div className={`${styles.innerContainer}`}>
                <h2 className={`${styles.heading}`}>
                    Github username
                </h2>
                <div className={styles.inputContainer}>
                    <Input name="username" className={styles.input} onKeyDown={onKeyDown} placeholder="John Doe"/>
                    <Button ref={btnRef} className={styles.button} htmlType='submit'>Generate</Button>
                </div>
            </div>
        </div>
    )
});

export default LoginInput;
