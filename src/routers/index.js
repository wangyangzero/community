import React,{Component} from 'react';
import Sharing from '../components/modal/Sharing';
import TechnicalPost from '../components/modal/TechnicalPost';
import TPost from '../components/modal/TPost'
import Homepage from '../components/Homepage'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

class Routes extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/modal/sharing" component={Sharing}/>
                    <Route exact path="/modal/technicalPost" component={TechnicalPost}/>
                    <Route  path="/modal/technicalPost/:id" component={TPost}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;