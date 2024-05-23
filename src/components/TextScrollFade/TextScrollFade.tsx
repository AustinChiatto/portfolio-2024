import React, { ReactEventHandler, useEffect, useState } from 'react';

const TextWithScrollFade = ({
  text,
  prependIgnore,
  className,
  onMouseMove
}: {
  text: string;
  prependIgnore?: string;
  className?: string;
  onMouseMove?: ReactEventHandler;
}) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = (): void => {
      // calculate how far the page has been scrolled
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScrollDepth = window.scrollY;
      // translate current scroll into a percentage of total scroll
      const scrollDepthPercentage = (currentScrollDepth / totalScrollHeight) * 100;
      const maxDepth = Math.min((scrollDepthPercentage / 95) * 100, 100);
      setScrollPercentage(maxDepth);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // split the text by new lines to separate paragraphs
  const paragraphs = text.split('\n');

  // flatten paragraphs to a single list of words for linear indexing
  const allWords = paragraphs.join(' ').split(' ');

  // define opacity calculation function
  const calculateOpacity = (wordIndex: number): number => {
    const totalWords = allWords.length;
    const percentPerWord = 100 / totalWords;
    return scrollPercentage >= percentPerWord * wordIndex ? 1 : 0.25;
  };

  return (
    <>
      {paragraphs.map((paragraph, pIndex) => {
        // split paragraph into words to handle individual opacity
        const words = paragraph.split(' ');
        const paragraphWordStartIndex = paragraphs.slice(0, pIndex).join(' ').split(' ').length;

        return (
          <p
            key={`paragraph-${pIndex}`}
            className={`font-size-xl`}
          >
            {pIndex == 0 && prependIgnore && <span>{prependIgnore}</span>}
            {words.map((word, wIndex) => {
              const globalWordIndex = paragraphWordStartIndex + wIndex;
              const opacity = calculateOpacity(globalWordIndex);
              const top = opacity === 1 ? '0' : '0.125rem';
              return (
                <span
                  key={`word-${pIndex}-${wIndex}`}
                  style={{
                    opacity,
                    top,
                    transition: 'opacity 0.5s ease, top 0.25s cubic-bezier(0,.71,.56,.99)',
                    position: 'relative',
                    textWrap: 'pretty'
                  }}
                  className={className}
                  onMouseMove={onMouseMove}
                >
                  {word}{' '}
                </span>
              );
            })}
          </p>
        );
      })}
    </>
  );
};

export default TextWithScrollFade;
