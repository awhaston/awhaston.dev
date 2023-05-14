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
    const [windows, setWindows] = useState<Window[]>([{ id: 0, app: 'TextEditor', isActive: true }]);

    const [activeIndex, setActiveIndex] = useState(1);
    //const [id, setID] = useState(0);

    function handleActive(id: number) {
        const updatedWindows = windows.map((window) => {
            if (window.id === id) {
                window.isActive = true;
                return window;
            } else {
                window.isActive = false;
                return window;
            }
        });

        setActiveIndex(activeIndex + 1);

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
                                activeIndex={activeIndex}
                            />
                        );
                        break;
                    default:
                        break;
                }
            })}
            <Taskbar></Taskbar>
        </div>
    );
}

export default App;
