import React from 'react'
import Header from './Header'
import '../assets/ReddirAssets/Header.css'
import PostItem from './PostItem'

export default function MainComponents() {
  return (
    <div className='headercomponent'>
      <Header/>
      <PostItem/>
      </div>
  )
}
