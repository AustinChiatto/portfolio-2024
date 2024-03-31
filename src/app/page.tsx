'use client';
import GlobalNav from '@/components/GlobalNav/GlobalNav';
import styles from './page.module.css';
import Modal from '@/components/Modal/Modal';
import { useEffect, useState } from 'react';
import TextScrollFade from '@/components/TextScrollFade/TextScrollFade';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    console.log('click');
    setIsOpen(!isOpen);
  };

  // todo: highlight words on scroll
  // split text into array of words
  // get total value of scroll from 0 to 100
  // divide 100 by total number of words in the array
  // each time that value is scrolled, highlight the next word in the array

  const paragraphs = `I design and develop full-stack products for the web, utilizing the JavaScript ecosystem to create efficient and intuitive ways to interact with data in a browser.
    I am driven by curiosity, enjoy solving problems, and love engaging with projects that teach me something new.
    I'm currently working on implementing new features for Apogee and developing a small repo of flexible UI.
    I live on the rainy west coast of Canada, where you can find me immersed in a project, tinkering with retro games, or hanging out with my cat, Max.
    I would love to start a conversation.`;

  return (
    <>
      <GlobalNav
        handleToggleModal={handleToggleModal}
        isOpen={isOpen}
      />
      <main className={styles.main}>
        <h1 className="visuallyHidden">Austin Chiatto - Full Stack developer based in Vancouver</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.largeSpacing}>
            <h3>Nice to meet you. I&apos;m austin.</h3>
          </div>
          <section className={styles.storytelling}>
            <TextScrollFade text={paragraphs} />
            <a
              href="#"
              className="font-size-xl"
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
