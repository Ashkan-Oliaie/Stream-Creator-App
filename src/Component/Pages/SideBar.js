import React from 'react'

import MenuIcon from "@material-ui/icons/Menu"
import Button from "@material-ui/core/es/Button/Button";


class SideBar extends React.Component{

	SideBartoggle(){
		document.querySelector('.SideBar').classList.toggle('SideBarToggle')
		document.querySelectorAll('.SideBar-item').forEach((item)=>{
			item.classList.toggle('SideBarItemsToggle')
		})
	}

	render(){
		return(
			<div className={"SideBar"}>
				<div className="d-flex  justify-content-between">
					<div className="bg-light w-100 h-auto text-center invisible"></div>
					<Button variant={"flat"}  onClick={this.SideBartoggle}><MenuIcon/></Button>
					{/*<div className="mb-1 p-2">X</div>*/}
				</div>

				<div className="d-flex flex-column">
					<div className={"SideBar-item"}>Daily</div>
					<div className={"SideBar-item"}>Important</div>
					<div className={"SideBar-item"}>I dunno </div>
				</div>


			</div>
		)
	}
}

export default SideBar