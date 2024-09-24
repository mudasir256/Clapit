import styles from '../styles/NavbarFooter.module.css';
import { userinfo } from '../Constants/userinfo'
import Link from 'next/link'
import Image from 'next/image'
import logos from '../styles/logo.jpg';
const Footer = ({ currentTheme }) => {
    return (
        <div className={styles.footermain} style={{ backgroundColor: currentTheme.footerColor, color: currentTheme.subtext }}>
            <div className={styles.footertable}>
            <Link href='/'>  <Image className={styles.logo} src={logos} alt='thumbnail image'  width='200' /> </Link>
                <ul>
                    <li className={styles.listHeading}>Socials</li>
                    {userinfo.socials ?
                        userinfo.socials.map((social, key) => {
                            return (
                                <Link href={social.link} key={key}><h1><li>{social.type}</li></h1></Link>
                            )
                        }) : null
                    }
                    <Link href={`mailto:${userinfo.contact.email ? userinfo.contact.email : ''}`}><h1><li>Mail</li></h1></Link>
                </ul>
                <ul>
                    <li className={styles.listHeading}>Pages</li>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/#about'><li>About Us</li></Link>
                    <Link href='/work'><li>Work</li></Link>
                    <Link href='/contact'><li>Contact</li></Link>
                </ul>
            </div>
            <hr style={{ height: '1px', backgroundColor: currentTheme.subtext, border: 'none', opacity: '0.5' }}></hr>
            <h2 className={styles.footercontent}>Code Like A pro Information Technologies</h2>
        </div>
    )
}

export default Footer
