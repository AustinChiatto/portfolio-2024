import styles from './modal.module.css';

type modalProps = {
  isOpen: boolean;
};

const Modal = ({ isOpen }: modalProps) => {
  return (
    <div className={`${styles.modalWrapper} ${isOpen && styles.isOpen}`}>
      <section className={`${styles.modal} ${isOpen && styles.isOpen}`}></section>
    </div>
  );
};

export default Modal;
