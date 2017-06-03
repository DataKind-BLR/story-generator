import React from 'react';
import styled from 'styled-components';
import LeftSidebar from '../components/views/leftsidebar/LeftSidebar';
import { Tabs } from '../components/views/Tabs';
import { themes } from '../data';

const TabsPanel = ({ params }) => {
  const activeTheme = (params != undefined && params.theme != undefined) ? themes.filter(t => t.url_slug === params.theme).shift() : themes[0];
  return <Tabs themes={themes} titleSelector={theme => theme.name} activeTheme={activeTheme} />;
};

const Layout = styled.div`
  height: 100%;
  width: 100%;
  font-size: 16px;
  overflow: auto;
`;

const Header = styled.header`
  position: fixed;
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
  img {
    height: 60px;
  }
  img + p {
    margin-left: 10px;
  }
  p {
    display: inline-block;
    font-weight: bold;
  }
`;

const Nav = styled.nav`
  position: absolute;
  height: 45px;
  overflow: hidden;
  overflow-x: auto;
  left: 0;
  right: 0;
  top: 65px;
`;

const Aside = styled.aside`
  position: absolute;
  overflow-y: auto;
  width: 280px;
  left: 0;
  bottom: 0;
  top: 0;
`;

const MainSection = styled.section`
  position: absolute;
  overflow-y: auto;
  left: 280px;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Main = styled.main`
  position: absolute;
  top: 110px;
  bottom: 0;
  overflow: auto;
  left: 0;
  right: 0;
`;

export const HeaderLayout = ({ title, logo, children, params }) =>
  <Layout>
    <Header>
      <a href='/'>
        {logo && <img alt='Logo' src={logo} />}
        {title && <p>{title}</p>}
      </a>
    </Header>
    <Nav>
		  <TabsPanel params={params} />
    </Nav>
    <Main>
      <Aside>
        <LeftSidebar params={params} />
      </Aside>
      <MainSection>
        {children}
      </MainSection>
    </Main>
  </Layout>;