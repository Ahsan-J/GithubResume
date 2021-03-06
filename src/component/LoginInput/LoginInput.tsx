import React, { useState } from 'react';
import styles from './LoginInput.style.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useTranslation } from '../../helper/hooks';
import { useHistory, useLocation } from 'react-router-dom';
import { extendSearchParams } from '../../helper/utility';

interface propType {
    className?: string;
    setGitUser?: (gitUser: string) => void
}

const LoginInput: React.FC<propType> =  React.memo((props: React.PropsWithChildren<propType>) => {
    const {t} = useTranslation();
    const [username, setUsername] = useState<string>('');
    const history = useHistory();
    const location = useLocation();

    const generateGitResume = () => {
        if(username.length >= 3) {
            // return props.setGitUser? props.setGitUser(username) : '';
            return history.push(location.pathname + extendSearchParams({name: username}));
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
                    <label htmlFor="gituserinput">{t("Github username")}</label>
                </h2>
                <div className={styles.inputContainer}>
                    <Input id="gituserinput" value={username} onChange={onChangeUsername} onKeyDown={onKeyDown} placeholder="John Doe"/>
                    <Button onClick={generateGitResume}>{t("Generate")}</Button>
                </div>
            </div>
        </div>
    )
});

LoginInput.defaultProps = {
    className: '',
}

export default LoginInput;
