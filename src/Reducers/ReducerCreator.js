import React from 'react'

import {combineReducers} from "redux";
import TaskList from "../Component/TODO/TaskList";


class ReducerCreator extends React.Component{

	TaskList(state=[],action){
		if(action.type==='Add_Task'){
			return[...state,action.payload]
		}else{
			return state
		}
	}




	GetGoogleAuth(state=null,action){
		if(action.type==='GOOGLE_AUTH'){
			return action.payload
		}else{
			return state
		}
	}




	CheckAuth(state=null,action){
		if(action.type==='SIGNED_IN'){
			return true
		}else {
			return false
		}
	}


}





const Reducers=new ReducerCreator

export default combineReducers({
	tasks:Reducers.TaskList,
	auth:Reducers.GetGoogleAuth,
	checkAuth:Reducers.CheckAuth
})





