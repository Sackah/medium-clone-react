import { useState, useEffect } from "react";
import { environment } from "../config";
import { LocalStorageService } from "../utils/localStorage.service";
import { BackendErrors } from "../types/auth.types";

/**
 * Custom hook to fetch data
 * @typedef {object} UseFetchResult
 * @property {null | T} data - the fetched data
 * @property {boolean} isPending - whether the data is still being fetched
 * @property {null | any} error - any errors that occured during fetch
 * @property {Function} refetch - a setter function to update the initial url, if no url passed, triggers
 * refetch with initial url
 *
 * @param initialUrl a url called with the fetch hook
 * @returns {UseFetchResult}
 */

const useFetch = <T extends {}>(initialUrl: string) => {
    const [data, setData] = useState<null | T>(null);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<null | BackendErrors>(null);
    const [url, setUrl] = useState(initialUrl);

    useEffect(() => {
        const accessToken = LocalStorageService.getAccessToken();
        const abortCont = new AbortController();

        const fetchData = async () => {
            try {
                const res = await fetch(`${environment.BaseUrl}${url}`, {
                    signal: abortCont.signal,
                    headers: {
                        Authorization: `Token ${accessToken}`,
                    },
                });

                if (!res.ok) {
                    const data = await res.json();
                    if (data.errors) {
                        const errorMessages: string[] = [];
                        for (let err in data.errors) {
                            const messages = data.errors[err];
                            errorMessages.push(`${err} ${messages}`);
                        }
                        throw errorMessages;
                    } else {
                        throw Error(
                            "could not fetch the data for that resource",
                        );
                    }
                }

                const data: T = await res.json();
                setIsPending(false);
                setData(data);
                setError(null);
            } catch (err: any) {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    setIsPending(false);
                    setError(err instanceof Error ? err.message : err);
                }
            }
        };

        fetchData();

        return () => {
            abortCont.abort();
        };
    }, [url]);

    const refetch = (newUrl: string = initialUrl) => setUrl(newUrl);

    return { data, isPending, error, refetch };
};

export default useFetch;
