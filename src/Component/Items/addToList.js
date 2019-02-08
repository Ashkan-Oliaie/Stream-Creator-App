import React,{Fragment} from 'react'

import Actions from '../../Actions/ActionCreator'
import {connect} from "react-redux";




class AddTask extends React.Component{
	render(){
		return(
			<Fragment>
				<form onSubmit={this.props.AddTask()} className="d-flex justify-content-between">
					<i className="icon plus large"/>
					<input className="" placeholder="Your Task"></input>
					<i className="icon star large"/>
					<button className="icon star large">Submit</button>

				</form>
			</Fragment>
		)
	}
}

export default connect(null,{AddTask:Actions.AddTask,})(AddTask)