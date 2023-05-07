interface AppProps {
    activeHandler: Function;
    isActive: boolean;
    activeIndex: number;
}

interface WindowProps {
    isActive: boolean;
    activeIndex: number;
    height: string;
    width: string;
    activeHandler: any;
    children: any;
}
