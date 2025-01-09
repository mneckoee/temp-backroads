import React from 'react';
import Title from './Title';
import { services } from '../data';
import Service from './Service';
const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />
      {services.map((service) => {
        const { id, icon, title, text } = service;
        return (
          <Service key={id} {...service} />
        );
      })}
    </section>
  );
};

export default Services;
