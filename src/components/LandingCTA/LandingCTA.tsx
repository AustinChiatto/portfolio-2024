import styles from './landing-cta.module.css';
import TextWithScrollFade from '../TextScrollFade/TextScrollFade';

const LandingCTA = () => {
  // todo: specify type
  const handleBorderSparkle = (e: any) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;

    const borderSparkle = window.getComputedStyle(element, '::after');
    const width = parseFloat(borderSparkle.width);
    let borderSparkleLeft = offsetX - width / 2;
    borderSparkleLeft = Math.max(0 - width / 2, borderSparkleLeft); // Ensure borderSparkleLeft is not less than 0
    borderSparkleLeft = Math.min(rect.width - width / 2, borderSparkleLeft); // Ensure borderSparkleLeft does not exceed the container width

    element.style.setProperty('--borderSparkle-left', `${borderSparkleLeft}px`);
  };

  return (
    <a
      href="mailto:hey@austinchiatto.com"
      className={`font-size-xl ${styles.landingCTA}`}
      target="_blank"
    >
      <TextWithScrollFade
        text={'hey@austinchiatto.com'}
        className={`${styles.cta}`}
        onMouseMove={handleBorderSparkle}
      />
    </a>
  );
};

export default LandingCTA;
