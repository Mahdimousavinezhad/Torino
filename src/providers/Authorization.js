import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useProfile } from "@/hooks/queries";
import { useOpenModalHandler, useStepModalHandler } from "@/contexts/authModal";

function Authorization() {
  const router = useRouter();
  const { data: userData, isLoading, isError } = useProfile();
  const [isOpen, setIsOpen] = useOpenModalHandler();
  const [step, setStep] = useStepModalHandler();
  const [isOnline, setIsOnline] = useState(true);

  const closeHandler = () => {
    setStep(1);
    setIsOpen(false);

    const newQuery = { ...router.query };
    delete newQuery.modal;

    router.push({ pathname: router.pathname, query: newQuery }, undefined, {
      shallow: true,
    });
  };

  useEffect(() => {
    const status = navigator.onLine;
    setIsOnline(status);

    if (!isOnline) {
      router.push("/networkConnection");
    } else if (router.pathname === "/networkConnection" && isOnline) {
      router.push("/");
    }
  }, [isOnline, router.pathname]);

  useEffect(() => {
    if (isLoading) return;

    const modalQuery = router.query?.modal;

    if (router.pathname === "/dashboard" && isError && !isLoading) {
      router.push("/");
    } else if (modalQuery === "login" && userData) {
      closeHandler();
    } else if (modalQuery === "verify" && userData) {
      closeHandler();
    } else if (modalQuery === "login" && !userData) {
      setIsOpen(true);
      setStep(1);
    } else if (modalQuery === "verify" && !userData) {
      setIsOpen(true);
      setStep(2);
    }
  }, [router.pathname, router.query, isLoading]);

  return <></>;
}

export default Authorization;
