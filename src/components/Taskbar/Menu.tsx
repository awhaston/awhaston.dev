import styles from './Menu.module.css';

interface PropType {
    display: boolean;
}

function Menu({ display }: PropType) {
    return <div>{!display ? <div className={styles.menuContainer}> Menu</div> : <div></div>}</div>;
}

export default Menu;
