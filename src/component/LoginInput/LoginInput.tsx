import React, { useRef } from 'react';
import styles from './LoginInput.style.css';
import { Button, IButtonRef, Input } from 'forging-react';
import { useTranslation } from '@/helper/hooks';

type propType = {
    id?: string;
    style?: React.CSSProperties;
    className?: string;
    setGitUser?: (gitUser: string) => void
}

const LoginInput =  React.memo<propType>((props) => {
    const { t } = useTranslation();
    const btnRef = useRef<IButtonRef & HTMLButtonElement>(null);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13 && btnRef.current) {
            e.currentTarget.blur();
            btnRef.current.click();
        }
    };

    return (
        <div className={`${styles.loginInputContainer} ${props.className}`}>
            <div className={`${styles.innerContainer}`}>
                <h2 className={`${styles.heading}`}>
                    {t("Github username")}
                </h2>
                <div className={styles.inputContainer}>
                    <Input name="username" className={styles.input} onKeyDown={onKeyDown} placeholder="John Doe"/>
                    <Button ref={btnRef} className={styles.button} htmlType='submit'>{t("Generate")}</Button>
                </div>
            </div>
        </div>
    )
});

export default LoginInput;
