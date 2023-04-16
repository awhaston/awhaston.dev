import styles from './Taskbar.module.css';
import StartButton from './StartButton/StartButton';
import Menu from './Menu';
import { useState } from 'react';

function Taskbar(props: any) {
    const [displayMenu, setDisplayMenu] = useState(false);
    return (
        <div>
            <Menu display={displayMenu} />
            <div className={styles.taskbar}>
                <div onClick={() => setDisplayMenu(!displayMenu)}>
                    <StartButton />
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default Taskbar;
