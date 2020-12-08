import React, { useEffect } from 'react';
import styles from './Resume.style.css';
import { useLazyQuery } from '@apollo/client';
import { GET_GIT_USER_DETAIL } from './Resume.gql';
import { useTranslation } from '../../helper/hooks';
import moment from 'moment';
import LanguageBar from '../LanguageBar/LanguageBar';
import RepositoryDetail from '../RepositoryDetail/RepositoryDetail';
import { useLocation } from 'react-router-dom';

interface propType {
    className?: string;
    gitUser?: string;
}

const Resume: React.FC<propType> =  React.memo((props: React.PropsWithChildren<propType>) => {
    
    const query = useSearchQuery();
    const location = useLocation();

    const [loadUserDetail, { called, loading, data }] = useLazyQuery(
        GET_GIT_USER_DETAIL,
        { variables: { username: query.get("name") || props.gitUser } }
    );

    useEffect(() => {
        const username = query.get("name") || props.gitUser;
        if (username) {
            loadUserDetail();
        }
    }, [props.gitUser, location.search]);

    const {t} = useTranslation();

    if (!(query.get("name") || props.gitUser)) {
        return null;
    }

    if (!called || called && loading) return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}/>
            <h3>{t("Generating Resume")}</h3>
        </div>
    )
    const { user } = data || {};

    if (!user) {
        return (
            <h3 className={styles.noUserFound}>{t("No User Found with the username")}</h3>
        )
    }

    const languages = user.repositories.nodes.reduce((result: any, repository: any) => {
        if(repository.primaryLanguage) {
            result[repository.primaryLanguage.id] = {
                ...(result[repository.primaryLanguage.id] || repository.primaryLanguage),
                count : (result[repository.primaryLanguage.id]?.count || 0) + 1,
            };
        }
        return result;
    }, {});

    return (
        <div className={`${styles.container} ${props.className}`} >
            <div className={`${styles.innerWrapper}`}>
                <div className={`${styles.contentContainer}`}>
                    <h1>{user.login}</h1>
                    <p className={`${styles.subText}`}>{user.bio}</p>
                    <span className={styles.websiteUrl}>
                        <a className={styles.link} href={user.websiteUrl} target="__blank" >{user.websiteUrl}</a>
                    </span>
                    <p style={{fontSize: "1.05rem"}}>
                        {`${t("On Github since")} ${moment(user.createdAt).format("YYYY")}, 
                        ${user.name || t("He/She")} ${t("is a developer based in")} ${user.location || t("Wonderland")} 
                        ${t("with")} `}
                        <a className={`${styles.link}`} href={user.url}>
                            {`${user.repositories.totalCount || 0} ${t("public repositories")}`}
                        </a>
                        {` ${t("and")} `}
                        <a className={`${styles.link}`} href={user.url}>
                            {`${user.followers.totalCount || 0} ${t("followers")}`}
                        </a>
                        .
                    </p>
                    
                    {Object.keys(languages).length > 0 ?
                        <React.Fragment>
                            <h2 className={styles.heading}>{t("Languages")}</h2>
                            <div className={styles.languageBarContainer}>
                                {Object.keys(languages).map((key: string) => {
                                    const value= languages[key];
                                    return (
                                        <LanguageBar key={key} className={styles.languageBar} totalCount={user.repositories.totalCount} language={value}/>
                                    )
                                })}
                            </div>
                        </React.Fragment>
                    : null}

                    {Object.keys(user.pinnedItems.nodes).length > 0 ? 
                        <React.Fragment>
                            <h2 className={styles.heading} style={{marginBottom: "0.5rem"}}>{t("Popular repositories")}</h2>
                            <div>
                                {Object.keys(user.pinnedItems.nodes).map((key: string) => {
                                    const value = user.pinnedItems.nodes[key];
                                    return <RepositoryDetail key={key} repository={value}/>;
                                })}
                            </div>
                        </React.Fragment>
                    : null}
                </div>
            </div>
        </div>
    )
});

Resume.defaultProps = {
    className: '',
}

const useSearchQuery = () => {
    return new URLSearchParams(useLocation().search)
}

export default Resume;