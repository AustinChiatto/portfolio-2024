'use client';
import styles from './home-content.module.css';
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';
import TextScrollFade from '@/components/TextScrollFade/TextScrollFade';
import LandingCTA from '@/components/LandingCTA/LandingCTA';
import NavToolbar from '@/components/toolbars/NavToolbar/NavToolbar';
import { CommitDataProps } from '@/data/project-data';

const HomeContent = ({ commitData }: { commitData: Array<CommitDataProps> }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const paragraphs = `utilizing the JavaScript ecosystem to create efficient and intuitive ways to interact with data in a browser.
    I am driven by curiosity, enjoy solving problems, and love engaging with projects that teach me something new.
    I currently work at Forge and Smith as a Jr Front-End Developer, and in my spare time I've been implementing new features in Apogee, a spaceflight tracker.
    I live on the rainy west coast of Canada, where you can find me immersed in a project, tinkering with retro games, or hanging out with my cat, Max.
    I would love to start a conversation.`;

  return (
    <>
      <NavToolbar
        handleToggleModal={handleToggleModal}
        isOpen={isOpen}
      />
      <main className={styles.landing}>
        <h1 className="visuallyHidden">Austin Chiatto - Full Stack developer based in Vancouver</h1>
        <div className={styles.landingContentWrapper}>
          <div className={styles.landingBanner}>
            <h3>Nice to meet you. I&apos;m Austin.</h3>
          </div>
          <section className={styles.landingContent}>
            <TextScrollFade
              text={paragraphs}
              prependIgnore={'I design and develop full-stack products for the web, '}
            />
            <LandingCTA />
          </section>
        </div>
        <Modal
          isOpen={isOpen}
          commitData={commitData}
        />
      </main>
    </>
  );
};

export default HomeContent;
