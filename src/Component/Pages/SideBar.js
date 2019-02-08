import React from 'react'


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
					<div className="bg-light w-100 h-auto text-center"></div>
					<button className="btn btn-info ml-auto" onClick={this.SideBartoggle}>T</button>
					{/*<div className="mb-1 p-2">X</div>*/}
				</div>

				<div className="d-flex flex-column">
					<div className={"SideBar-item"}>New Stream</div>
					<div className={"SideBar-item"}>Edit Stream</div>
					<div className={"SideBar-item"}>Efg Stream</div>
				</div>


			</div>
		)
	}
}

export default SideBar