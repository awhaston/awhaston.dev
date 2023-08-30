import styles from './TextEditor.module.css';
import Window from '../../Window/Window';

function TextEditor(props: AppProps) {
    const width = '400px';
    const height = '400px';

    return (
        <Window
            activeHandler={props.activeHandler}
            isActive={props.isActive}
            activeIndex={props.activeIndex}
            height={height}
            width={width}
        >
            <textarea className={styles.textArea}> </textarea>
        </Window>
    );
}

export default TextEditor;
