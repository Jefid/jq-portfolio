import React from 'react';
import {Container, SvgIcon, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './style.css';
import './style.css';
import EmailIcon from '@mui/icons-material/Email';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function Footer() {
  return (
    <footer className='header' id= "footer">
      <div>
        Contact Me Here:
      </div>

      <Container>
          <a
            href='https://github.com/Jefid'
            rel='noreferrer'
            target='_blank'
          >
            <Tooltip title='GitHub'>
              <SvgIcon
                alt='github-icon'
                fontSize='large'
                component={GitHubIcon}
              />
            </Tooltip>
          </a>{' '}
          <a
            href='https://www.linkedin.com/in/jefferson-quandt-1bb457232/'
            rel='noreferrer'
            target='_blank'
          >
            <Tooltip title='LinkedIn'>
              <SvgIcon
                alt='linkedin-icon'
                fontSize='large'
                component={LinkedInIcon}
              />
            </Tooltip>
          </a>
          <a
          href='mailto:jquandt411@gmail.com'
          rel='noreferrer'
          target='_blank'
        >
          <Tooltip title='Email directly'>
            <SvgIcon alt='email-icon' fontSize='large' component={EmailIcon} />
          </Tooltip>
        </a>{' '}
        {/*  */}
        <a
          href='https://discordapp.com/users/jefid#0311'
          rel='noreferrer'
          target='_blank'
        >
          <Tooltip title='Add me on Discord'>
            <SvgIcon
              alt='discord-icon'
              fontSize='large'
              component={SportsEsportsIcon}
            />
          </Tooltip>
        </a>
        </Container>
</footer>
  );
}
export default Footer;

