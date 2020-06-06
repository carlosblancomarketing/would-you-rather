import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import './App.css';
import LoadingBar from 'react-redux-loading';
import QuestionsHome from './QuestionsHome';
import QuestionPage from './QuestionPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';

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
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                <Route path='/' exact component={QuestionsHome} />
                <Route path='/question/:id' component={QuestionPage} />
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
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);

{/* <QuestionPage match={{ params: { id: "8xf0y6ziyjabvozdd253nd" } }} /> */ }