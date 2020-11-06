import React from "react";
import { injectGlobal } from "styled-components";
import { history } from './Components/utils';
import { Router } from 'react-router-dom';
import ReactDOM from "react-dom";
import reset from "styled-reset";
import 'es6-promise/auto'
import App from './App';
import "./typography";

injectGlobal`
${reset};
body{
    background-color:#ecf0f1;
}`;

ReactDOM.render(
	<Router history={history}>
		<App />
	</Router>, document.getElementById("root"));