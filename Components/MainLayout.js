import Head from 'next/head'
import Navbar from './navbar'

export default function MainLayout({childs,title='404 | Not Found'}){

    const navItems = [{value:"Hell Rounds",href:"/"},
                      {value:"Новини",href:"/news"},
                      {value:"Статті",href:"/posts"},
                      {value:"Міфи",href:"/about"},
                      {value:"Бестіарій",href:"/about"},
                      {value:"Релігії",href:"/about"},
                      {value:"Про Нас",href:"/about"}
                    ]

    return(<>
            
            <Head>    
                 <title>{title}</title>
            </Head>
             <Navbar items={navItems}/>
            <main>
                    {childs}
            </main>
    

    </>
    )

}