
import React from 'react'

import StreamForm from './StreamForm'
import {connect} from "react-redux";
import Actions from "../../Actions/ActionCreator";


class StreamCreate extends React.Component{



	onSubmit=(formValues)=>{
		this.props.createStream(formValues)

	}

	render(){
		console.log(this.props.formValues)


		return(
			<div>StreamCreate
				<StreamForm onSubmit={this.onSubmit}/>

				</div>
		)
	}

}


const mapStateToProps=(state)=>{
		return{
		}
}

export default connect(mapStateToProps,{createStream:Actions.createStream})(StreamCreate)