import { useRouter } from "next/router";

import styles from "@/styles/ModalContainer.module.css";

function ModalContainer({ children, isOpen, setIsOpen, setStep }) {
  const router = useRouter();

  const closeBackground = () => {
    setStep(1);
    setIsOpen(false);

    const newQuery = { ...router.query };
    delete newQuery.modal;

    router.push({ pathname: router.pathname, query: newQuery }, undefined, {
      shallow: true,
    });
  };

  if (!isOpen) return;

  return (
    <div className={styles.container} onClick={closeBackground}>
      <div className={styles.subContainer}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalContainer;
