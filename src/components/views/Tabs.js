import React from 'react';
import styled from 'styled-components';

const Tab = ({ className, isActive, name, url }) =>
    <li className={`${className ? className : ""} ${isActive ? "active": ""}`}>
        <a href={`#/${url}`}>{name}</a>
    </li>;

const HeaderTab = styled(Tab)`
    &.active a {
        border-bottom: none !important;
    }
`;

export const Tabs = ({ themes, activeTheme, titleSelector }) =>
    <ul className="nav nav-tabs nav-justified">
        {themes.map(theme => <HeaderTab name={titleSelector(theme)} key={theme.url_slug} url={theme.url_slug} isActive={activeTheme.url_slug === theme.url_slug} />)}
    </ul>;