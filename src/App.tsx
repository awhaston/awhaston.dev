import './App.css';
import Taskbar from './components/Taskbar/Taskbar';
import Window from './components/Taskbar/Window/Window';

function App() {
    return (
        <div className="App">
            <Window></Window>
            <Taskbar></Taskbar>
        </div>
    );
}

export default App;
