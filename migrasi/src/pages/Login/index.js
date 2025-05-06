import React from 'react'
import { LoginBg } from '../../assets'
import { Gap, Input, Link, Button } from '../../components'


const Login = () => {
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={LoginBg} className='bg-image' alt='imageBg'/>
      </div>


      <div className='right'>
        <p className='title'>Login</p>
        <Gap height={5}/>
        <Input label="Email" placeholder="Email"/>
        <Gap height={5}/>
        <Input label="Password" placeholder="Password" />

        <Gap height={50}/>
        <Button title="Login"/>
        <Gap height={100}/>
        <Link title="Belum punya akun ? Register"/>
      </div>
  </div>

  )
}

export default Login