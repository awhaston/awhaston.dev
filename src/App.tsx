import { useState } from 'react';
import styles from './App.module.css';
import Taskbar from './components/Taskbar/Taskbar';
import Window from './components/Window/Window';

function App() {
    const [window, setWindow] = useState([]);

    return (
        <div className={styles.desktop}>
            <Window></Window>
            <Taskbar></Taskbar>
        </div>
    );
}

export default App;
