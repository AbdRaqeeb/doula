import React from 'react';
import { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout';

const MyApp = ({Component, pageProps}: AppProps) =>
    <Layout>
        <Component {...pageProps} />
    </Layout>;


export default MyApp
