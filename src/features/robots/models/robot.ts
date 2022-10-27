export interface IRobot {
    name: string;
    img: string;
    speed: number;
    endurance: number;
    date: string;
}

export class Robot {
    id: number;

    static crearId() {
        return Math.round(Math.random() * 1_000_000);
    }
    constructor(
        public name: string,
        public img: string,
        public speed: number,
        public endurance: number,
        public date: string
    ) {
        this.id = Robot.crearId();
    }
}
