import { useEffect, useState } from "react";
import { BackendErrors } from "../../../types/auth.types";
import "./BackendErrorComponent.css";

type BackendErrorProps = {
  errors: BackendErrors;
};

const BackendErrorComponent = ({ errors }: BackendErrorProps) => {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  useEffect(() => {
    for (let err in errors) {
      const messages = errors[err];
      setErrorMessages((prev) => [...prev, `${err} ${messages}`]);
    }
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
