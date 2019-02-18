import React,{Fragment} from'react'

import {connect} from 'react-redux'

import Actions from '../../Actions/ActionCreator'




class GoogleAuth extends React.Component{


	componentDidMount() {

		// this.props.testAuth()

		// console.log(this.props.isSignedIn)
		window.gapi.load('client:auth2',()=>{
			window.gapi.client.init({
				clientId:'757998981285-8915ntj2lusqhsjn0f61udh7brnq9jbh.apps.googleusercontent.com',
				scope:'email'
			}).then(()=>{
				this.auth=window.gapi.auth2.getAuthInstance();

				this.onAuthChange(this.auth.isSignedIn.get());
				// this.props.getAuth(auth);


				this.auth.isSignedIn.listen(this.onAuthChange)
				// this.props.GoogleAuth(auth);

			})
		})
	}


	onAuthChange=(isSignedIn)=>{
		// console.log(this.props.auth.authen)

		if(isSignedIn){
			this.props.signIn(this.auth.currentUser.get().getId())
		}else {
			this.props.signOut()
			// this.props.GetAuthInfo()
		}
	}



	SignInClick=()=>{
		this.auth.signIn()

	}

	SignOutClick=()=>{
		this.auth.signOut()

	}

	RenderButton=()=>{
			if(this.props.isSignedIn===null){
				return null

			}else if(this.props.isSignedIn){
				return(
					<div onClick={this.SignOutClick} className=" navbut btn-danger btn">
						<div>
							<i className="google icon"> </i>
							<span>Sign Out</span>
						</div>
					</div>
				)
			}else{
				return (
					<div onClick={this.SignInClick} className=" navbut btn-danger btn">
						<div>
							<i className="google icon"> </i>
							<span>Sign In</span>
						</div>
					</div>
				)
			}



	}

	render(){
		return(
			<div>
				{this.RenderButton()}
			</div>
		)
	}
}

const mapStateToProps=(state)=> {
	return {
		isSignedIn:state.checkSignedIn.isSignedIn,
	}
}

export default connect(
	mapStateToProps,{
		signIn:Actions.signIn,
		signOut:Actions.signOut,
})(GoogleAuth)