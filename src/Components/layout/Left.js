import React from 'react'
import { Link } from 'react-router-dom'

const Left =  () => {

	return (
		<div className="main-sidebar sidebar-style-2" tabIndex="1" style={{ overflow: " hidden", outline: "none" }}>
			<aside id="sidebar-wrapper">
				<div className="sidebar-brand">
					<a href="index.html">땡이의 개발일기</a>
				</div>
				<div className="sidebar-brand sidebar-brand-sm">
					<a href="index.html">땡!</a>
				</div>
				<ul className="sidebar-menu">
					<li className="menu-header">React</li>
					<li className="dropdown active">
						<Link to='/file' className="nav-link has-dropdown">
							<i className="fas fa-fire"></i><span>FileUpload</span>
						</Link>
						{/* <ul className="dropdown-menu">
							<li><a className="nav-link" href="index-0.html">UseEffect</a></li>
							<li className="active"><a className="nav-link" href="index.html">UseDispatch</a></li>
						</ul> */}
					</li>
				</ul>
			</aside>
		</div>
	)
}

export default Left