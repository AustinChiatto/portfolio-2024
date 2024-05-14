'use client';
import Toolbar from '@/components/Toolbar/Toolbar';
import styles from './page.module.css';
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';
import TextScrollFade from '@/components/TextScrollFade/TextScrollFade';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const paragraphs = `I design and develop full-stack products for the web, utilizing the JavaScript ecosystem to create efficient and intuitive ways to interact with data in a browser.
    I am driven by curiosity, enjoy solving problems, and love engaging with projects that teach me something new.
    I'm currently working on implementing new features for my spaceflight tracker, Apogee, and developing a small repo of flexible UI.
    I live on the rainy west coast of Canada, where you can find me immersed in a project, tinkering with retro games, or hanging out with my cat, Max.
    I would love to start a conversation.`;

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
            <TextScrollFade text={paragraphs} />
            <a
              href="mailto:hey@austinchiatto.com"
              className="font-size-xl"
              target="_blank"
            >
              hey@austinchiatto.com
            </a>
          </section>
        </div>
        <Modal isOpen={isOpen} />
      </main>
    </>
  );
}
