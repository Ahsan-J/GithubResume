import React from 'react';
import styles from './LanguageBar.style.css';

type propType = {
    id?: string;
    style?: React.CSSProperties;
    className?: string;
    totalCount: number;
    language: any;
}

const LanguageBar =  React.memo<propType>((props) => {
    const ratio = (props.language?.count || 1) / props.totalCount
    return (
        <div className={`${styles.container} ${props.className}`}>
            <span className={styles.language}>
                {props.language?.name}
            </span>
            {" "}
            <span className={styles.subText}>
                {(ratio * 100).toFixed(2)}%
            </span>

            <div className={styles.progressBar}>
                <div role="progressbar" style={{width: `${ratio * 100}%`, backgroundColor: 'rgb(236, 23, 77)'}}></div>
            </div>
        </div>
    )
});

export default LanguageBar;
