import React from 'react'
import {reduxForm,Field} from "redux-form";
import Actions from "../../Actions/ActionCreator";
import {connect} from "react-redux";
import {TextField} from '@material-ui/core'

class TaskForm extends React.Component{


	renderError(meta){
		if(meta.error && meta.touched){
			return <div className="position-absolute">This field is required</div>
		}else return ""
	}

	onSubmit=(subProps)=>{
		this.props.addTask(subProps)

	}



	renderInput=({input,type,className,label,meta})=>{
		const classError=(meta.error && meta.touched) ? "border-danger":"border-light"
		console.log(meta)
		return (
			<div className={`flex-grow-1 `}>
				<TextField {...input} className= {`form-control TaskForm ${classError}`} placeholder="New Task"/>
				<small>{this.renderError(meta)}</small>

			</div>
		)

	}

render(){
	console.log(this.props)


	return(<div>
			<div>List</div>

			<form onSubmit={this.props.handleSubmit(this.onSubmit)}  className=" d-flex justify-content-between p-3 border-bottom border-top form-group">
				<Field name="taskTitle" type={"text"} label="Task"  component={this.renderInput}  />

				<button className=" btn btn-outline-success"  type="submit">Add</button>
			</form>


		</div>

	)
}

}

const validate=(formValues)=>{
const error={};

if(!formValues.taskTitle){
	error.taskTitle="Enter a valid Task";
}
	return error

}




const FormWrapper=reduxForm(
	{form:"tasks",
		validate:validate},

)(TaskForm)


export default connect(null,{addTask:Actions.AddTask})(FormWrapper)
