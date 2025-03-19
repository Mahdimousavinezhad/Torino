import styles from "@/styles/ModalContainer.module.css";
import { useRouter } from "next/router";

function ModalContainer({ children, isOpen, setIsOpen, setStep }) {
  const router = useRouter();

  const closeBackground = () => {
    // router.push("/");
    delete router.query.modal;
    setStep(1);
    setIsOpen(false);
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
