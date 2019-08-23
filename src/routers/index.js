
//用于注册路由的
import React,{Component} from 'react';
import NavMenu from '../components/Admin/menu/NavMenu';
import Homepage from '../components/Homepage'//除在座以外的选项都选它
import Register from '../components/Register'
import UsersInfo from '../components/UsersInfo'
import MessageBoard from '../components/MessageBoard'
import FireModal from '../components/Admin/manageFireModal/FireModal'
import NewModal from '../components/Admin/manageNewModal/NewModal'
import User from '../components/Admin/user/User'
import NewsContent from '../components/NewsContent'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

class Routes extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path='/user/Register/' component={Register} />
                    <Route exact path="/admin/home" component={NavMenu} />
                    <Route exact path="/usersinfo" component={UsersInfo} />
                    <Route exact path="/msgbd" component={MessageBoard} />
                    <Route exact path="/admin/firemodal" component={FireModal} />
                    <Route exact path="/admin/newmodal" component={NewModal} />
                    <Route exact path="/admin/user" component={User} />
                    <Route exact path="/news/info/:id" component={NewsContent} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;