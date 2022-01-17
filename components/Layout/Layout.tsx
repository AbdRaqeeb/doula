import React, { useState, ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Articles from '../../public/Articles.svg'
import Home from '../../public/Home.svg'
import Community from '../../public/Community.svg'
import Birthplan from '../../public/Birthplan.svg'
import Wellbeing from '../../public/Wellbeing.svg'

export interface ILayoutProps {
    children: ReactElement | ReactNode;
}

const Layout = ({children}: ILayoutProps) => {
    const [value, setValue] = useState(0);

    return (
        <Box sx={{pb: 7}}>
            <CssBaseline/>
            {children}
            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction
                        label="Home"
                        icon={<Home />}
                        component='a'
                        href='/'
                    />
                    <BottomNavigationAction
                        label="Wellbeing"
                        icon={<Wellbeing/>}
                        component='a'
                        href='/wellbeing'
                    />
                    <BottomNavigationAction
                        label="Articles"
                        icon={<Articles />}
                        component='a'
                        href='/articles'
                    />
                    <BottomNavigationAction
                        label="Community"
                        icon={<Community />}
                        component='a'
                        href='community'
                    />
                    <BottomNavigationAction
                        label="Birthplan"
                        icon={<Birthplan />}
                        component='a'
                        href='/birthplan'
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    )
};

export default Layout;