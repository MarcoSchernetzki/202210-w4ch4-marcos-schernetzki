import { RobotContextProvider } from "../../context/provider";
import { Layout } from "../layout/layout";

export function App() {
    return (
        <div className="App">
            <Layout>
                <RobotContextProvider>
                    <p>Estamos trabajando para mejorar la experiencia</p>
                </RobotContextProvider>
            </Layout>
        </div>
    );
}

export default App;
