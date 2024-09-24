import { useState, useEffect } from 'react'
import styles from '../styles/NavbarFooter.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navlinks = () => {
    const router = useRouter()
    const [activeLink, setActiveLink] = useState('/')

    useEffect(() => {
        setActiveLink(router.asPath)
    }, [router.asPath])

    return (
        <>
            <div className={styles.navlinks}>
                <Link href='/'><h1 style={{ opacity: activeLink === '/' || activeLink === '/#work' ? '100%' : '80%' }}>Home</h1></Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/#about'><h1 style={{ opacity: activeLink === '/#about' ? '100%' : '80%' }}>About Us</h1></Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/work'><h1 style={{ opacity: activeLink === '/work' ? '100%' : '80%' }}>Work</h1></Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/contact'><h1 style={{ opacity: activeLink === '/contact' ? '100%' : '80%' }}>Contact</h1></Link>
            </div>
        </>

    )
}

export default Navlinks
