import React,{Fragment} from'react'

import {connect} from 'react-redux'

import Actions from '../../Actions/ActionCreator'



class GoogleAuth extends React.Component{

	componentDidMount() {

		window.gapi.load('client:auth2',()=>{
			window.gapi.client.init({
				clientId:'757998981285-8915ntj2lusqhsjn0f61udh7brnq9jbh.apps.googleusercontent.com',
				scope:'email'
			}).then(()=>{
				const auth=window.gapi.auth2.getAuthInstance();
				auth.isSignedIn.listen(this.onAuthChange)
				this.props.GoogleAuth(auth)


			})
		})
	}

	onAuthChange=()=>{

		if(this.props.signedIn){
			this.props.auth.signOut()
		}else {
			this.props.auth.signIn()

		}
		this.props.GoogleCheckAuth()


	}




	RenderButton(){
			if(this.props.signedIn){
				return (
					<div onClick={this.onAuthChange} className=" navbut btn-danger btn">
						<div>
							<i className="google icon"> </i>
							<span>Sign Out</span>
						</div>
					</div>
				)
			}else{
				return(
					<div onClick={this.onAuthChange} className=" navbut btn-danger btn">
						<div>
							<i className="google icon"> </i>
							<span>Sign In</span>
						</div>
					</div>
				)
			}



	}

	render(){
		console.log(this.props.auth)
		return(
			<div>
				{this.RenderButton()}
			</div>
		)
	}
}

const mapStateToProps=(state)=> {
	return {
		auth:state.auth,
		signedIn:state.checkAuth,

	}
}

export default connect(
	mapStateToProps,{
	GoogleAuth:Actions.GoogleAuth,
	GoogleCheckAuth:Actions.GoogleCheckAuth
})(GoogleAuth)