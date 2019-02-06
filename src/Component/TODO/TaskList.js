import React,{Fragment} from 'react'

import AddTask from './addToList'


class TaskList extends React.Component{
	render(){
		return(
				<div className="d-flex flex-column">
					<AddTask/>
				</div>
		)
	}
}

export default TaskList