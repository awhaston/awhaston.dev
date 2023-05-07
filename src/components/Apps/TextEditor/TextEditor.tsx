import styles from './TextEditor.module.css';
import Window from '../../Window/Window';

function TextEditor(props: AppProps) {
    return (
        <Window
            activeHandler={props.activeHandler}
            isActive={props.isActive}
            activeIndex={props.activeIndex}
            height="400"
            width="400"
        >
            <textarea className={styles.textArea}> </textarea>
        </Window>
    );
}

export default TextEditor;
