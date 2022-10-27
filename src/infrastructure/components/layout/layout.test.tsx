import { render, screen } from "@testing-library/react";

import { RobotList } from "../../../features/robots/components/robot.list/robot.list";
import { Layout } from "./layout";

describe("Given Layout component", () => {
    describe("When we render the component", () => {
        test('Then it should display "Nombre"', () => {
            render(
                <Layout>
                    <RobotList />
                </Layout>
            );
            const element = screen.getByText(/Robots/i);
            expect(element).toBeInTheDocument();
        });
    });
});
