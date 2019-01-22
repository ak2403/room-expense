import React, { Component } from 'react'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CommonRoute from './Routes/common-route';
import ProtectedRoute from './Routes/protected-route';
import LoginForm from './Authentication/login-form';
import SignUp from './Authentication/sign-up';
import DashboardView from './Dashboard';
import GroupsView from './Groups'
import GroupDetails from './Groups/group-detail-view'
import { retrieveCall } from '../Redux/Actions/authentication-actions';

class MainRoute extends Component {
    componentDidMount = () => {
        let get_token = localStorage.getItem('authToken')
        if (get_token) {
            this.props.retrieveCall()
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app-main">
                    <Switch>
                        //Authentication routes
                        <CommonRoute exact path='/login' render={(props) => <LoginForm {...props} view="login" />} />
                        <CommonRoute exact path='/signup' render={(props) => <SignUp {...props} view="signup" />} />

                        //Dashboard routes
                        <ProtectedRoute exact path='/dashboard' component={DashboardView} />
                        <ProtectedRoute exact path='/groups' component={GroupsView} />
                        <ProtectedRoute exact path='/groups/:groupID' component={GroupDetails} />

                        <Redirect to="/groups" />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ retrieveCall }, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        sign_user_id: authentication.sign_user_id
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRoute)

// import React, { Component } from 'react';
// import Home from './Home.js';
// import SearchResultPage from './SearchResularPage.js';
// import { Switch, Route, BrowserRouter } from 'react-router-dom'


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'siva',
//       searchText: 'sivaprakash'
//     };
//     //this.handleClick = this.handleClick.bind(this);
//   }
//   render() {
//     return (
//       <div className="shopping-list">

//         <BrowserRouter>

//           <Switch>
//             <Route exact path='/' component={Home} />
//             <Route path='/SearchResultPage' render={() =>
//               <SearchResultPage SearchText={this.state.searchText} />
//             } />
//           </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

// export default App;