import React from 'react';
import styles from './LanguageBar.style.css';
import { IGitRepositoryLanguage } from '@/model/git';
import { Progress } from 'forging-react';

type propType = {
    id?: string;
    style?: React.CSSProperties;
    className?: string;
    ratio: number;
    language: IGitRepositoryLanguage;
}

const LanguageBar =  React.memo<propType>((props) => {
    if(typeof props.ratio != 'number') return null;
    
    if(!props.language) return null;

    return (
        <div id={props.id} style={props.style} className={`${styles.container} ${props.className || ""}`}>
            <h4 className={styles.language}>{props.language?.name}</h4>
            <p className={styles.subText}>{(props.ratio * 100).toFixed(2)}% </p>
            <Progress progress={props.ratio * 100}/>
        </div>
    )
});

export default LanguageBar;
