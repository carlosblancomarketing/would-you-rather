import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import './App.css';
import LoadingBar from 'react-redux-loading';
import QuestionsHome from './QuestionsHome';
import QuestionPage from './QuestionPage';
import QuestionNew from './QuestionNew';
import Leaderboard from './Leaderboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Login from './Login';
import Logout from './Logout';
import 'materialize-css/dist/css/materialize.min.css';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router >
        <Fragment>
          {/* <LoadingBar /> */}
          <div className="container">
            {this.props.loading === true
              ? null
              : this.props.authedUser === null
                ? <div>
                  <Nav />
                  <Route path='/' component={Login} />
                </div>
                : <div>
                  <Nav />
                  <Route path='/' exact component={QuestionsHome} />
                  <Route path='/question/:id' component={QuestionPage} />
                  <Route path='/new' component={QuestionNew} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/login' component={Login} />
                  <Route path='/logout' component={Logout} />
                </div>

            }
            <div>{this.state}</div>
          </div>
        </Fragment >
      </Router>
    )
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  console.log('authedUser: ', authedUser)
  return {
    loading: Object.entries(users).length === 0,
    authedUser
  }
}

export default connect(mapStateToProps)(App);

{/* <QuestionPage match={{ params: { id: "8xf0y6ziyjabvozdd253nd" } }} /> */ }