import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'

const HomeProject = ({ currentTheme, project, id }) => {
    return (
        <div className={styles.projectmain} style={{borderColor: currentTheme.accent, borderRadius: id % 2 === 0 ? '50px 0 0 0' : '0 0 50px 0'}}>
            <div className={styles.projectContent}>
                <div className={styles.projectIcon} style={{color: currentTheme.accent, backgroundColor: currentTheme.footerColor, borderColor: currentTheme.accent}}><Link href={project.projectLink}><h1><FontAwesomeIcon icon={faTelegramPlane} /></h1></Link></div>
                <h1 className={styles.projectTitle}>{project.name}</h1>
                <h2 className={styles.projectSubTitle} style={{color: currentTheme.subtext}}>{project.description}</h2>
                <Link href='/work'><h1 className={styles.cta2} style={{ color: currentTheme.tertiary }}>View More</h1></Link>
            </div>
        </div>
    )
}

export default HomeProject
