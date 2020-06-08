import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionResult from './QuestionResult';
import QuestionVote from './QuestionVote';
import NotFound from './NotFound';

class QuestionPage extends Component {
    render() {
        if (this.props.isWrongID) {
            return <NotFound/>
        }

        const { id, voted } = this.props;

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
    var isWrongID = false;

    if (questions[id] === undefined) isWrongID = true;

    const voted = Object.keys(users[authedUser].answers).includes(id)

    return {
        id,
        voted,
        isWrongID
    }
}

export default connect(mapStateToProps)(QuestionPage)