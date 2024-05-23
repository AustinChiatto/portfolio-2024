import { ReactEventHandler, useEffect, useState } from 'react';
import styles from './nav-toolbar.module.css';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { contactData } from '@/data/contact-data';

type NavToolbarProps = {
  isOpen: boolean;
  handleToggleModal: ReactEventHandler;
};

const NavToolbar = ({ isOpen, handleToggleModal }: NavToolbarProps) => {
  const [isActionOpen, setIsActionOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();
  const [contactHeader, setContactHeader] = useState(['Contact Me']);

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
    }, 100);
  };

  const handleNavToolbarClick = () => {
    setIsActionOpen(!isActionOpen);
  };

  useEffect(() => {
    return () => {
      if (mouseOutTimeoutId) {
        clearTimeout(mouseOutTimeoutId);
      }
    };
  }, [mouseOutTimeoutId]);

  const handleContactHeader = (e: Array<string>) => {
    setContactHeader(e);
  };

  const ContactHoverCard = (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={`${styles.toolbarModal} ${isActionOpen && styles.isActionOpen}`}
    >
      <div className={styles.hoverCardHeader}>
        <h3 className={contactHeader[1] ? styles.contactHeading : styles.contactSubheading}>
          {contactHeader[0]}
        </h3>
        {contactHeader[1] && <h4 className={styles.contactSubheading}>{contactHeader[1]}</h4>}
      </div>
      <ul className={styles.contactList}>
        {contactData.map((e, i) => {
          return (
            <li
              key={i}
              className={styles.contactItem}
              onMouseOver={() => handleContactHeader(e.contactTags)}
              onMouseOut={() => handleContactHeader(['Contact Me'])}
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
                  width={18}
                  height={18}
                  className={theme === 'dark' ? 'icon-dark' : 'icon-light'}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <nav className={styles.toolbarWrapper}>
      {ContactHoverCard}
      <div className={styles.toolbar}>
        <button
          role="button"
          onMouseDown={handleToggleModal}
          className={styles.toolbarText}
        >
          {isOpen ? 'Close' : 'Work'}
        </button>
        <div className={styles.dividerVertical} />
        <ul className={styles.toolbarActionList}>
          <li>
            <button
              role="button"
              onMouseOver={handleMouseOver}
              onMouseDown={handleNavToolbarClick}
              onMouseOut={handleMouseOut}
              className={styles.toolbarAction}
            >
              <Image
                src={'/icons/icon-email.svg'}
                alt="icon of an letter."
                width={20}
                height={18}
                className={theme === 'dark' ? 'icon-dark' : 'icon-light'}
                style={{ paddingBottom: '2px' }}
              />
            </button>
          </li>
          <li>
            <button
              role="button"
              className={styles.toolbarAction}
              onMouseDown={toggleTheme}
            >
              <div className={styles.themeSwitcher}></div>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavToolbar;
