'use client';
import Toolbar from '@/components/Toolbar/Toolbar';
import styles from './page.module.css';
import Modal from '@/components/Modal/Modal';
import { ReactHTMLElement, useState } from 'react';
import TextScrollFade from '@/components/TextScrollFade/TextScrollFade';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  // todo: specify type
  const handleLinkMouseMove = (e: any) => {
    const link = e.currentTarget;
    const rect = link.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;

    const pseudoElement = window.getComputedStyle(link, '::after');
    const width = parseFloat(pseudoElement.width);
    let newLeft = offsetX - width / 2;
    newLeft = Math.max(0, newLeft); // Ensure newLeft is not less than 0
    newLeft = Math.min(rect.width - width, newLeft); // Ensure newLeft does not exceed the container width

    link.style.setProperty('--pseudo-left', `${newLeft}px`);
  };

  const paragraphs = `utilizing the JavaScript ecosystem to create efficient and intuitive ways to interact with data in a browser.
    I am driven by curiosity, enjoy solving problems, and love engaging with projects that teach me something new.
    I'm currently a junior front-end developer at Forge and Smith, and I've been implementing new features to my spaceflight tracker, Apogee, in my spare time.
    I live on the rainy west coast of Canada, where you can find me immersed in a project, tinkering with retro games, or hanging out with my cat, Max.
    I would love to start a conversation.`;

  const email = `hey@austinchiatto.com`;

  return (
    <>
      <Toolbar
        handleToggleModal={handleToggleModal}
        isOpen={isOpen}
      />
      <main className={styles.main}>
        <h1 className="visuallyHidden">Austin Chiatto - Full Stack developer based in Vancouver</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.largeSpacing}>
            <h3>Nice to meet you. I&apos;m Austin.</h3>
          </div>
          <section className={styles.storytelling}>
            <TextScrollFade
              text={paragraphs}
              prependIgnore={'I design and develop full-stack products for the web, '}
            />
            <a
              href="mailto:hey@austinchiatto.com"
              className={`font-size-xl ${styles.linkLarge}`}
              target="_blank"
            >
              <TextScrollFade
                text={email}
                className={`${styles.link}`}
                onMouseMove={handleLinkMouseMove}
              />
            </a>
          </section>
        </div>
        <Modal isOpen={isOpen} />
      </main>
    </>
  );
}
