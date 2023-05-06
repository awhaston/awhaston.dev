import { useState } from 'react';
import styles from './App.module.css';
import Taskbar from './components/Taskbar/Taskbar';
import Window from './components/Window/Window';
import TextEditor from './components/Apps/TextEditor/TextEditor';

interface Window {
    id: number;
    app: string;
    isActive: boolean;
}

function App() {
    const [windows, setWindows] = useState<Window[]>([
        { id: 0, app: 'TextEditor', isActive: true },
        { id: 2, app: 'TextEditor', isActive: false },
        { id: 1, app: 'TextEditor', isActive: false }
    ]);

    function handleActive(id: number) {
        const updatedWindows = windows.map((window) => {
            if (window.id === id) {
                window.isActive = true;
                console.log(window);
                return window;
            } else {
                window.isActive = false;
                console.log(window);
                return window;
            }
        });

        setWindows(updatedWindows);
    }

    return (
        <div className={styles.desktop}>
            {windows.map((window, index) => {
                switch (window.app) {
                    case 'TextEditor':
                        return (
                            <TextEditor
                                key={index}
                                isActive={window.isActive}
                                activeHandler={() => handleActive(window.id)}
                            />
                        );
                        break;
                }
            })}
            <Taskbar></Taskbar>
        </div>
    );
}

export default App;
