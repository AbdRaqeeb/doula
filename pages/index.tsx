import React from 'react';
import { NextPage } from 'next'
import Image from 'next/image';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { Search } from '@mui/icons-material'
import baby from '../public/baby.png';
import Today from '../public/today.svg';
import Header from '../components/Layout/Header';

const Home: NextPage = () => {
    return (
        <>
            <Header text='Week 12' />
            <div style={{padding: '10px', width: '100%'}}>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <Search/>
                        </InputAdornment>
                    }
                    style={inputStyle}
                    placeholder='Search wellbeing, people, article'
                    fullWidth
                    type='search'
                />
            </div>
            <div style={{ padding: '10px' }}>
                <h3>Rise and shine Maria 🌞, </h3>
                <p style={pStyle}>
                    You may feel acne on your face,
                    Don’t panic, it’s normal.
                </p>
            </div>
            <div>
                <Image src={baby} alt='baby' />
            </div>
            <Today />
        </>
    )
};

export default Home;

const inputStyle = {
    borderRadius: '5px',
    bgColor: 'whitesmoke',
};

export const pStyle = {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px',
    letterSpacing: '0em',
};
