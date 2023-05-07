interface AppProps {
    activeHandler: Function;
    isActive: boolean;
    activeIndex: number;
}

interface WindowProps {
    isActive: boolean;
    activeIndex: number;
    height: number;
    width: number;
    activeHandler: any;
    children: any;
}
