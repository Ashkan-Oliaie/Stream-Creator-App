import React from 'react'
import {reduxForm,Field} from "redux-form";

import {connect} from 'react-redux'

import {TextField} from "@material-ui/core";
import Actions from "../../Actions/ActionCreator";


class StreamForm extends React.Component{


	renderInput=({input,meta,label})=>{
		// console.log(props.input.value)
		return(
			<div>
				<TextField
					// value={props.input.value}
					onChange={input.onChange}
					label={label}
					value={input.value}

					// id="outlined-name"
					margin="normal"
					variant="filled"
				/>
			</div>

		)
	}

	renderInputNew=({input,meta})=>{
		return(
			<div>
				<input onChange={input.onChange} value={input.value}/>

			</div>
		)
	}


	onSubmit=(propss)=>{
		this.props.addTask(propss)
	}

	render(){
		return(
			<div>
				<form  >
					<Field  onSubmit={this.props.handleSubmit(this.onSubmit)} name="streamTitle" component={this.renderInputNew} label={"Stream"}/>
				</form>
			</div>

		)
	}
}

const FormW=reduxForm({streamForm:"streamForm"})(StreamForm)


export default connect(null,{addTask:Actions.AddTask})(FormW)