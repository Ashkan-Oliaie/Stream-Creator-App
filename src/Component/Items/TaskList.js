import React,{Fragment} from 'react'


import AddTask from './addToList'



import {connect} from "react-redux";
import Actions from '../../Actions/ActionCreator'
import TaskForm from './TaskForm'



class TaskList extends React.Component{




	renderWelcomePage=()=>{
		return(
			<Fragment>

				<h2>OZ Task Manager</h2>
				<p>Explore the high extend of compatibility our App can keep up to </p>
				<button className="btn btn-success">Explore</button>

			</Fragment>
		)
	}


	renderTaskList=()=>{

			return (<Fragment>

					<div>
						<h4>Welcome User ID</h4>
						<div>{this.props.userId}</div>
					</div>
					<div>
						<TaskForm/>
					</div>

				</Fragment>
			)

	}


	renderContent=()=>{
		// console.log("gg")
		// console.log(this.props)

		if(this.props.isSignedIn){
			return this.renderTaskList()

		}else{
			return this.renderWelcomePage()
		}

	}

	render(){
		// console.log(this.props)
		return(
				<Fragment >
					{this.renderContent()}
				</Fragment>
		)
	}
}

const mapToStateProps=(state)=>{
		return{
			isSignedIn:state.checkSignedIn.isSignedIn,
			userId:state.checkSignedIn.userId
			// authInfo:state.authInfo,
			// auth:state.auth

		}
}

export default connect(mapToStateProps)(TaskList)