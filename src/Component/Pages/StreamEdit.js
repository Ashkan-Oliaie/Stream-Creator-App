
import React from 'react'

import StreamForm from './StreamForm'
import {connect} from "react-redux";
import Actions from "../../Actions/ActionCreator";





class StreamEdit extends React.Component{

 	// IMPORTANT -- THIS IS FOR FETCHING NEW DATA TO STATES WHEN THIS PAGE OPENS DIRECTLY
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id)
	}


	onEditClick=(formValues)=>{
		this.props.editStream(this.props.match.params.id,formValues)
	}

	render(){
		if(!this.props.stream)
			{return null}
		else

		return(
			<div>
				<StreamForm onSubmit={this.onEditClick} initialValues={{StreamTitle:this.props.stream.StreamTitle,StreamDescription:this.props.stream.StreamDescription}}>

				</StreamForm>
			</div>
		)
	}

}

const mapStateToProps=(state,ownProps)=>{
	return {
		stream:state.streams[ownProps.match.params.id]
	}
}

export default connect(mapStateToProps,{editStream:Actions.updateStream,fetchStream:Actions.fetchStream})(StreamEdit)