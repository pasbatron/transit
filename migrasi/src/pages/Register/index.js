import React from 'react'
import './register.scss'
import { RegisterBg } from '../../assets'
import { Gap, Input, Link, Button } from '../../components'


const Register = () => {
  return (

  <div className='main-page'>
      <div className='left'>
        <img src={RegisterBg} className='bg-image' alt='imageBg'/>
      </div>


      <div className='right'>
        <p className='title'>Form Register</p>
        <Input label="Full Name" placeholder="Full Name"/>
        <Gap height={5}/>
        <Input label="Email" placeholder="Email"/>
        <Gap height={5}/>
        <Input label="Password" placeholder="Password" />

        <Gap height={50}/>
        <Button title="Register"/>
        <Gap height={100}/>
        <Link title="Kembali Halama Login"/>
      </div>
  </div>


  )
}

export default Register