import React,{Component} from 'react';
import Sharing from '../components/modal/Sharing';
import Homepage from '../components/Homepage'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

class Routes extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/modal/sharing" component={Sharing}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;