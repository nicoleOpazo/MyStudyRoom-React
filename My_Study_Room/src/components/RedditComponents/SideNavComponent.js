import React from 'react'
import '../assets/ReddirAssets/SideNav.css'

export default function SideNavComponent() {
    const menus = [
        {to: '/r/popular', text:"Pöpular"},
        {to: '/r/all', text:"All"},
        {to: '/r/random', text:"Random"},
    ]

    const subreddits = [
        "Salud",
        "Estudio",
        "Concentración",
        "Agua"
    ]
  return (
    <div className='sidenav'>
        <div className='sidenav_logo'>
        <img src={require('../assets/MainViewAssets/pomo-logo.png')} class="" />
        </div>
        <div className='sidenav_search'>
            <input type={'text'} name ="search" placeholder='Buscar' />
            <i className='fas fa-search'/>
        </div>
        <div className='sidenav_links'>
            <ul className='sidenav_menu'>
                {/* mapear menus, cada uno de estos menus hacia un link, lo primero que hacermos es poner un li con el href correspondiente */}
                {/* El link va a estar con el href de .to y el texto tendrá el .text */}
                {menus.map(menu=> (
                    <li><a href={menu.to}>{menu.text}</a></li>
                ))}
            </ul>
            <hr/>

            {/* Se crea el href con ese formato, por si el subredit es soccer será  /soccer por ejemplo*/}
            <ul className='sidenav_subreddit'>
                {subreddits.map(subrredit =>(
                    <li><a href={'r/${subrredit}'}>{subrredit}</a></li>
                ))}
            </ul>
        </div>
    </div>
  )
}
