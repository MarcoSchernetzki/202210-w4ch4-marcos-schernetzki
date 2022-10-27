import { RobotList } from "../../../features/robots/components/robot.list/robot.list";
import { RobotContextProvider } from "../../context/provider";
import { Layout } from "../layout/layout";

export function App() {
    return (
        <div className="App">
            <Layout>
                <RobotContextProvider>
                    <RobotList />
                </RobotContextProvider>
            </Layout>
        </div>
    );
}

export default App;
