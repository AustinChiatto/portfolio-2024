import { relative } from 'path';
import React, { useEffect, useState } from 'react';

const TextWithScrollFade = ({ text }: { text: string }) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = (): void => {
      // calculate how far the page has been scrolled
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScrollDepth = window.scrollY;
      // translate current scroll into a percentage of total scroll
      const scrollDepthPercentage = (currentScrollDepth / totalScrollHeight) * 100;
      setScrollPercentage(scrollDepthPercentage);
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
    const percentPerWord = 100 / (totalWords - 10);
    return scrollPercentage >= percentPerWord * (wordIndex - 10) ? 1 : 0.25;
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
            {words.map((word, wIndex) => {
              const globalWordIndex = paragraphWordStartIndex + wIndex;
              const opacity = calculateOpacity(globalWordIndex + 1);
              const top = opacity === 1 ? '0' : '0.125rem';
              return (
                <span
                  key={`word-${pIndex}-${wIndex}`}
                  style={{
                    opacity,
                    top,
                    transition: 'opacity 0.5s ease, top 0.25s linear',
                    position: 'relative'
                  }}
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
