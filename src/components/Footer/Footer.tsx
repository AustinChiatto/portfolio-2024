import styles from './footer.module.css';
const Footer = ({ className }: { className: string }) => {
  return (
    <footer className={`${className} ${styles.footer}`}>
      <p>Austin Chiatto</p>
      <p>&copy; 2024</p>
    </footer>
  );
};

export default Footer;
