import React, { useState } from 'react';
import styles from './LoginInput.style.css';
import { Button, Input } from 'forging-react';
import { useTranslation } from '@/helper/hooks';
import { useSearchParams } from 'react-router-dom';

type propType = {
    id?: string;
    style?: React.CSSProperties;
    className?: string;
    setGitUser?: (gitUser: string) => void
}

const LoginInput =  React.memo<propType>((props) => {
    const { t } = useTranslation();
    const [username, setUsername] = useState<string>('');
    const [, setSearchParams] = useSearchParams();

    const generateGitResume = () => {
        if(username.length >= 3) {
            setSearchParams({name: username});
        }
    };

    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            e.currentTarget.blur();
            generateGitResume();
        }
    };

    return (
        <div className={`${styles.loginInputContainer} ${props.className}`}>
            <div className={`${styles.innerContainer}`}>
                <h2 className={`${styles.heading}`}>
                    {t("Github username")}
                </h2>
                <div className={styles.inputContainer}>
                    <Input className={styles.input} value={username} onChange={onChangeUsername} onKeyDown={onKeyDown} placeholder="John Doe"/>
                    <Button className={styles.button} onClick={generateGitResume}>{t("Generate")}</Button>
                </div>
            </div>
        </div>
    )
});

export default LoginInput;
