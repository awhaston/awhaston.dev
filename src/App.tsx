import styles from './App.module.css';
import Taskbar from './components/Taskbar/Taskbar';
import Window from './components/Taskbar/Window/Window';

function App() {
    return (
        <div className={styles.desktop}>
            <Window></Window>
            <Window></Window>
            <Taskbar></Taskbar>
        </div>
    );
}

export default App;
