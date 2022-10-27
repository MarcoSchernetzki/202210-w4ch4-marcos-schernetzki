import { ROBOTS } from "../../models/data";
import { Robot } from "../../models/robot";
import { RobotItem } from "../robot.item/robot.item";
import styles from "./robot.list.module.css";

export function RobotList() {
    // const title = "TaskList component";
    // const { robots } = useContext(TodoContext);

    return (
        <section>
            <ul>
                {ROBOTS.map((item: Robot) => (
                    <RobotItem item={item}></RobotItem>
                ))}
            </ul>
        </section>
    );
}
