import { Route, Routes } from "react-router-dom";
import LoginPageComponent from "./pages/auth/pages/Login/LoginPage";
import HomePageComponent from "./pages/home/HomePage";
import SignupPageComponent from "./pages/auth/pages/SignUp/SignupPage";
import AuthGuard from "./guards/AuthGuard";

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
        <Route path={"/login"} element={<LoginPageComponent />} />
        <Route path={"/register"} element={<SignupPageComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
