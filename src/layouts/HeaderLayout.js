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
  padding: 5px 7px;
  overflow: hidden;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
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
  height: 45px;
  overflow: hidden;
  overflow-x: auto;
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
  overflow-y: auto;
`;

const Main = styled.main`
  overflow: auto;
`;

const Content = styled.div`
  border-top: 1px solid #ccc;
  box-shadow: -1px 2px 6px #666;
  margin-top: -3px;
`;

export const HeaderLayout = ({ title, logo, children, params }) =>
  <Layout>
    <Header className="row">
      <a href='/'>
        {logo && <img alt='Logo' src={logo} />}
        {title && <p>{title}</p>}
      </a>
    </Header>
    <div className="row">
      <Nav className="col-lg-12">
        <TabsPanel params={params} />
      </Nav>
    </div>
    <Content className="row">
      <Main className="col-lg-12">
        <Aside className="col-lg-3">
          <LeftSidebar params={params} />
        </Aside>
        <MainSection className="col-lg-9">
          {children}
        </MainSection>
      </Main>
    </Content>
  </Layout>;
