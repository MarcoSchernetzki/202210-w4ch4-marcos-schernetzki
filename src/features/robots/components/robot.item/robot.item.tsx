import { Robot } from "../../models/robot";
import styles from "./robot.item.module.css";

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
            <img src={item.img} alt={item.name} />
            <div>
                <span>
                    <h2>Nombre: {item.name}</h2>
                </span>
                <span>Velocidad: {item.speed}</span>
                <span>Resistencia: {item.endurance}</span>
                <span>Fecha de nacimiento: {item.date}</span>
                <span className="button">🗑️</span>
            </div>
        </li>
    );
}
