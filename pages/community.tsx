import React from 'react';
import Header from '../components/Layout/Header';
import CommunityMenu from '../public/CommunityMenu.svg';
import CommunityList from '../public/CommunityList.svg';

const Community = () => {
  return (
      <>
          <Header text='Community' search />
          <div style={{ padding: '10px' }}>
            <CommunityMenu />
            <CommunityList />
          </div>
      </>
  );
};

export default Community;