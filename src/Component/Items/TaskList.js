import React,{Fragment} from 'react'


import AddTask from './addToList'


import {connect} from "react-redux";
import Actions from '../../Actions/ActionCreator'



class TaskList extends React.Component{


	renderWelcomePage(){
		return(
			<Fragment>
				<h2>OZ Task Manager</h2>
				<p>Explore the high extend of compatibility our App can keep up to </p>
				<button className="btn btn-success">Explore</button>
			</Fragment>
		)
	}


	renderTaskList(){
		if("x"){
			return (<Fragment>

					<div>
						<h4>Welcome User ID</h4>
						<div>{this.props.authInfo.userID}</div>
					</div>
					<div className="mt-4">
						Here comes the List
						<ul className="TaskList">
							<li>item-1</li>
							<li>item-2</li>
							<li>item-3</li>
							<li>item-4</li>
							<li>item-5</li>
						</ul>
					</div>

				</Fragment>

			)
		}else return <div>You might think</div>
	}


	renderContent(){
		if(this.props.signedIn){
			return this.renderTaskList()

		}else{
			return this.renderWelcomePage()
		}
	}

	render(){
		return(
				<Fragment >{this.renderContent()}</Fragment>
		)
	}
}

const mapToStateProps=(state)=>{
		return{
			signedIn:state.checkAuth,
			auth:state.GetGoogleAuth,
			authInfo:state.authInfo

		}
}

export default connect(mapToStateProps)(TaskList)