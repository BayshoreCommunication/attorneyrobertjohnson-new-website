import React from 'react';

const MapSection = () => {
  return (
    <div className='overflow-hidden'>
      <iframe
        title='map-apex'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225538.9814776819!2d-82.63712980546875!3d27.961859500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2cfbb1f31d2d9%3A0x7b3e4d8f350e516e!2sApex%20Advisor%20Group%20Inc!5e0!3m2!1sen!2sbd!4v1693223168093!5m2!1sen!2sbd'
        width='100%'
        height='450px'
        allowfullscreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default MapSection;
