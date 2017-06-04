import React from 'react';
import { Link, IndexLink } from 'react-router';
import { getSubThemes, getTopics, sub_themes, themes, topics } from '../../../../data';
import { Tabs } from '../../Tabs';

const Topics = ({ topics }) =>
  <ul className="list-group">
    {topics.map(topic =>
      <li className="list-group-item" key={topic.url_slug}>
        <Link to={`/${topic.sub_theme_url_slug}/${topic.url_slug}`}>{topic.name}</Link>
      </li>)
    }
  </ul>;

export const SubThemeList = ({ sub_themes, params }) => {
  const active = params != undefined && params.sub_theme != undefined ? sub_themes.filter(s => s.url_slug === params.sub_theme).shift() : undefined;
  return (
  <div className="panel-group select-panel" id="accordion">
    {sub_themes.map(subTheme =>
      <div className="panel panel-default" key={subTheme.url_slug}>
        <div className="panel-heading">
          <h4 className="panel-title">
            <a className={`${active == subTheme ? "" : "collapsed"}`} href={`#/${subTheme.theme_url_slug}/${active == subTheme ? '' : subTheme.url_slug}`}>{subTheme.name}</a>
          </h4>
        </div>
        <div id={subTheme.url_slug} className={`panel-collapse ${active == subTheme ? "" : "collapse"}`}>
          <Topics topics={getTopics(subTheme)} />
        </div>
      </div>)
    }
  </div>
  );
};