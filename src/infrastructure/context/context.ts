import { createContext } from "react";
import { Robot } from "../../features/robots/models/robot";

const initialContext: {
    robot: Array<Robot>;
    handlerEraser: (deletedID: number) => void;
} = {
    robot: [],
    handlerEraser: () => undefined,
};

export const RobotContext = createContext(initialContext);
