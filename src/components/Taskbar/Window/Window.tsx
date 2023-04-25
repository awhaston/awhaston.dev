import styles from './Window.module.css';
import TopBar from './TopBar';
import { useEffect, useRef } from 'react';

function Window(props: any) {
    const taskbarRef = useRef<HTMLDivElement>(null);
    const windowRef = useRef<HTMLDivElement>(null);
    const isClicked = useRef<boolean>(false);
    const coords = useRef<{ startX: number; startY: number; lastX: number; lastY: number }>({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0
    });

    useEffect(() => {
        if (!windowRef.current || !taskbarRef.current) return;

        const taskbar = taskbarRef.current;
        const window = windowRef.current;

        const onMouseUp = (e: MouseEvent) => {
            isClicked.current = false;

            coords.current.lastX = window.offsetLeft;
            coords.current.lastY = window.offsetTop;
        };

        const onMouseDown = (e: MouseEvent) => {
            console.log(e.buttons);
            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (isClicked.current === false) return;

            const nextX = e.clientX - coords.current.startX + coords.current.lastX;
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;

            window.style.left = `${nextX}px`;
            window.style.top = `${nextY}px`;
        };

        taskbar.addEventListener('mousedown', onMouseDown);
        taskbar.addEventListener('mouseup', onMouseUp);
        taskbar.addEventListener('mousemove', onMouseMove);
        taskbar.addEventListener('mouseleave', onMouseUp);

        const cleanUp = () => {
            taskbar.removeEventListener('mousedown', onMouseDown);
            taskbar.removeEventListener('mouseup', onMouseUp);
            taskbar.removeEventListener('mousemove', onMouseMove);
            taskbar.removeEventListener('mouseleave', onMouseUp);
        };

        return cleanUp;
    });

    return (
        <div ref={windowRef} className={styles.windowContainer}>
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
