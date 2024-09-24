import { Switch } from "@chakra-ui/react"
import styles from '../styles/NavbarFooter.module.css'
import Navlinks from './Navlinks'
import { useMediaQuery } from "@chakra-ui/react"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { userinfo } from '../Constants/userinfo'
import logos from '../styles/logo.jpg';

const Navbar = ({ toggleTheme, currentTheme }) => {
    const [drawerVisible] = useMediaQuery("(max-width: 950px)")
    const [sticky, setSticky] = useState(false)
console.log("img", logos)
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setSticky(true);
        }
        else {
            setSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <div className={styles.navbar} style={{ backgroundColor: currentTheme.secondary, boxShadow: currentTheme.boxShadow, position: sticky ? 'fixed' : 'static' }}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: !drawerVisible ? '0' : '10px' }}>
                <Link href='/'>  <Image className={styles.logo} src={logos} alt='thumbnail image'  width='200' /> </Link>
                {!drawerVisible
                    ? <div style={{ display: 'flex' }}>
                        <Navlinks />
                    </div>
                    : null
                }
                <Switch id="dark-mode" colorScheme="purple" size={!drawerVisible ? 'lg' : 'md'} isChecked={currentTheme.name === 'dark' ? true : false} onChange={() => toggleTheme()} />
            </div>
            {drawerVisible
                ? <>
                    <hr></hr>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
                        <Navlinks />
                    </div>
                </>
                : null
            }
        </div>
    )
}

export default Navbar
