import { useState } from "react";
import { SignUpUserDetails, SignUpUserResponse } from "../types/auth.types";
import { environment } from "../config";

export const useSignup = () => {
    const [error, setError] = useState<string | string[] | null>(null);

    const signup = async (userDetails: SignUpUserDetails) => {
        try {
            const res = await fetch(`${environment.BaseUrl}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userDetails),
            });

            if (res.status !== 0) {
                const data = await res.json();
                if (data.user) {
                    return data as SignUpUserResponse;
                } else {
                    const errorMessages: string[] = [];
                    for (let err in data.errors) {
                        const messages = data.errors[err];
                        errorMessages.push(`${err} ${messages}`);
                    }
                    throw errorMessages;
                }
            } else {
                throw new Error(
                    "Couldn't connect, check your network and try again",
                );
            }
        } catch (e: any) {
            setError(e instanceof Error ? e.message : e);
            throw e;
        }
    };

    return { signup, error };
};
