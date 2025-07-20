import React from 'react';
import Lottie from 'lottie-react';
import reactorAnimation from '../assets/Book loading.json';

const ChemicalAnimation = ({ width = 300 }) => (
  <div className="flex justify-center my-10">
    <Lottie
      animationData={reactorAnimation}
      loop
      style={{ width, height: width }}
    />
  </div>
);

export default ChemicalAnimation;
