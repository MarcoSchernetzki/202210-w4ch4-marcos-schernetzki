import { Robot } from "../../models/robot";
import styles from "../robot.item.module.css";

export function RobotItem({ item }: { item: Robot }) {
    // const { handlerEraser, handlerComplete } = useContext(TodoContext);

    // const handleClick = () => {
    //     handlerEraser(item.id);
    // };

    // const handleChange = () => {
    //     handlerComplete(item);
    // };

    return (
        <li className={styles.host}>
            <input type="checkbox" />
            <span>{item.id}</span> -<span>{item.name}</span>
            <span className="button">🗑️</span>
        </li>
    );
}
