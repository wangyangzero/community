import React,{Component} from 'react';
import Sharing from '../components/modal/Sharing';
import Laboratory from '../components/modal/Laboratory';
import TechnicalPost from '../components/modal/TechnicalPost';
import Homepage from '../components/Homepage'//除在座以外的选项都选它
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

class Routes extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/modal/sharing" component={Sharing}/>
                    <Route exact path="/modal/laboratory" component={Laboratory}/>
                    <Route exact path="/modal/technicalPost" component={TechnicalPost}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;