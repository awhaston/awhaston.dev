import styles from './Window.module.css';
import TopBar from './TopBar';
import { useEffect, useRef } from 'react';

type WindowProps = {
    isActive: boolean;
    activeIndex: number;
    height: string;
    width: string;
    activeHandler: any;
    children: any;
};

function Window(props: WindowProps) {
    const taskbarRef = useRef<HTMLDivElement>(null);
    const windowRef = useRef<HTMLDivElement>(null);
    const topDragRef = useRef<HTMLDivElement>(null);
    const bottomDragRef = useRef<HTMLDivElement>(null);
    const rightDragRef = useRef<HTMLDivElement>(null);
    const leftDragRef = useRef<HTMLDivElement>(null);
    const isClicked = useRef<boolean>(false);
    const coords = useRef<{ startX: number; startY: number; lastX: number; lastY: number }>({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0
    });
    const isResizeClicked = useRef<boolean>(false);
    const sideClicked = useRef<string>('');

    // Moving active window to the front
    useEffect(() => {
        if (!windowRef.current) return;
        const window = windowRef.current;
        if (props.isActive) {
            window.style.zIndex = `${props.activeIndex}`;
            window.style.opacity = '1';
        } else {
            window.style.opacity = '0.25';
        }
    }, [props.isActive]);

    // Set window width/height and draggable divs event listeners
    useEffect(() => {
        if (!windowRef.current) return;
        const window = windowRef.current;

        window.style.height = `${props.height}`;
        window.style.width = `${props.width}`;
    }, []);

    // Set event listeners for side resize events
    useEffect(() => {
        if (
            !windowRef.current ||
            !taskbarRef.current ||
            !topDragRef.current ||
            !bottomDragRef.current ||
            !rightDragRef.current ||
            !leftDragRef.current
        ) {
            return;
        }

        const top = topDragRef.current;
        const bottom = bottomDragRef.current;
        const right = rightDragRef.current;
        const left = leftDragRef.current;
        const desktop = windowRef.current.parentNode;

        const onMouseUp = () => {
            isResizeClicked.current = false;
            sideClicked.current = '';
        };

        const onMouseDown = (e: MouseEvent) => {
            switch (e.target) {
                case top:
                    sideClicked.current = 'top';
                    break;
                case bottom:
                    sideClicked.current = 'bottom';
                    break;
                case right:
                    sideClicked.current = 'right';
                    break;
                case left:
                    sideClicked.current = 'left';
                    break;
            }
            isResizeClicked.current = true;
        };

        const onResizeDrag = () => {
            if (!isResizeClicked || isClicked) return;

            switch (sideClicked.current) {
                case 'top':
                    break;
                case 'bottom':
                    break;
                case 'right':
                    break;
                case 'left':
                    break;
            }
        };

        top.addEventListener('mousedown', onMouseDown);
        bottom.addEventListener('mousedown', onMouseDown);
        right.addEventListener('mousedown', onMouseDown);
        left.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mousemove', onResizeDrag);
        document.addEventListener('mouseleave', onMouseUp);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('blur', onMouseUp);

        const cleanUp = () => {
            top.removeEventListener('mousedown', onMouseDown);
            bottom.removeEventListener('mousedown', onMouseDown);
            right.removeEventListener('mousedown', onMouseDown);
            left.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mousemove', onResizeDrag);
            document.removeEventListener('mouseleave', onMouseUp);
            document.removeEventListener('blur', onMouseUp);
            document.removeEventListener('mouseup', onMouseUp);
        };

        return cleanUp;
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

            <div ref={rightDragRef} className={styles.rightDrag}></div>
            <div ref={leftDragRef} className={styles.leftDrag}></div>
            <div ref={topDragRef} className={styles.topDrag}></div>
            <div ref={bottomDragRef} className={styles.bottomDrag}></div>

            <TopBar innerRef={taskbarRef} />

            <div className={styles.appContainer}>{props.children}</div>
        </div>
    );
}

export default Window;
