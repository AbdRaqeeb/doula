import React from 'react';
import Header from '../components/Layout/Header';
import ArticleMenu from '../public/ArticleMenu.svg'
import ArticleDisplay from '../public/ArticleDisplay.svg'
import ArticleList from '../public/ArticleList.svg'
import { pStyle } from './index';

const Articles = () => {
    return (
        <>
            <Header text='Articles' search/>
            <div style={{padding: '10px'}}>
                <ArticleMenu/>
                <h1 style={{fontWeight: 'bold'}}>Your daily insight</h1>
                <ArticleDisplay/>
                <div>
                    <h3 style={{ fontWeight: 'bold' }}>You should read up about these </h3>
                    <p style={pStyle}>
                        We’ve curated list of article for you
                    </p>
                </div>
                <ArticleList />
            </div>
        </>
    );
};

export default Articles;