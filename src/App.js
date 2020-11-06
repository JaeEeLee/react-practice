import React, { useEffect, useReducer, useRef } from 'react';
import { Top, Left } from './Components/layout';
import { getGitService } from './services/git.service';

const App = () => {
	const mounted = useRef(false)
	useEffect(() => {
		getRepos()
		return () => mounted.current = true
	},[])

	const getRepos = async () => {
		getGitService.getMyGit().then(res => {
			// console.log(res);
		})
	  }


	return (
		<div className="main-wrapper main-wrapper-1">
			<Top />
			<Left />
			<div className="main-content" style={{minHeight: '851px'}}></div>
		</div>
	)
}

export default App