import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import './App.css';
import LoadingBar from 'react-redux-loading';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        {/* <LoadingBar /> */}
        {this.props.questions === null
          ? null
          : (
            <div>
              <ul>
                {this.props.questionIDs.map((questionID) => {
                  var question = this.props.questions[questionID]
                  return (
                    <li>
                      <p>{question.author}</p>
                      <p>{question.timestamp}</p>
                      <p>{question.optionOne.text}</p>
                      <p>{question.optionTwo.text}</p>
                    </li>
                  )
                })}
              </ul>

            </div>
          )
        }
        <div>{this.state}</div>
      </Fragment >
    )
  }
}

function mapStateToProps({ users, questions }) {
  return {
    questions: questions,
    questionIDs: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(App);
