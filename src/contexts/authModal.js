import { createContext, useContext, useState } from "react";

const AuthModalContext = createContext();

export default function AuthModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(2);

  return (
    <>
      <AuthModalContext.Provider value={{ isOpen, setIsOpen, step, setStep }}>
        {children}
      </AuthModalContext.Provider>
    </>
  );
}

const openModalHandler = () => {
  const { isOpen, setIsOpen } = useContext(AuthModalContext);
  return [isOpen, setIsOpen];
};

const stepModalHandler = () => {
  const { step, setStep } = useContext(AuthModalContext);
  return [step, setStep];
};

export { openModalHandler, stepModalHandler };
