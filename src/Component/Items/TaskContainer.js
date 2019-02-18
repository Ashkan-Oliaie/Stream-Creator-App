import React,{Fragment} from 'react'


import AddTask from './addToList'



import {connect} from "react-redux";
import Actions from '../../Actions/ActionCreator'
import TaskForm from './TaskForm'
import TaskList from './TaskList'



class TaskContainer extends React.Component{

	taskCreator(){

		return{}
	}



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
						<h4>Welcome User</h4>
						<div>{this.props.userId}</div>
					</div>
						<TaskList/>
						<TaskForm/>

				</Fragment>
			)

	}


	renderContent=()=>{

		if(this.props.isSignedIn){
			return this.renderTaskList()

		}else{
			return this.renderWelcomePage()
		}

	}

	render(){

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
			userId:state.checkSignedIn.userId,
			form:state.form,
			// testAuthR:state.testAuth


		}
}

export default connect(mapToStateProps)(TaskContainer)