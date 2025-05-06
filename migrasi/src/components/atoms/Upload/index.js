import React from 'react'
import './upload.scss'
import { LoginBg } from '../../../assets'


const Upload = () => {
  return (
    <div className='upload'>
        <img className='preview' src={LoginBg} alt='preview' />
        <input type="file" accept="image/*" />
    </div>
  )
}

export default Upload