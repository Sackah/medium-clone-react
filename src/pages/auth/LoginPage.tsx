import React from 'react';
import './LoginPage.scss';
import LoginNavComonent from './components/LoginNav/LoginNav';
import LoginFormComponent from './components/LoginForm/LoginForm';
const LoginPageComponent = () => {
    return(
        <div className={'login page'}>
            <LoginNavComonent/>
            <main>
                <LoginFormComponent/>
            </main>
        </div>
    );
}

export default LoginPageComponent;
