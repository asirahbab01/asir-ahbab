import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/transitpro.jpeg';
import freshBurger from '../../assets/motto.png';
import hipsster from '../../assets/title.png';
import brother from '../../assets/vote.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/asirahbab01/Bus-Management"
          h3="TransitPro"
          p="A bus management system"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/asirahbab01/first_app"
          h3="AgroApp"
          p="Aiming to improve agriculutral system"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/sabbir-063/Arduino-Snake-Game"
          h3="Snake Game"
          p="Classic Snake game built using Arduino"
        />
        <ProjectCard
          src={brother}
          link="https://github.com/asirahbab01/BiometricVotingMachine"
          h3="Biometric Voting Machine"
          p="Smart voting system using fingerprint sensor"
        />
      </div>
    </section>
  );
}

export default Projects;
