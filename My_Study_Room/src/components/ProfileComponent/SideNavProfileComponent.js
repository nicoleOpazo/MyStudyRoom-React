import React from 'react'
import '../assets/ProfilePageAssets/SideNavProfile.css'

export default function SideNavProfileComponent() {
    const menus = [
        { text: "Tu Perfil" },
        { text: "Actualizar datos" }
    ]

    const subreddits = [
        <a href='/MainView'>Volver al menu</a>
    ]
    return (
        <div className='sidenav'>
            <div className='sidenav_logo'>

            <a href='/MainView'><img src={require('../assets/MainViewAssets/pomo-logo.png')} class=""></img></a>
            </div>
            <br></br>
            <div className='sidenav_links'>
                <ul className='sidenav_menu'>
                    {/* mapear menus, cada uno de estos menus hacia un link, lo primero que hacermos es poner un li con el href correspondiente */}
                    {/* El link va a estar con el href de .to y el texto tendrá el .text */}
                    {menus.map(menu => (
                        <li><a href={menu.to}>{menu.text}</a></li>
                    ))}
                </ul>
                <hr />

                {/* Se crea el href con ese formato, por si el subredit es soccer será  /soccer por ejemplo*/}
                <ul className='sidenav_subreddit'>
                    {subreddits.map(subrredit => (
                        <li><a href={'r/${subrredit}'}>{subrredit}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
