import React from 'react'


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
				<div className="d-flex  justify-content-between">
					<button className="btn btn-info mr-auto" onClick={this.RightSideBartoggle}>T</button>

					{/*<div className="mb-1 p-2">X</div>*/}
				</div>

				<div className="d-flex flex-column">
					<div className={"RightSideBar-item"}>New Stream</div>
					<div className={"RightSideBar-item"}>Edit Stream</div>
					<div className={"RightSideBar-item"}>Efg Stream</div>
				</div>


			</div>
		)
	}
}

export default SideBar