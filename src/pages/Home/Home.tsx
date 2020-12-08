import React, { useState } from 'react';
import { useTranslation } from '../../helper/hooks';
import LoginInput from '../../component/LoginInput/LoginInput';
import Resume from '../../component/Resume/Resume';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import styles from './Home.style.css';

interface propType {

}

const Home: React.FC<propType> =  React.memo(() => {
    const { t } = useTranslation();
    const [gitUser, setGitUser] = useState<string>('')

    return (
        <React.Fragment>
            <Header />
            <div className={`${styles.container}`}>
                <div className={`${styles.innerContainer}`}>
                    <h1 className={`${styles.appHeading}`}>{t("my github resume")}</h1>
                    <LoginInput setGitUser={setGitUser}/>
                    <Resume gitUser={gitUser}/>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
});

Home.defaultProps = {
    className: "",
};


export default Home;
