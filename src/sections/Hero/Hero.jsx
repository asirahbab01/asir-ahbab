import styles from './HeroStyles.module.css';
import heroImg from '../../assets/raiyan-portfolio-art.png';
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
import gmailDark from '../../assets/gmail-dark.png';
import gmailLight from '../../assets/gmail-light.png';
import CV from '../../assets/Asir_Ahbab_Raiyan_CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const tryIcon = theme === 'light' ? tryhackme:tryhackmeDark;
  const facebookIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const gmailIcon = theme === 'light' ? gmailLight : gmailDark;

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
        <h3>Penetration Tester</h3>
        <span>
          <a href="https://tryhackme.com/r/p/ahbab.raiyan">
            <img src={tryIcon} alt="Tryhackme account" className={styles.icon} />
          </a>
          <a href="https://www.facebook.com/asirahbab.raiyan" target="_blank">
            <img src={facebookIcon} alt="Facebook icon" className={styles.icon} />
          </a>
          <a href="https://github.com/asirahbab01/" target="_blank">
            <img src={githubIcon} alt="Github icon" className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/asir-ahbab-raiyan-188045259/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" className={styles.icon} />
          </a>
          <a href="mailto:ahbab.raiyan@gmail.com" target="_blank">
            <img src={gmailIcon} alt="Send Email" className={styles.icon} />
          </a>
        </span>
        <br />
        <p className={styles.description} >
         Cybersecurity enthusiast focused on Red Team operations, with strong foundations in Computer Networking and Operating Systems. I thrive on tackling challenging CTF (Capture The Flag) problems and enjoy collaborating on dynamic, team-driven projects.
        </p>
        <br />
        <a href={CV} download>
          <button className={styles.button}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
