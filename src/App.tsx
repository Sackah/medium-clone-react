import React from 'react';
import {Route, Routes} from 'react-router-dom';
import LoginPageComponent from './pages/auth/LoginPage';
import HomePageComponent from './pages/home/HomePage';
import AuthGuard from './guards/AuthGuard';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route
            path={'/'}
            element={
              <AuthGuard>
                <HomePageComponent/>
              </AuthGuard>}
          />
        <Route path={'/login'} element={<LoginPageComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
