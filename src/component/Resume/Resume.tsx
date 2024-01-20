import React from 'react';
import styles from './Resume.style.css';
import { format } from 'date-fns';
import LanguageBar from '../LanguageBar/LanguageBar';
import RepositoryDetail from '../RepositoryDetail/RepositoryDetail';
import { IGitUser } from '@/model/git';
import { useGitUserFetch } from '@/api/useGitUserFetch';
import { ObjectType, Spinner } from 'forging-react';

type propType = {
    id?: string;
    style?: React.CSSProperties;
    className?: string;
    username?: IGitUser['login'];
}

const Resume=  React.memo<propType>((props) => {
    const { username } = props;
    
    const { data, called, loading } = useGitUserFetch(username)

    if (!username) {
        return null;
    }

    if (!called || called && loading) return (
        <div className={styles.loaderContainer}>
            <Spinner size='xs' className={styles.loader} loader />
            <h3>Generating Resume</h3>
        </div>
    );
    
    if (!data || !data?.user) {
        return (
            <h3 className={styles.noUserFound}>No User Found with the username</h3>
        )
    }

    const { user } = data;

    const languagesByCount = user.repositories.nodes.reduce<ObjectType<number>>((result, repository) => {
        if(!repository.primaryLanguage?.id) return result;

        if(!result[repository.primaryLanguage?.id]) {
            result[repository.primaryLanguage?.id] = 1;
        } else {
            result[repository.primaryLanguage?.id] = result[repository.primaryLanguage?.id] + 1;
        }
        return result;
    }, {});

    return (
        <div id={props.id} style={props.style} className={`${styles.container} ${props.className || ""}`} >
            <div className={`${styles.innerWrapper}`}>
                <div className={`${styles.contentContainer}`}>
                    <h1>{user.login}</h1>
                    <p className={`${styles.subText}`}>{user.bio}</p>
                    <span className={styles.websiteUrl}>
                        <a className={styles.link} href={user.websiteUrl} target="__blank" >{user.websiteUrl}</a>
                    </span>
                    <p style={{fontSize: "1.05rem"}}>
                        On Github since {format(user.createdAt, "yyyy")}, 
                        &nbsp;{user.name || "He/She"} is a developer based in {user.location} 
                        &nbsp;with&nbsp;
                        <a className={`${styles.link}`} href={user.url}>{user.repositories.totalCount || 0} public repositories</a> 
                        &nbsp;and&nbsp;
                        <a className={`${styles.link}`} href={user.url}>{user.followers.totalCount || 0} followers</a>.
                    </p>
                    
                    {Object.keys(languagesByCount).length > 0 ?
                        <React.Fragment>
                            <h2 className={styles.heading}>Languages</h2>
                            <div className={styles.languageBarContainer}>
                                {Object.keys(languagesByCount).map((languageId: string) => {
                                    const count = languagesByCount[languageId];
                                    const value = user.repositories.nodes.find(repo => repo.primaryLanguage?.id == languageId);
                                    if(!value) return null;
                                    const ratio = count / user.repositories.totalCount
                                    return (
                                        <LanguageBar key={languageId} className={styles.languageBar} ratio={ratio} language={value.primaryLanguage}/>
                                    )
                                })}
                            </div>
                        </React.Fragment>
                    : null}

                    {user.pinnedItems.nodes.length > 0 ? 
                        <React.Fragment>
                            <h2 className={styles.heading} style={{marginBottom: "0.5rem"}}>Popular repositories</h2>
                            <div>
                                {user.pinnedItems.nodes.map((item) => {
                                    return <RepositoryDetail key={item.name} repository={item}/>;
                                })}
                            </div>
                        </React.Fragment>
                    : null}
                </div>
            </div>
        </div>
    )
});

export default Resume;