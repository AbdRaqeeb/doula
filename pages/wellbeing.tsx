import React from 'react';
import Header from '../components/Layout/Header';
import WellbeingFrame from '../public/WellbeingFrame.svg';

const Wellbeing = () => {
  return (
      <>
          <Header text='Wellbeing' search />
          <div>
              <WellbeingFrame />
          </div>
      </>
  )
};

export default Wellbeing;