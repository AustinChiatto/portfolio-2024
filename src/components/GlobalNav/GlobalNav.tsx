import { ReactEventHandler } from 'react';
import styles from './global-nav.module.css';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

type globalNavProps = {
  isOpen: boolean;
  handleToggleModal: ReactEventHandler;
};

const GlobalNav = ({ isOpen, handleToggleModal }: globalNavProps) => {
  const { toggleTheme, theme } = useTheme();
  return (
    <nav className={styles.globalNav}>
      <button
        role="button"
        onClick={handleToggleModal}
      >
        {isOpen ? 'close' : 'work'}
      </button>
      <div className={styles.dividerVertical}></div>
      <ul className={styles.navActions}>
        <li>
          <button role="button">
            <Image
              src={'/icons/icon-arrow-up.svg'}
              alt="icon of an arrow pointing up"
              width={12}
              height={16}
              className={theme === 'dark' ? 'icon-dark' : 'icon-light'}
            />
          </button>
        </li>
        <li>
          <button
            role="button"
            className={styles.themeSwitcher}
            onClick={toggleTheme}
          ></button>
        </li>
        <li>
          <button role="button">
            <Image
              src={'/icons/icon-email.svg'}
              alt="icon of an '@' symbol."
              width={16}
              height={16}
              className={theme === 'dark' ? 'icon-dark' : 'icon-light'}
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default GlobalNav;
