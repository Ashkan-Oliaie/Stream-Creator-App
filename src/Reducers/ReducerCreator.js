import React from 'react'

import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form"
import {CREATE_STREAM, DELETE_STREAM, FETCH_STREAM, FETCH_STREAMS, UPDATE_STREAM} from "../Actions/Types";

import _ from 'lodash'


class ReducerCreator extends React.Component{

	TaskList(state={},action){
		if(action.type==='Add_Task'){
			return{...state,ggid:action.payload}
		}else{
			return state
		}
	}

	// streamId(state=null,action){
	// 	if(action.type==='STREAM_ID'){
	// 		return action.payload
	// 	}else{
	// 		return null
	// 	}
	// }

	streamReducer(state={},action){

		const StreamArrToLists=(dataList)=>{
			let newList={}
			for(let dataSet of dataList){
				newList[dataSet.id]=dataSet
			}
			console.log(newList)
			return newList
		}

		const StreamDelete=(dataList,id)=>{
			let newList=dataList;
			delete newList[id]
			return newList
		}

		switch (action.type){

			case FETCH_STREAM:
				return {...state,[action.payload.id]:action.payload};
			case FETCH_STREAMS:
				return StreamArrToLists(action.payload);
			case UPDATE_STREAM:
				return {...state,[action.payload.id]:action.payload};
			case DELETE_STREAM:
				console.log(state)
				return state
			case CREATE_STREAM:
				return {...state,[action.payload.id]:action.payload}
			default:
				return state
		}
	}
	// _.omit(state,action.payload)


	testAuth(state={isSignedIn:null},action){
		if(action.type==='AuthFromAction'){
			return {...state,authen:action.payload,isSignedIn:action.payload.isSignedIn,userId:action.payload.currentUser.get().getId()}
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
	// streamId:Reducers.streamId,
	// authenticate:Reducers.testAuth,
	checkSignedIn:Reducers.checkSignIn,
	streams:Reducers.streamReducer,
	// userId:Reducers.checkSignIn,
	// testAuth:Reducers.testAuth
})





