import React from 'react'



class ActionCreator extends React.Component{

	AddTask(Task){
		return{
			type:"Add_Task",
			payload:Task
		}

	}

	TaskGenerator(tasks){
		return{
			type:'GET_TASKS',
			payload:tasks
		}
	}



	GoogleAuth(auth){
		return{
			type:'GOOGLE_AUTH',
			payload:auth
		}
	}

	GetAuthInfo(auth){
		return{
			type:'AUTH_INFO',
			payload:{userID:auth.currentUser.get().getId()}
		}
	}


	GoogleCheckAuth(){
		return (dispatch,getState)=>{
			if(getState().auth.isSignedIn.get()){
				dispatch({type:'SIGNED_IN'})
			}else{
				dispatch({type:'SIGNED_OUT'
				})
			}
		}
	}


}



const Actions=new ActionCreator();

export default Actions