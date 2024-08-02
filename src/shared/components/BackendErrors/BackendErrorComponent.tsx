import { useEffect, useState } from "react";
import { BackendErrors } from "../../../types/auth.types";
import styles from "./BackendErrorComponent.module.scss";

type BackendErrorProps = {
    errors: BackendErrors | string;
};

export default function BackendErrorComponent({ errors }: BackendErrorProps) {
    const [errorMessages, setErrorMessages] = useState<string[] | string>([]);

    useEffect(() => {
        if (typeof errors === "string") {
            setErrorMessages(errors);
        } else {
            const newErrorMessages: string[] = [];
            for (const err in errors) {
                const messages = errors[err];
                newErrorMessages.push(`${err} ${messages}`);
            }
            setErrorMessages(newErrorMessages);
        }
    }, [errors]);

    return (
        <ul className={styles["error-messages"]}>
            {Array.isArray(errorMessages) ? (
                errorMessages.map((message, i) => <li key={i}>{message}</li>)
            ) : (
                <li>{errorMessages}</li>
            )}
        </ul>
    );
}
