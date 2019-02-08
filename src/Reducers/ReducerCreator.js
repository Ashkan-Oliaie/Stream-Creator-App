import React from 'react'

import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form"
import TaskList from "../Component/Items/TaskList";


class ReducerCreator extends React.Component{

	TaskList(state=[],action){
		if(action.type==='Add_Task'){
			return[...state,action.payload]
		}else{
			return state
		}
	}



	TaskList(state={},action){
		if(action.type==="GET_TASKS"){
			return action.payload}
		else{ return state
		}
	}


	checkSignIn(state={isSignedIn:null},action){
		switch (action.type){
			case 'SIGN_IN':
				return {...state, isSignedIn: true,userId:action.payload};
			case 'SIGN_OUT':
				return {...state,isSignedIn:false};
			default:
				return state

		}
	}


	// getGoogleAuth(state=null,action){
	// 	if(action.type==='GOOGLE_AUTH'){
	// 		return action.payload
	// 	}else{
	// 		return state
	// 	}
	// }
	//
	//
	// GetAuthInfo(state="",action){
	// 	if(action.type==='AUTH_INFO'){
	// 		return action.payload
	// 	}else{
	// 		return state
	// 	}
	// }
	//
	//
	//
	// CheckAuth(state=null,action){
	// 	if(action.type==='SIGNED_IN'){
	// 		return true
	// 	}else {
	// 		return false
	// 	}
	// }


}





const Reducers=new ReducerCreator

export default combineReducers({
	tasks:Reducers.TaskList,
	form:formReducer,
	checkSignedIn:Reducers.checkSignIn,
	userId:Reducers.checkSignIn
})





