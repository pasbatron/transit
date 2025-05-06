import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogitem.scss'


const BlogItem = () => {
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={RegisterBg} alt="post" />
        <div className='content-detail'>
            <p className='title'>Title</p>
            <p className='author'>Author</p>
            <p className='body'>Date - nais one tea maseh. cinta itu memikirkan yang dicintai, defisini cinta yang tertanam dalam rasa </p>
        </div>
        
    </div>
  )
}

export default BlogItem