import { useState } from "react";
import {
    UpdateUserDetails,
    UpdateUserResponse,
} from "../types/update-user.types";
import { environment } from "../config";
import { LocalStorageService } from "../utils/localStorage.service";

export const useUpdateUser = () => {
    const [error, setError] = useState<string | string[] | null>(null);

    const post = async (user: UpdateUserDetails) => {
        try {
            const res = await fetch(`${environment.BaseUrl}/user`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${LocalStorageService.getAccessToken()}`,
                },
                body: JSON.stringify(user),
            });

            if (res.status !== 0) {
                const data = await res.json();
                if (data.user) {
                    return data as UpdateUserResponse;
                } else {
                    const errorMessages: string[] = [];
                    for (let err in data.errors) {
                        const messages = data.errors[err];
                        errorMessages.push(`${err} ${messages}`);
                    }
                    throw errorMessages;
                }
            }
        } catch (error: any) {
            setError(error instanceof Error ? error.message : error);
            throw error;
        }
    };

    return { post, error };
};
