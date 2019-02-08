import React from 'react'
import {reduxForm,Field} from "redux-form";

class TaskForm extends React.Component{

	renderInput=()=>{
		return <div>
			<div className="mdc-form">
				<div className="mdc-checkbox">
					<input type="checkbox"
						   className="mdc-checkbox__native-control"
						   id="checkbox-1"/>
					<div className="mdc-checkbox__background">
						<svg className="mdc-checkbox__checkmark"
							 viewBox="0 0 24 24">
							<path className="mdc-checkbox__checkmark-path"
								  fill="none"
								  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
						</svg>

					</div>
				</div>
				<label htmlFor="checkbox-1"></label>
			</div>
		</div>

	}

render(){
	return(
			<form action="" className="d-flex justify-content-between p-2  border-bottom border-top form-inline">
				<Field name="gg"   className="flex-grow-1 form-control w-75 TaskForm" component="input" type="text" placeholder="Task Title"/>


			</form>

	)
}

}

export default reduxForm({form:"lily"})(TaskForm)