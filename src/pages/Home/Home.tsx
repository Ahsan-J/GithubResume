import React, { useMemo } from 'react';
import { useTranslation } from '../../helper/hooks';
import LoginInput from '../../component/LoginInput/LoginInput';
import Resume from '../../component/Resume/Resume';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import styles from './Home.style.css';
import { getFormObject } from 'forging-react';
import { useSearchParams } from 'react-router-dom';

const Home = React.memo(() => {
    const { t } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        const data = getFormObject(e.currentTarget);
        
        if(!data) return null;

        const { username } = data;

        if(typeof username == "string" && username?.length >= 3) {
            setSearchParams({ username });
        }
    }

    const username = useMemo(() => searchParams.get('username') || "", [searchParams]);

    return (
        <React.Fragment>
            <Header />
            <div className={`${styles.container}`}>
                <form onSubmit={onSubmit} className={`${styles.innerContainer}`}>
                    <h1 className={`${styles.appHeading}`}>{t("my github resume")}</h1>
                    <LoginInput />
                    <Resume username={username} />
                </form>
            </div>
            <Footer />
        </React.Fragment>
    )
});

export default Home;
