import React from 'react';
import moment from 'moment';
import styles from './RepositoryDetail.style.css';
import { useTranslation } from '../../helper/hooks';
import { RepositoryPermission } from '../../helper/enums';

interface propType {
    className?: string;
    repository: any
}

const RepositoryDetail: React.SFC<propType> =  React.memo((props: React.PropsWithChildren<propType>) => {
    const { t } = useTranslation();
    
    return (
        <div className={`${styles.container} ${props.className}`}>
            <div className={styles.headingContainer}>
                <h2 className={`${styles.textColor}`}>{props.repository?.name}</h2>
                <span>
                    {`${moment(props.repository?.createdAt).format("YYYY")} - ${moment(props.repository?.pushedAt).format("YYYY")}`}
                </span>
            </div>
            <p className={styles.language}>{`${props.repository?.primaryLanguage.name} - ${RepositoryPermission[props.repository?.viewerPermission]}`}</p>
            <p>{props.repository?.description}</p>
            <p>
                {`${t("The repository has")} ${props.repository?.stargazers.totalCount} ${t("stars and")} ${props.repository?.forkCount} ${t("forks. if you would like more information about this repository and my contributed code, please visit")} `}
                <a className={styles.textColor} href={props.repository?.url}>{`${props.repository.name}`}</a>
                {` ${t("on Github")}.`}
            </p>
        </div>
    )
});

RepositoryDetail.defaultProps = {
    className: "",
};


export default RepositoryDetail;
