import React from 'react';
import styles from './EducationStyles.module.css'; // Use CSS Modules for scoped styling
import { motion } from 'framer-motion';
import mistLogo from '/src/assets/mist.png';
import rajukLogo from '/src/assets/rajuk.png';
import milestoneLogo from '/src/assets/milestone.png';

const educationData = [
  {
    institution: 'Military Institute of Science & Technology (MIST)',
    logo: mistLogo ,
    degree: 'Bachelor of Science - BSc. in Computer Science and Engineering (CSE)',
    year: '2021 - 2025',
    description: 'Renowned for its rigorous academic curriculum and emphasis on engineering excellence. Specialized in software development, algorithms, and data structures.',
  },
  {
    institution: 'Rajuk Uttara Model College (RUMC)',
    logo: rajukLogo,
    degree: 'Secondary School Certification (SSC) and Higher Secondary Certification (HSC) in Science',
    year: '2013 - 2020',
    description: 'One of the top-ranked institutions in Bangladesh, focusing on science, mathematics and economics with a strong foundation in academic excellence.',
  },
  {
    institution: 'Milestone School & College',
    logo: milestoneLogo,
    degree: 'Primary School Certification (PSC)',
    year: '2010 - 2012',
    description: 'A well-reputed institution for providing a strong foundation in primary education with a focus on science and mathematics.',
  },
];

const Education = () => {
  return (
    <div className={styles.educationSection}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.educationCards}>
        {educationData.map((edu, index) => (
          <motion.div
            className={styles.educationCard}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className={styles.logoContainer}>
              <img src={edu.logo} alt={`${edu.institution} logo`} className={styles.educationLogo} />
            </div>
            <div className={styles.educationDetails}>
              <h3 className={styles.institution}>{edu.institution}</h3>
              <p className={styles.degree}>{edu.degree}</p>
              <span className={styles.year}>{edu.year}</span>
              <p className={styles.description}>{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;