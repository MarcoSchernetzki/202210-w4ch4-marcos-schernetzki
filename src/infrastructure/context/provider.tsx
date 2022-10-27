import { render } from "@testing-library/react";
import { useState } from "react";
import { Robot } from "../../features/robots/models/robot";
import { RobotContext } from "./context";

export function RobotContextProvider({ children }: { children: JSX.Element }) {
    const initialRobots: Array<Robot> = [];
    const [robot, setRobotState] = useState(initialRobots);

    const handlerEraser = (deletedID: number) => {
        setRobotState(robot.filter((item) => item.id !== deletedID));
    };

    const context = {
        robot,
        handlerEraser,
    };
    return (
        <RobotContext.Provider value={context}>
            {children}
        </RobotContext.Provider>
    );
}
