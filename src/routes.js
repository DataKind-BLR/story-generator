import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import AppController from "./components/controller/AppController";
import IndexComponent from "./components/views/home/Home";

export default (
	<Route path="/" components={App}>
		<IndexRoute components={IndexComponent} />
		<Route path="/:theme(/:sub_theme)" component={IndexComponent} />
		<Route path="/:theme/:sub_theme/:topic" component={AppController} />
	</Route>
);