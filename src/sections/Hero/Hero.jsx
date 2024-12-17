import styles from './HeroStyles.module.css';
import heroImg from '../../assets/art-asir.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import tryhackme from '../../assets/tryhackme.png';
import tryhackmeDark from '../../assets/THM-1a.png';
import twitterLight from '../../assets/fb-light.png';
import twitterDark from '../../assets/fb-dark.jpg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/ASIR AHBAB_CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const tryIcon = theme === 'light' ? tryhackme:tryhackmeDark;
  const facebookIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Asir Ahbab Raiyan"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Asir Ahbab Raiyan
        </h1>
        <h2>Network Administrator</h2>
        <span>
          <a href="https://tryhackme.com/r/p/ahbab.raiyan">
            <img src={tryIcon} alt="Tryhackme account" />
          </a>
          <a href="https://www.facebook.com/asirahbab.raiyan" target="_blank">
            <img src={facebookIcon} alt="Facebook icon" />
          </a>
          <a href="https://github.com/asirahbab01/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/asir-ahbab-raiyan-188045259/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <br />
        <p className={styles.description} >
          I am a passionate learner in Computer Networking & Operating System. I am eager to solve tough & competitive CTF (Capture The Flag) challenges and also love to work in different team projects.
        </p>
        <br />
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
