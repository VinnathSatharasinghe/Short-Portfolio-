import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/111111-removebg-preview.png';
import freshBurger from '../../assets/gdgdrgdgdrg.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/VinnathSatharasinghe/MERN_CRUD"
          h3="MERN-TODO"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/VinnathSatharasinghe/Biz-Creative-Web"
          h3="Fresh Burger"
          p="Biz-Creative-Web "
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
