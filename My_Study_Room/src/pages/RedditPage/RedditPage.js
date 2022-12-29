import React from 'react'
import MainComponents from '../../components/RedditComponents/MainComponents'
import SideNavComponent from '../../components/RedditComponents/SideNavComponent'
import './RedditPage.css'

export default function RedditPage() {
  return (
    <div className='containerApp'>
        <SideNavComponent/>
        <MainComponents/>
    </div>
  )
}
