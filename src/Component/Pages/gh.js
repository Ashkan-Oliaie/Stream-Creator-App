import React from 'react'
import axiosStream from '../API/axios'

import history from "../Component/General/History"

import {
	SIGN_IN,
	SIGN_OUT,
	AUTHENTICATION,
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	DELETE_STREAM,
	UPDATE_STREAM,
} from "./Types";


class ActionCreator extends React.Component{

	AddTask(Task){

		return{
			type:"Add_Task",
			payload:Task
		}

	}



	// clientInit(){
	// 	return async (dispatch)=>{
	// 		await window.gapi.client.init({
	// 			clientId:'757998981285-8915ntj2lusqhsjn0f61udh7brnq9jbh.apps.googleusercontent.com',
	// 			scope:'email'
	// 		})
	//
	// 		const authen=window.gapi.auth2.getAuthInstance();
	//
	// 		dispatch({type:'AuthFromAction',payload:authen})
	//
	//
	// 	}
	//
	// }

	testAuth(){
		return async (dispatch)=>{
			window.gapi.load('client:auth2',  ()=>{
				window.gapi.client.init({
					clientId:'757998981285-8915ntj2lusqhsjn0f61udh7brnq9jbh.apps.googleusercontent.com',
					scope:'email'
				}).then(()=>{
					let auth2=window.gapi.auth2.getAuthInstance();
					dispatch({type:'AuthFromAction',payload:auth2})
				})
			})
		}

	}



	createStream(values){
		return async (dispatch,getState)=>{
			const userId=getState().checkSignedIn.userId

			const response= await axiosStream.post('/streams',{...values,userId});

			dispatch({type:CREATE_STREAM,payload:response.data})
			history.push("/stream/list")

		}
	}

	fetchStreams(){
		return async dispatch=>{
			const response= await axiosStream.get('/streams');

			dispatch({type:FETCH_STREAMS,payload:response.data})

		}
	}

	fetchStream(id){
		return async dispatch=>{
			const response= await axiosStream.get(`/streams/${id}`);

			dispatch({type:FETCH_STREAM,payload:response.data})

		}
	}

	deleteStream(id){
		return async (dispatch)=>{
			const response=await axiosStream.delete(`/streams/${id}`)

			dispatch({type:DELETE_STREAM,payload:id})
		}
	}


	updateStream(id,values){
		return async (dispatch)=>{
			const response= await axiosStream.patch(`/streams/${id}`,values)

			dispatch({type:UPDATE_STREAM,payload:response.data})


		}
	}

	TaskGenerator(tasks){
		return{
			type:'GET_TASKS',
			payload:tasks
		}
	}


	signIn(userId){
		return(dispatch)=>{
			return dispatch({
				type:"SIGN_IN",
				payload:userId
			})
		}
	}

	signOut(){
		return{
			type:"SIGN_OUT"
		}
	}


	googleAuth(auth){
		return{
			type:'GOOGLE_AUTH',
			payload:auth
		}
	}
	//
	// GetAuthInfo(){
	// 	return async (dispatch,getState)=>{
	// 		await dispatch({type:'AUTH_INFO',
	// 			payload:{userID:getState().auth.currentUser.get().getId()}})
	// 	}
	// }
	//
	//
	// GoogleCheckAuth(){
	// 	return (dispatch,getState)=>{
	// 		if(getState().auth.isSignedIn.get()){
	// 			dispatch({type:'SIGNED_IN'})
	// 		}else{
	// 			dispatch({type:'SIGNED_OUT'
	// 			})
	// 		}
	// 	}
	// }


}



const Actions=new ActionCreator();

export default Actions