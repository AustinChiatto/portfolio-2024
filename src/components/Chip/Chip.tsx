import styles from './chip.module.css';

type ChipProps = {
  key: number;
  label: string;
};

const Chip = ({ key, label }: ChipProps) => {
  return (
    <li
      key={key}
      className={styles.chip}
    >
      {label}
    </li>
  );
};

export default Chip;
