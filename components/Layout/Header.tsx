import React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import Search from '@mui/icons-material/Search';

export interface IHeaderProp {
    search?: boolean;
    text: string;
}

const Header = ({ search, text }: IHeaderProp) => {
    return (
        <div style={styles}>
            <h1 style={{ fontWeight: 'bold' }}>{text}</h1>
            <div style={divStyle}>
                <Stack direction="row" spacing={2}>
                    {search && <Search />}
                    <Avatar alt="Remy Sharp" src="https://picsum.photos/200/300"/>
                    <MarkChatUnreadIcon style={{color: 'purple'}}/>
                </Stack>
            </div>
        </div>
    )
};

export default Header;

const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
};

const divStyle = {
    display: 'flex',
    alignItems: 'center',
};