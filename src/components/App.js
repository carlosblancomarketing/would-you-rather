import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import './App.css';
import LoadingBar from 'react-redux-loading';
import QuestionsHome from './QuestionsHome';
import QuestionPage from './QuestionPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        {/* <LoadingBar /> */}
        <div className="container">
          {this.props.loading === true
            ? null
            : <QuestionPage match={{params: {id: "8xf0y6ziyjabvozdd253nd"}}}/>
          }
          <div>{this.state}</div>
        </div>
      </Fragment >
    )
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
