import { render, screen } from "@testing-library/react";
import { Layout } from "../../../../infrastructure/components/layout/layout";
import { RobotItem } from "./robot.item";

describe("Given RobotItem component", () => {
    describe("When we render the component", () => {
        test("Then it should display the title", () => {
            render(
                <Layout>
                    <RobotItem />
                </Layout>
            );
            const element = screen.getByText(/pepe/i);
            expect(element).toBeInTheDocument();
        });
    });
});
