import { Route, Routes } from "react-router-dom";
import LoginPageComponent from "./pages/Login/LoginPage";
import HomePageComponent from "./pages/Home/HomePage";
import SignupPageComponent from "./pages/SignUp/SignupPage";
import EditorPageComponent from "./pages/Editor/EditorPage";
import SettingsPageComponent from "./pages/Settings/SettingsPage";
import AuthGuard from "./guards/AuthGuard";
import LoginGuard from "./guards/LoginGuard";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<HomePageComponent />} />
                <Route
                    path={"/login"}
                    element={
                        <LoginGuard>
                            <LoginPageComponent />
                        </LoginGuard>
                    }
                />
                <Route path={"/register"} element={<SignupPageComponent />} />
                <Route
                    path={"/editor"}
                    element={
                        <AuthGuard>
                            <EditorPageComponent />
                        </AuthGuard>
                    }
                />
                <Route
                    path={"/settings"}
                    element={
                        <AuthGuard>
                            <SettingsPageComponent />
                        </AuthGuard>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
