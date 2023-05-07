import styles from './Window.module.css';
import TopBar from './TopBar';
import { useEffect, useRef } from 'react';

function Window(props: WindowProps) {
    const taskbarRef = useRef<HTMLDivElement>(null);
    const windowRef = useRef<HTMLDivElement>(null);
    const isClicked = useRef<boolean>(false);
    const coords = useRef<{ startX: number; startY: number; lastX: number; lastY: number }>({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0
    });

    // Moving active window to the front
    useEffect(() => {
        if (!windowRef.current) return;
        const window = windowRef.current;
        if (props.isActive) {
            window.style.zIndex = `${props.activeIndex}`;
        }
    }, [props.isActive]);

    // Set window width/height and draggable divs event listeners
    useEffect(() => {
        if (!windowRef.current) return;
        const window = windowRef.current;

        window.style.height = `${props.height}px`;
        window.style.width = `${props.width}px`;
    }, []);

    // Set drag window event listeners
    useEffect(() => {
        if (!windowRef.current || !taskbarRef.current) return;

        const taskbar = taskbarRef.current;
        const window = windowRef.current;
        const desktop = windowRef.current.parentNode;

        const onMouseUp = () => {
            isClicked.current = false;

            coords.current.lastX = window.offsetLeft;
            coords.current.lastY = window.offsetTop;
        };

        const onMouseDown = (e: MouseEvent) => {
            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (isClicked.current === false) return;

            const nextX = e.clientX - coords.current.startX + coords.current.lastX;
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;
            const maxX = document.body.clientWidth - window.offsetWidth;
            const maxY = document.body.clientHeight - window.offsetHeight;

            if (nextX < 0) {
                window.style.left = '0';
            } else if (nextX > maxX) {
                window.style.left = `${maxX}px`;
            } else {
                window.style.left = `${nextX}px`;
            }

            if (nextY < 0) {
                window.style.top = '0';
            } else if (nextY > maxY) {
                window.style.top = `${maxY}px`;
            } else {
                window.style.top = `${nextY}px`;
            }
        };

        taskbar.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseleave', onMouseUp);
        document.addEventListener('blur', onMouseUp);
        desktop!.addEventListener('mouseleave', onMouseUp);

        const cleanUp = () => {
            taskbar.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseleave', onMouseUp);
            desktop!.removeEventListener('mouseleave', onMouseUp);
            document.removeEventListener('blur', onMouseUp);
        };

        return cleanUp;
    });

    return (
        <div onMouseDown={props.activeHandler} ref={windowRef} className={styles.windowContainer}>
            <div className={styles.topRight}></div>
            <div className={styles.topLeft}></div>
            <div className={styles.bottomRight}></div>
            <div className={styles.bottomLeft}></div>

            <TopBar innerRef={taskbarRef} />

            {props.children}
        </div>
    );
}

export default Window;
