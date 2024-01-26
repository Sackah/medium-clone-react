import React from 'react';

export type AuthProps = {
    children: React.FC | React.ReactNode;
}

export interface User{
    email: string;
    token: string;
    username: string;
    bio: string | null;
    image: string | null;
}

/**
 *  Login
 */
export interface LoginUserDetails{
    user: {
        email: string;
        password: string;
    }
}

export interface LoginUserResponse{
    user: User;
}

export interface BackendErrors{
    [key: string]: string[];
}

/**
 *  Sign up
 */
