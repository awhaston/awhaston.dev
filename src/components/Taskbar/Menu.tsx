import { ReactElement } from 'react';
import styles from './Menu.module.css';

interface PropType {
    display: boolean;
    children: any;
}

function Menu(props: PropType) {
    return (
        <div>
            {!props.display ? <div className={styles.menuContainer}>{props.children}</div> : <div></div>}
        </div>
    );
}

export default Menu;
