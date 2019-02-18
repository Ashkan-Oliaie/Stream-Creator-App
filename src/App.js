import React, { Component } from 'react';
import {BrowserRouter,Route,Router} from "react-router-dom";


import SideBar from './Component/Pages/SideBar'
import RightSideBar from './Component/Pages/RightSideBar'
import HeaderGrid from './Component/General/HeaderGrid'

import TaskList from './Component/Items/TaskContainer'
import AppCss from './CSS/APP.css'
import TaskForm from "./Component/Items/TaskForm";
import StreamList from "./Component/Pages/StreamList";
import StreamCreate from "./Component/Pages/StreamCreate";
import history from "./Component/General/History"
import StreamEdit from "./Component/Pages/StreamEdit";
import StreamDelete from "./Component/Pages/StreamDelete";




class App extends Component {



  render() {
    return (
      <div>

          <Router history={history}>
              <div>
                  <HeaderGrid/>
                  <div className={"bodyContainer"} ref={this.ContainerRef}>
                      <Route path="/"  component={SideBar}/>
                      <div className=" text-center py-5 w-100">
                          <Route path="/stream/create" exact component={StreamCreate} />
                          <Route path="/stream/list" exact component={StreamList} />
                          <Route path="/stream/delete/:id" exact component={StreamDelete} />
                          <Route path="/stream/edit/:id" exact component={StreamEdit} />
                          <Route path="/stream/show" exact component={this.item1} />
                      </div>
                      {/*<Route path="/stream/list"  component={RightSideBar}/>*/}


                  </div>


              </div>
          </Router>


      </div>

    );
  }
}

export default App;
