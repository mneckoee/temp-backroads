import React from 'react';
import { pageLinks } from '../data';
const PageLinks = () => {
  return (
    <ul className='nav-links' id='nav-links'>
      {pageLinks.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <a href={url} className='nav-link'>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
