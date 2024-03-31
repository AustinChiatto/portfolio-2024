import { ReactEventHandler } from 'react';
import styles from './toolbar.module.css';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { contactData } from '@/data/contact-data';

type ToolbarProps = {
  isOpen: boolean;
  handleToggleModal: ReactEventHandler;
};

const Toolbar = ({ isOpen, handleToggleModal }: ToolbarProps) => {
  const { toggleTheme, theme } = useTheme();
  return (
    <nav className={styles.toolbarWrapper}>
      <div className={styles.toolbarModal}>
        <h3>Contact</h3>
        <ul className={styles.contactList}>
          {contactData.map((e, i) => {
            return (
              <li
                key={i}
                className={styles.contactItem}
              >
                <a
                  href={e.contactHref}
                  className={styles.contactLink}
                >
                  {e.contactLabel}
                  <Image
                    src={e.contactIconSrc}
                    alt={e.contactIconAlt}
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.toolbar}>
        <button
          role="button"
          onClick={handleToggleModal}
          className={styles.toolbarModalBtn}
        >
          {isOpen ? 'Close' : 'Work'}
        </button>
        <div className={styles.dividerVertical}></div>
        <ul className={styles.toolbarActions}>
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
                src={'/icons/icon-at-symbol.svg'}
                alt="icon of an '@' symbol."
                width={16}
                height={16}
                className={theme === 'dark' ? 'icon-dark' : 'icon-light'}
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Toolbar;
