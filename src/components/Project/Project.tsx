import Image from 'next/image';
import styles from './project.module.css';
import { projectProps } from '@/data/project-data';

const Project = ({
  projectName,
  projectDesc,
  projectStack,
  projectRole,
  projectUrl,
  projectRepoUrl,
  projectImageUrl,
  projectImageAlt,
  projectImageBase64
}: projectProps) => {
  return (
    <li className={styles.project}>
      <div className={styles.projectOverview}>
        <h3>{projectName}</h3>
        <p>{projectDesc}</p>
        <ul className={styles.projectStack}>
          {projectStack.map((e, i) => {
            return (
              <li
                key={i}
                className={styles.chip}
              >
                {e}
              </li>
            );
          })}
        </ul>
      </div>
      <a
        href={projectUrl}
        className={styles.projectShowcase}
      >
        <div className={styles.projectMedia}>
          <Image
            src={projectImageUrl}
            alt={projectImageAlt}
            sizes="33vw"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </a>
    </li>
  );
};

export default Project;
