import { ReactEventHandler, useEffect, useState } from 'react';
import styles from './toolbar.module.css';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { contactData } from '@/data/contact-data';

type ToolbarProps = {
  isOpen: boolean;
  handleToggleModal: ReactEventHandler;
};

const Toolbar = ({ isOpen, handleToggleModal }: ToolbarProps) => {
  const [isActionOpen, setIsActionOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();

  let mouseOutTimeoutId: ReturnType<typeof setTimeout> | null = null;

  const handleMouseOver = () => {
    if (mouseOutTimeoutId) {
      clearTimeout(mouseOutTimeoutId);
      mouseOutTimeoutId = null;
    }
    setIsActionOpen(true);
  };

  const handleMouseOut = () => {
    mouseOutTimeoutId = setTimeout(() => {
      setIsActionOpen(false);
    }, 300);
  };

  const handleToolbarClick = () => {
    setIsActionOpen(!isActionOpen);
  };

  useEffect(() => {
    return () => {
      if (mouseOutTimeoutId) {
        clearTimeout(mouseOutTimeoutId);
      }
    };
  }, [mouseOutTimeoutId]);

  return (
    <nav className={styles.toolbarWrapper}>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className={`${styles.toolbarModal} ${isActionOpen && styles.isActionOpen}`}
      >
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
                  target="_blank"
                >
                  {e.contactLabel}
                  <Image
                    src={e.contactIconSrc}
                    alt={e.contactIconAlt}
                    width={20}
                    height={20}
                    className={theme === 'dark' ? 'icon-dark' : 'icon-light'}
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
          className={styles.toolbarText}
        >
          {isOpen ? 'Close' : 'Work'}
        </button>
        <div className={styles.dividerVertical} />
        <ul className={styles.toolbarActionList}>
          <li>
            <button
              role="button"
              className={styles.toolbarAction}
              onClick={toggleTheme}
            >
              <div className={styles.themeSwitcher}></div>
            </button>
          </li>
          <li>
            <button
              role="button"
              onMouseOver={handleMouseOver}
              onClick={handleToolbarClick}
              onMouseOut={handleMouseOut}
              className={styles.toolbarAction}
            >
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
