import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionResult from './QuestionResult';
import QuestionVote from './QuestionVote';
import { Redirect } from 'react-router-dom';

class QuestionPage extends Component {
    render() {
        const { id, voted, validQuestion } = this.props;

        if (!validQuestion) {
            return <Redirect to='/404' />
        }

        return (
            <div className="row">
                <div className="col s12 m8 offset-m2 mt-5">
                    {voted === true
                        ? <QuestionResult id={id} />
                        : <QuestionVote id={id} />
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const { id } = props.match.params;
    const validQuestion = questions.hasOwnProperty(id)

    const voted = Object.keys(users[authedUser].answers).includes(id)

    return {
        id,
        voted,
        validQuestion
    }
}

export default connect(mapStateToProps)(QuestionPage)