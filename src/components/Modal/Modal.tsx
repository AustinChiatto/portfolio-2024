import Project from '../Project/Project';
import styles from './modal.module.css';
import { CommitDataProps, projects } from '@/data/project-data';

type modalProps = {
  isOpen: boolean;
  commitData: Array<CommitDataProps>;
};

const Modal = ({ isOpen, commitData }: modalProps) => {
  return (
    <div className={`${styles.modalWrapper} ${isOpen && styles.isOpen} ${isOpen && 'hasModal'}`}>
      <section className={`${styles.modal} ${isOpen && styles.isOpen}`}>
        {isOpen && (
          <ul className={styles.projectList}>
            {projects.map((project, i) => {
              const repoId = project.repoIdentifier && project.repoIdentifier;
              const getProjectRepo = (commitData: Array<CommitDataProps>, repoId: string) => {
                return commitData.find((repo) => repo.repo == repoId);
              };
              const projectCommit = repoId ? getProjectRepo(commitData, repoId) : null;
              return (
                <Project
                  key={i}
                  projectName={project.projectName}
                  projectDesc={project.projectDesc}
                  projectStack={project.projectStack}
                  projectRole={project.projectRole}
                  projectUrl={project.projectUrl}
                  projectRepoUrl={project.projectRepoUrl}
                  projectImageUrl={project.projectImageUrl}
                  projectImageAlt={project.projectImageAlt}
                  projectImageBase64={project.projectImageBase64}
                  projectCommit={projectCommit}
                />
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Modal;
