import { useState } from "react";
import { EditArticleDetails, NewArticleResponse } from "../types/editor.types";
import { environment } from "../config";
import { LocalStorageService } from "../utils/localStorage.service";

export const usePostArticle = () => {
    const [error, setError] = useState<string | string[] | null>(null);

    const post = async (article: EditArticleDetails) => {
        try {
            const res = await fetch(`${environment.BaseUrl}/articles`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${LocalStorageService.getAccessToken()}`,
                },
                body: JSON.stringify(article),
            });

            if (res.status !== 0) {
                const data = await res.json();
                if (data.article) {
                    return data as NewArticleResponse;
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
