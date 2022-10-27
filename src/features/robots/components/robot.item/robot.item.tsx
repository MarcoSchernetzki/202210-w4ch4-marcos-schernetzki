import { useContext } from "react";
import { RobotContext } from "../../../../infrastructure/context/context";
import { Robot } from "../../models/robot";
import styles from "./robot.item.module.css";

export function RobotItem({ item }: { item: Robot }) {
    const { handlerEraser, robot } = useContext(RobotContext);

    const handleClick = () => {
        handlerEraser(item.id);
        console.log("Eliminado" + item.id + robot);
    };

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
                <span className={styles.button} onClick={() => handleClick()}>
                    🗑️
                </span>
            </div>
        </li>
    );
}
