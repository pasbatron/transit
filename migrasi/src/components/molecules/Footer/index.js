import React from 'react';
import { LogoRobot, LogoFacebook, LogoInstagram, LogoTelegram, LogoDiscord, LogoGithub, LogoTwitter } from '../../../assets';
import './footer.scss';


const Icon = ({img}) => {
  return(
    <div className='icon-wrapper'>
      <img className='icon-medsos' src={img} alt="icon" />
    </div>
  )
}




const Footer = () => {
  return (
    <div>
      <div className='footer'>



        <div>
          <img className='logo' src={LogoRobot} alt="Nais" />
        </div>
        <div className='social-wrapper'>
          <Icon img={LogoFacebook} />
          <Icon img={LogoInstagram} />
          <Icon img={LogoTelegram} />
          <Icon img={LogoDiscord} />
          <Icon img={LogoGithub} />
          <Icon img={LogoTwitter} />

        </div>




      </div>
      
      <div className='copyright'>
          <p>
            Copyright &copy; 2025 Nais. All rights reserved.
          </p>
        </div>
    </div>
  );
};

export default Footer;