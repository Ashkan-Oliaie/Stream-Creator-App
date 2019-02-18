import React from 'react'

import MenuIcon from "@material-ui/icons/Menu"
import Button from "@material-ui/core/es/Button/Button";


class SideBar extends React.Component{

	RightSideBartoggle(){
		document.querySelector('.RightSideBar').classList.toggle('RightSideBarToggle')
		document.querySelectorAll('.RightSideBar-item').forEach((item)=>{
			item.classList.toggle('RightSideBarItemsToggle')
		})
	}

	render(){
		return(
			<div className={"RightSideBar"}>
				<div className="">
					<Button variant="flat"  className={""} onClick={this.RightSideBartoggle}><MenuIcon/></Button>

					{/*<div className="mb-1 p-2">X</div>*/}
				</div>

				<div className="d-flex flex-column">
					<div className={"RightSideBar-item"}>important</div>
					<div className={"RightSideBar-item"}>Remind</div>
					<div className={"RightSideBar-item"}>Add Note</div>
				</div>


			</div>
		)
	}
}

export default SideBar