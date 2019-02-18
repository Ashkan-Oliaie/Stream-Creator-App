
import React from 'react'
import Headercss from './headerGrid.css'


import GoogleAuth from './O-Auth'
import {Link} from "react-router-dom";
import {Provider} from "react-redux";
import Button from "@material-ui/core/es/Button/Button";




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
						<Link to={"/stream/list"} className={" navBrand h5 text-info"} >
							<Button variant={"outlined"} color={"secondary"}>Streams</Button>
						</Link>

					<div className={"navTogglerButton"} onClick={this.navToggle} >
						<div className={"navTogglerIcon"}></div>
						<div className={"navTogglerIcon"}></div>
						<div className={"navTogglerIcon"}></div>
					</div>
					<ul ref={this.navMenu} className="navItems" style={{maxHeight:'0px'}}>
						<li className="">

							<Link to={"/stream/create"} className={"text-info"} >
								Create
							</Link>


						</li>

						<li className="">

							<Link to={"/stream/edit"} className={"text-info"} >
								Create
							</Link>
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