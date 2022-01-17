import React from 'react';
import Header from '../components/Layout/Header';
import BirthplanPercent from '../public/BirthplanPercent.svg';
import BirthplanDelivery from '../public/BirthplanDelivery.svg';
import BirthplanImportant from '../public/BirthplanImportant.svg';
import BirthplanShare from '../public/BirthplanShare.svg';

const Birthplan = () => {
    return (
        <>
            <Header text='Birthplan' search />
            <div style={{ padding: '10px' }}>
                <BirthplanPercent />
                <BirthplanShare />
                <BirthplanImportant />
                <BirthplanDelivery />
            </div>
        </>
    );
};

export default Birthplan;