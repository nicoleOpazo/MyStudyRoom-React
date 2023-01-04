import React from 'react';

const BackgroundVideo = () => {
  return (
    <div>
      <video
        src={require("https://drive.google.com/file/d/1SwMU7cyKl5YV43S0L84Fu_71-QVVK8Z9/view?usp=share_link")}
        autoplay
        loop
        muted
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default BackgroundVideo;