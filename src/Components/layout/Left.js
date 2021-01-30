import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"

const Left = () => {
	const [toggle, setToggle] = useState(false)
	const { pathname, search } = useLocation()
	
// console.log(pathname);
	const getNavLinkClass = (url) => {
		return
		// console.log(pathname);
		// console.log(url);
		// if(!pathname || !url) return

		// let path = pathname.replace(/^\/|\/$/g, '').split('/');
		// return (path.indexOf(url) > -1) ? 'active' : '';
	}

	return (
		<div className="main-sidebar sidebar-style-2" tabIndex="1" style={{ overflow: " hidden", outline: "none" }}>
			<aside id="sidebar-wrapper">
				<div className="sidebar-brand">
					<Link to='/'>땡이의 개발일기</Link>
				</div>
				<div className="sidebar-brand sidebar-brand-sm">
					<Link to='/'>땡</Link>
				</div>

				<ul className="sidebar-menu">
					<li className="menu-header">React</li>
					<li className={`dropdown ${getNavLinkClass('dashboard')}`}> {/* class + active */}
						<Link to='/dashboard/test1/' className="nav-link has-dropdown">
							<i className="fas fa-fire"></i><span>test</span>
						</Link>
						<ul className="dropdown-menu">
							<li className={getNavLinkClass('test1')}>
								<Link to='/dashboard/test1/' className="nav-link">test1</Link>
							</li>
							<li className={getNavLinkClass('test2')}> {/* class + active */}
								<Link to='/dashboard/test2/' className="nav-link">test2</Link>
							</li>
						</ul>
					</li>
				</ul>
			</aside>
		</div>
	)
}

export default Left