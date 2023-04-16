import styles from './StartIcon.module.css';
import { ReactComponent as Globe } from '../../../assets/wireframe-globe.svg';

function StartIcon() {
    return (
        <div>
            <img src={Globe} alt="" />
        </div>
    );
}

export default StartIcon;
