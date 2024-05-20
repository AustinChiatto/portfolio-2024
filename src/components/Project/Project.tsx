import Image from 'next/image';
import styles from './project.module.css';
import { projectProps } from '@/data/project-data';
import Chip from '../Chip/Chip';
import { useTheme } from '@/context/ThemeContext';

const lerp = (currentValue: number, targetValue: number, weight: number) =>
  (1 - weight) * currentValue + weight * targetValue;

const Project = ({
  projectName,
  projectDesc,
  projectStack,
  projectUrl,
  projectRepoUrl,
  projectImageData,
  projectCommit
}: projectProps) => {
  const { theme } = useTheme();

  return (
    <li className={styles.project}>
      <div className={styles.projectOverview}>
        <h3>{projectName}</h3>
        <p>{projectDesc}</p>
        <ul className={styles.projectStack}>
          {projectStack.map((e, i) => {
            return (
              <Chip
                key={i}
                label={e}
              />
            );
          })}
        </ul>
      </div>
      <div className={styles.projectContainer}>
        {projectCommit ? (
          <a
            href={projectRepoUrl}
            target="_blank"
            className={styles.repoToolbar}
          >
            <div className={styles.commit}>
              <Image
                src={'/icons/icon-commit.svg'}
                alt="GitHub symbol for a commit."
                width={18}
                height={18}
                className={styles.commitIcon}
              />
              <div className={styles.commitDetails}>
                <span className={styles.commitHash}>{projectCommit?.sha}</span>
                <span className={styles.commitDate}> &middot; {projectCommit?.date}</span>
              </div>
            </div>

            <div className={styles.externalButton}>Repo</div>
          </a>
        ) : (
          <span className={styles.privateRepo}>Private</span>
        )}
        <a href={projectUrl}>
          <div className={styles.projectMedia}>
            <Image
              src={theme === 'dark' ? projectImageData.darkSrc : projectImageData.lightSrc}
              alt={projectImageData.alt}
              sizes="33vw"
              fill
              placeholder="blur"
              blurDataURL={theme === 'dark' ? projectImageData.dark64 : projectImageData.light64}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </a>
      </div>
    </li>
  );
};

export default Project;
