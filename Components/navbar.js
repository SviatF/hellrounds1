import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Navbar.module.css'


export default function Navbar({items}){

    return(<nav >
        <div className={styles.nav}>
        <div className={styles.mainNv}>
            <div className={styles.nvlist}>
                    <Link href={items[1].href}><a className={styles.nvlistLink} >{items[1].value}</a></Link>
                    <Link href={items[2].href}><a className={styles.nvlistLink} >{items[2].value}</a></Link>
                    <Link href={items[3].href}><a className={styles.nvlistLink} >{items[3].value}</a></Link>
                    <Link href={items[4].href}><a className={styles.nvlistLink} >{items[4].value}</a></Link>
                    <Link href={items[5].href}><a className={styles.nvlistLink} >{items[5].value}</a></Link>
            </div>
            <div>
                <Link href={items[0].href}><a className={styles.logonv}>{items[0].value}</a></Link>
            </div>
            <div>
                <Link href={items[6].href}><a className={styles.absnv}>{items[6].value}</a></Link>
            </div>
        </div>
        </div>
    </nav>
    
    )

}