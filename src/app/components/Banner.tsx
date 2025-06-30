import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      overflow: 'hidden',
      margin: '0 auto',
      position: 'relative',
      marginTop:'5rem'
    }}>
      <Image
        src="/Banner.png"
        alt="Promotional Banner"
        width={1920}  // Original width of your banner image
        height={800}  // Original height of your banner image
        priority     // Optional: if this is above-the-fold content
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          maxHeight: '600px', // Adjust based on your design needs
        }}
      />
    </div>
  );
};

export default Banner;