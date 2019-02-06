import React from 'react'
import SideCss from './SideBar.css'


class SideBar extends React.Component{

	SideBartoggle(){
		document.querySelector('.SideBar').classList.toggle('SideBarToggle')
		document.querySelector('.SideBar-item').classList.toggle('SideBarItemsToggle')
	}

	render(){
		return(
			<div className={"SideBar"}>
				<div className="d-flex align-items-center justify-content-between">
					<h4 className="text-center p-2" onClick={this.SideBartoggle}>O</h4>
					{/*<div className="mb-1 p-2">X</div>*/}
				</div>

				<div className={"SideBar-item"}>New Stream</div>
				<div className={"SideBar-item"}>Edit Stream</div>
				<div className={"SideBar-item"}>Efg Stream</div>

			</div>
		)
	}
}

export default SideBar