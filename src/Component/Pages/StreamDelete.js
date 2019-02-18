import React from 'react'

import Modal from "../General/Modal"
import {connect} from "react-redux";
import Actions from "../../Actions/ActionCreator";
import Button from "@material-ui/core/es/Button/Button";

import history from "../General/History"

class StreamDelete extends React.Component{

	actions=()=>{
		return(
			<div>
				<Button onClick={()=>{this.props.deleteStream(this.props.match.params.id)}} variant={"contained"} color={"primary"}>Delete</Button>
				<Button onClick={this.onDismiss} variant={"contained"} color={"secondary"}>Cancel</Button>
			</div>
		)
	}

	onDismiss=()=>{
		history.push("/stream/list")
	}

	render(){
		return(
			<div>
				<div>StreamDelete</div>
				<Modal title={"delete Stream"} content={"are you sure you want to delete this ?"} actions={this.actions()} onDismiss={this.onDismiss} />
			</div>
		)
	}
}


// const mapStateToProps=(state)=>{
// 	return{
// 		streamId
// 	}
// }
export default connect(null,{deleteStream:Actions.deleteStream}) (StreamDelete)