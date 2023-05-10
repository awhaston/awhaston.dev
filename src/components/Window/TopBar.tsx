import type { LegacyRef, MouseEventHandler } from 'react';
import styles from './TopBar.module.css';

type TopBarProps = {
    innerRef: LegacyRef<HTMLDivElement> | undefined;
    closeClick: MouseEventHandler;
    minClick: MouseEventHandler;
    maxClick: MouseEventHandler;
};

function TopBar(props: TopBarProps) {
    return (
        <div className={styles.barContainer} ref={props.innerRef}>
            <div className={styles.buttonContainer}>
                <div onClick={props.closeClick} className={`${styles.buttonClose} ${styles.button}`}></div>
                <div onClick={props.minClick} className={`${styles.buttonMini} ${styles.button}`}></div>
                <div onClick={props.maxClick} className={`${styles.buttonMaxi} ${styles.button}`}></div>
            </div>
        </div>
    );
}

export default TopBar;
