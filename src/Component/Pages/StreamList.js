
import React from 'react'
import {connect} from "react-redux";
import Actions from "../../Actions/ActionCreator";
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import PersonIcon from '@material-ui/icons/VideoLabel';
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import {Link} from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"


class StreamList extends React.Component{


	componentDidMount() {
		this.props.fetchStreams()
		console.log("gg")
	}

	renderList=(streams)=>{
		// console.log(streams)
		return streams.map((stream)=>{
			return (
				<ListItem button key={stream.id} className="border-bottom justify-content-between py-0">
					<div className="d-flex">
						<ListItemIcon className="align-self-start p-2">
							<PersonIcon/>
						</ListItemIcon>
						<div className={"d-flex flex-column"}>
							<Typography className="p-2" variant={"title"}>
								{stream.StreamTitle}
							</Typography>
							<Typography className="p-2" variant={"body1"}>
								{stream.StreamDescription}
							</Typography>
						</div>
					</div>
					{this.renderAdminBtn(stream)}

					{/*<ListItemText className="p-2" primary={stream.StreamTitle} secondary={stream.StreamDescription} />*/}
				</ListItem>
			)
		})
	}

	renderAdminBtn=(stream)=>{

			if(this.props.userId===stream.userId && this.props.isSignedIn){
				return(
					<div className="d-flex">

						<Link to={`/stream/edit/${stream.id}`}>
							<Button className=" mx-3" color="primary" variant="outlined">
								<EditIcon/>
							</Button>
						</Link>

						<Link to={`/stream/delete/${stream.id}`}>
							<Button className="mx-2" color="secondary" variant="outlined">
								<DeleteIcon/>
							</Button>
						</Link>

					</div>
				)
			}else{return null
			}
	}

	renderCreateBtn=()=>{
			if(this.props.isSignedIn){
				return (
					<Button size="large" variant="outlined" color="primary" >Create Stream</Button>
				)
			}else{
				return null
			}
	}

	render(){
		console.log(this.props.streams)

		return(
			<div>StreamList
			<List component="ul">
				{this.renderList(this.props.streams)}
			</List>
				<Link to="/stream/create">
					{this.renderCreateBtn()}
				</Link>
			</div>
		)
	}

}



let mapStateToProps=(state)=>{
	return {
		streams:Object.values(state.streams),
		isSignedIn:state.checkSignedIn.isSignedIn,
		userId:state.checkSignedIn.userId
	}
}


export default connect(mapStateToProps,{fetchStreams:Actions.fetchStreams,deleteStream:Actions.deleteStream})(StreamList)