import React, { Component } from 'react';
import HeaderGrid from './Component/General/HeaderGrid'
import {BrowserRouter,Route} from "react-router-dom";
import SideBar from './Component/Stream/SideBar'

import TaskList from './Component/TODO/TaskList'
import AppCss from './CSS/APP.css'




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
                      <Route path="/stream" component={SideBar}/>
                      <div>
                          <Route path="/" exact  />
                          <Route path="/tasklist" exact component={TaskList} />
                          <Route path="/s" exact component={this.item1} />
                          <Route path="/stream/delete" exact component={this.item1} />
                          <Route path="/stream/edit" exact component={this.item1} />
                          <Route path="/stream/show" exact component={this.item1} />
                      </div>

                  </div>


              </div>
          </BrowserRouter>


      </div>

    );
  }
}

export default App;
