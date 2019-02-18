import React from "react"

import ReactDOM from "react-dom"



const Modal=(props)=>{
	return ReactDOM.createPortal(
		<div onClick={props.onDismiss} className="bg-dark position-absolute w-100 h-100 " style={{left:"0",top:"0",zIndex:"40"}}>
			<div onClick={(e)=>{e.stopPropagation()}} className="position-absolute bg-white p-5 ModalMe" >
				<h4 className="p-2">{props.title}</h4>
				<div className="p-2">{props.content}</div>
				<div className="p-2">{props.actions}</div>
			</div>
		</div>,document.querySelector("#modal")
	)
}


export default Modal