
import React from 'react'
import Headercss from './headerGrid.css'


import GoogleAuth from './O-Auth'
import {Link} from "react-router-dom";
import {Provider} from "react-redux";




class Headergrid extends React.Component{

	constructor(props){
		super(props)

		this.navMenu=React.createRef()
	}

	navToggle=(e)=>{
		let navMenu=this.navMenu.current
		console.log(navMenu)
		if(navMenu.style.maxHeight==='0px'){
			navMenu.style.maxHeight=`${navMenu.scrollHeight}px`
		} else {
			navMenu.style.maxHeight='0px'
		}

	}

	render(){
		return(
			<div className={"navContainer"}>
				<nav className={""}>
					<a  className={"navBrand h5 "}>
						<Link to={"/"} className={"text-info"} >
							OZ Task Manager
						</Link>
					</a>

					<div className={"navTogglerButton"} onClick={this.navToggle} >
						<div className={"navTogglerIcon"}></div>
						<div className={"navTogglerIcon"}></div>
						<div className={"navTogglerIcon"}></div>
					</div>
					<ul ref={this.navMenu} className="navItems" style={{maxHeight:'0px'}}>
						<li className="">

								<a className="" href="#">
									Discover
								</a>


						</li>

						<li className="">
							<a className="" href="#">
								<a>About</a>
							</a>
						</li>


						<li className="imp">
								<GoogleAuth/>

						</li>


					</ul>
				</nav>
			</div>
		)
	}
}

export default Headergrid