import styles from './TextEditor.module.css';
import Window from '../../Window/Window';

function TextEditor(props: any) {
    return (
        <Window activeHandler={props.activeHandler} isActive={props.isActive} height="400" width="400">
            <textarea className={styles.textArea}> </textarea>
        </Window>
    );
}

export default TextEditor;
