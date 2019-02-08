import React, { Component } from 'react';
import HeaderGrid from './Component/General/HeaderGrid'
import {BrowserRouter,Route} from "react-router-dom";
import SideBar from './Component/Pages/SideBar'
import RightSideBar from './Component/Pages/RightSideBar'

import TaskList from './Component/Items/TaskList'
import AppCss from './CSS/APP.css'
import TaskForm from "./Component/Items/TaskForm";




class App extends Component {
    // constructor(props){
    //     super(props)
    //     this.ContainerRef=React.createRef()
    // }

    item1(){
        return(
            <div className={""}>
                <div>item1</div>
                <div>item2</div>
                <div>itemgg</div>
            </div>
        )
    }

  render() {
    return (
      <div>

          <BrowserRouter>
              <div>
                  <HeaderGrid/>
                  <div className={"bodyContainer"} ref={this.ContainerRef}>
                      <Route path="/" exact component={SideBar}/>
                      <div className=" text-center py-5 w-100">
                          <Route path="/" exact component={TaskList} />
                          <Route path="/s" exact component={this.item1} />
                          <Route path="/stream/delete" exact component={this.item1} />
                          <Route path="/stream/edit" exact component={this.item1} />
                          <Route path="/stream/show" exact component={this.item1} />
                      </div>
                      <Route path="/" exact component={RightSideBar}/>


                  </div>


              </div>
          </BrowserRouter>


      </div>

    );
  }
}

export default App;
