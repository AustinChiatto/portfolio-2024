import Project from '../Project/Project';
import styles from './modal.module.css';
import { projects } from '@/data/project-data';

type modalProps = {
  isOpen: boolean;
};

const Modal = ({ isOpen }: modalProps) => {
  return (
    <div className={`${styles.modalWrapper} ${isOpen && styles.isOpen} ${isOpen && 'hasModal'}`}>
      <section className={`${styles.modal} ${isOpen && styles.isOpen}`}>
        {isOpen && (
          <ul className={styles.projectList}>
            {projects.map((project, i) => {
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
