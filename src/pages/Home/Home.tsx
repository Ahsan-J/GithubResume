import React, { useMemo } from 'react';
import LoginInput from '@/component/LoginInput';
import Resume from '@/component/Resume';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import styles from './Home.style.css';
import { getFormObject } from 'forging-react';
import { useSearchParams } from 'react-router-dom';

const Home = React.memo(() => {
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
            <div className={styles.container}>
                <form onSubmit={onSubmit} className={styles.innerContainer}>
                    <h1 className={styles.appHeading}>My Github resume</h1>
                    <LoginInput />
                    <Resume username={username} />
                </form>
            </div>
            <Footer />
        </React.Fragment>
    )
});

export default Home;
