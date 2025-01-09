import React from 'react';
import { footerLinks } from '../data';
import { socailLinks } from '../data';
const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {footerLinks.map((link) => {
          const { id, url, text } = link;
          return (
            <li>
              <a href={url} className='footer-link'>
                {text}
              </a>
            </li>
          );
        })}
      </ul> 
      <ul className='footer-icons'>
        {socailLinks.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a
                href={url}
                target='_blank'
                rel='noreferer'
                className='footer-icon'
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
