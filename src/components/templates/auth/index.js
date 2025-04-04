import { useState } from "react";
import { useEffect } from "react";

import ModalContainer from "@/components/container/ModalContainer";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useOpenModalHandler, useStepModalHandler } from "@/contexts/authModal";
import { useRouter } from "next/router";

function ModalManagement() {
  const router = useRouter();

  const [step, setStep] = useStepModalHandler();
  const [isOpen, setIsOpen] = useOpenModalHandler();
  const [number, setNumber] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const newQuery = {
        ...router.query,
        modal: step === 1 ? "login" : "verify",
      };
      router.push({ pathname: router.pathname, query: newQuery }, undefined, {
        shallow: true,
      });
    }
  }, [isOpen, step]);

  return (
    <>
      {step === 1 && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen} setStep={setStep}>
          <SendOTPForm
            setIsOpen={setIsOpen}
            number={number}
            setNumber={setNumber}
            setStep={setStep}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen} setStep={setStep}>
          <CheckOTPForm
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setStep={setStep}
            number={number}
          />
        </ModalContainer>
      )}
    </>
  );
}

export default ModalManagement;
