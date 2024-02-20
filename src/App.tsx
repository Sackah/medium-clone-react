import { Route, Routes } from "react-router-dom";
import LoginPageComponent from "./pages/Login/LoginPage";
import HomePageComponent from "./pages/Home/HomePage";
import SignupPageComponent from "./pages/SignUp/SignupPage";
import AuthGuard from "./guards/AuthGuard";
import LoginGuard from "./guards/LoginGuard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={"/"}
          element={
            <AuthGuard>
              <HomePageComponent />
            </AuthGuard>
          }
        />
        <Route
          path={"/login"}
          element={
            <LoginGuard>
              <LoginPageComponent />
            </LoginGuard>
          }
        />
        <Route path={"/register"} element={<SignupPageComponent />} />
      </Routes>
    </div>
  );
}

export default App;
