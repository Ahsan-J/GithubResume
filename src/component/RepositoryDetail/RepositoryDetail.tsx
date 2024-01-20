import React from 'react';
import styles from './RepositoryDetail.style.css';
import { RepositoryPermission } from '@/helper/enums';
import { IGitRepository } from '@/model/git';
import { format } from 'date-fns';

type propType = {
    id?: string;
    style?: React.CSSProperties;
    className?: string;
    repository: IGitRepository
}

const RepositoryDetail =  React.memo<propType>((props) => {
    
    return (
        <div id={props.id} style={props.style} className={`${styles.container} ${props.className || ""}`}>
            <div className={styles.headingContainer}>
                <h2 className={`${styles.textColor}`}>{props.repository?.name}</h2>
                <span>
                    {`${format(props.repository?.createdAt, "yyyy")} - ${format(props.repository?.pushedAt, "yyyy")}`}
                </span>
            </div>
            <p className={styles.language}>{`${props.repository?.primaryLanguage.name} - ${RepositoryPermission[props.repository?.viewerPermission]}`}</p>
            <p>{props.repository?.description}</p>
            <p>
                The repository has {props.repository?.stargazers.totalCount} stars and {props.repository?.forkCount} forks. if you would like more information about this repository and my contributed code, please visit
                &nbsp;<a className={styles.textColor} href={props.repository?.url}>{`${props.repository.name}`}</a>
                &nbsp;on Github.
            </p>
        </div>
    )
});

export default RepositoryDetail;
