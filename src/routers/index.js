//用于注册路由的
import React,{Component} from 'react';

import Homepage from '../components/Homepage'//除在座以外的选项都选它
import Register from '../components/Register'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

class Routes extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path='/user/Register/' component={Register} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;