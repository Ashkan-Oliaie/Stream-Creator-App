import React from 'react'
import {reduxForm,Field} from "redux-form";
import {TextField,Button,Paper} from '@material-ui/core'

class StreamForm extends React.Component{

	// componentDidMount() {
	// 	this.theme=createMuiTheme({
	// 		palette: {
	// 			primary: {
	// 				main: "#4f919e"
	// 			},
	// 			secondary: {
	// 				main: '#7af47d',
	// 			},
	// 		},
	// 	});
	// }


	renderError(meta){
		if(meta.error && meta.touched){
			return "Dude? Cmon"
		}else return ""
	}

	onSubmit=(values)=>{
		this.props.onSubmit(values)
	}



	renderInput=({input,type,label,meta})=>{
		return (
			<div >
				<TextField error={!!(meta.error && meta.touched)} placeholder={meta.initial} helperText={this.renderError(meta)} label={label}  {...input} margin="normal" variant={"outlined"} />
			</div>
		)

	}

	render(){
		return(<div>
				<form  	onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<Field autoComplete={false} name="StreamTitle" type={"text"} label="Stream"  component={this.renderInput}  />
					<Field autoComplete={false} name="StreamDescription" type={"text"} label="Description"  component={this.renderInput}  />

					<Button variant={"contained"} size={"large"} color="secondary" type="submit">Submit</Button>
				</form>


			</div>

		)
	}

}

const validate=(formValues)=>{
	const error={};

	if(!formValues.StreamTitle){
		error.StreamTitle="Enter a valid Task";
	}
	if(!formValues.StreamDescription){
		error.StreamDescription="Enter a valid Task";
	}
	return error

}




export default  reduxForm(
	{form:"streamInfo",
	validate:validate},

)(StreamForm)


// const mapStateToProps=(state)=>{
// 			return {
// 				userId:state.checkSignedIn.userId
// 			}
// }


