import { useEffect, useState } from "react";
import { BackendErrors } from "../../../types/auth.types";
import "./BackendErrorComponent.scss";

type BackendErrorProps = {
  errors: BackendErrors;
};

const BackendErrorComponent = ({ errors }: BackendErrorProps) => {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  useEffect(() => {
    const newErrorMessages: string[] = [];
    for (const err in errors) {
      const messages = errors[err];
      newErrorMessages.push(`${err} ${messages}`);
    }
    setErrorMessages(newErrorMessages);
  }, [errors]);

  return (
    <ul className="error-messages">
      {errorMessages.map((message, i) => (
        <li key={i}>{message}</li>
      ))}
    </ul>
  );
};

export default BackendErrorComponent;
