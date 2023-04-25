import styles from './TopBar.module.css';

function TopBar(props: any) {
    return (
        <div className={styles.barContainer} ref={props.innerRef}>
            <div className={styles.buttonContainer}>
                <div className={`${styles.buttonClose} ${styles.button}`}></div>
                <div className={`${styles.buttonMini} ${styles.button}`}></div>
                <div className={`${styles.buttonMaxi} ${styles.button}`}></div>
            </div>
        </div>
    );
}

export default TopBar;
